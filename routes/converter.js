const express = require("express")
const exec = require('child_process').exec;

converterRoutes = express.Router()

converterRoutes.post('/convert/complete', (req, res) => {
  exec("echo \"" + req.body.data + "\" > test.smv",
    function(error, stdout, stderr) {
      if (error != null) {
        console.log("ERRORE: " + error);
        return res.status(500).json({ Error: error });
      } else {
        exec('wine wsynth.exe -model_type dn -out_type dot -algo agaf_then_acyclic_preferences -agaf states -mono -dynamic -reachability_analysis ./test.smv > output.dot 2>&1 ',
          function(error, stdout, stderr) {
            if (error != null) {
              console.log("ERRORE: " + error);
              return res.status(500).json({ Error: error });
            } else {
              exec('cat output.dot',
                function(error, stdout, stderr) {
                  if (error != null) {
                    console.log("ERRORE: " + error);
                    return res.status(500).json({ Error: error });
                  } else {
                    console.log("OK: " + stdout);
                    return res.status(200).json({ Data: stdout });
                  }
                })
            }
          })
      }
    })
})

// Da finire 
converterRoutes.post('/convert/graph', (req, res) => {
  exec("echo \"" + req.body.data + "\" > test.smv",
    function(error, stdout, stderr) {
      if (error != null) {
        console.log("ERRORE: " + error);
        return res.status(500).json({ Error: error });
      } else {
        exec('wine wsynth.exe -model_type dn -out_type dot -algo agaf_then_acyclic_preferences -agaf states -mono -dynamic -reachability_analysis ./test.smv > output.dot 2>&1 ',
          function(error, stdout, stderr) {
            if (error != null) {
              console.log("ERRORE: " + error);
              return res.status(500).json({ Error: error });
            } else {
              exec('cat output.dot',
                function(error, stdout, stderr) {
                  if (error != null) {
                    console.log("ERRORE: " + error);
                    return res.status(500).json({ Error: error });
                  } else {
                    console.log("OK: " + stdout);
                    return res.status(200).json({ Data: stdout });
                  }
                })
            }
          })
      }
    })
})



module.exports = converterRoutes

