'use strict';
const express = require('express');
const converterRoutes = require("./routes/converter")
const cors = require("cors")

// Constants
const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(express.json())
app.use(cors({ origin: "*" }))
app.use("/converter", converterRoutes)
// app.get("/", () => { })

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

