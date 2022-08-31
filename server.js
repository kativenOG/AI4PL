'use strict';
const express = require('express');

// Constants
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', (req, res) => {
  var exec = require('child_process').exec;

  exec('wsynth.exe', ['-model_type', 'dn', '-out_type', 'dot', '-algo', 'agaf_then_acyclic_preferences', '-agaf', 'states', '-mono', '-dynamic', '-reachability_analysis', './test.smv'], function(err, data) {
    if (err) {
      console.log("ERRORE: " + err);
      res.json('{ Error: ' + err + '}');
    }
    else {
      console.log("OK: " + data.toString());
      res.json('{ success: ' + data + '}');
    }
  });

});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
// app.post('/', (req, res) => {


// // wsynth.exe -model_type dn -out_type dot -algo agaf_then_acyclic_preferences -agaf states -mono -dynamic -reachability_analysis file.smv > .\output.dot

// var execFile = require('child_process').execFile;


// execFile('wsynth.exe', ['-model_type', 'dn', '-out_type', 'dot', '-algo', 'agaf_then_acyclic_preferences', '-agaf', 'states', '-mono', '-dynamic', '-reachability_analysis', './test.smv'], function(err, data) {
// if (err) {
// console.log("ERRORE: " + err);
// }
// else
// console.log("OK: " + data.toString());
// });
// res.send('Hello World');
// });

