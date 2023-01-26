'use strict';
import dotenv from "dotenv"
dotenv.config()

import converterRoutes  from "./routes/converter"
import express, {Express} from "express"
const cors  = require("cors")

// Constants
const PORT: string = process.env.PORT?.toString() || "5000";
// App
const app: Express= express();
app.use(express.json())
app.use(cors({ origin: "*" }))
app.use("/converter", converterRoutes)

app.listen(PORT);
console.log(`Running on Port: ${PORT}`);


