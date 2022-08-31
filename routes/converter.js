const express = require("express")
const exec = require('child_process').exec;

converterRoutes = express.Router()

// Invia il grafo transformato 
converterRoutes.get('/convert', (req, res) => {
exec(
  'wine wsynth.exe -model_type dn -out_type dot -algo agaf_then_acyclic_preferences -agaf states -mono -dynamic -reachability_analysis ./test.smv',
 function(error, stdout, stderr) {
      if (error != null) {
        console.log("ERRORE: " + error);
        return res.status(500).json({ Error: error });
    } else {
        console.log("OK: " + stdout);
        return res.status(200).json({ Data: stdout });
      }
    });
});

module.exports = converterRoutes

