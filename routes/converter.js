const express = require("express")
const exec = require('child_process').exec;

converterRoutes = express.Router()
// tr -d <file> per fare un single liner 

// POST: riceve in json il file, lo pipa e poi ne ricava il contenuto  
converterRoutes.post('/convert', (req, res) => {
  exec("echo \"" + req.body.data+ "\" > test.smv",
    function(error, stdout, stderr) {
      if (error != null) {
         console.log("ERRORE: " + error);
         return res.status(500).json({ Error: error });
      } else {
	 exec('wine wsynth.exe -model_type dn -out_type dot -algo agaf_then_acyclic_preferences -agaf states -mono -dynamic -reachability_analysis ./test.smv > output.dot 2>&1  && cat output.dot',
          function(error, stdout, stderr) {
            if (error != null) {
              console.log("ERRORE: " + error);
              return res.status(500).json({ Error: error });
            } else {
              console.log("OK: " + stdout);
              return res.status(200).json({ Data: stdout });
	      //return res.status(200).attachment("output.dot");
            }
          })
      }
    });
});

module.exports = converterRoutes

