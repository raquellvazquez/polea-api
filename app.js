//require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const encuesta = require("./routes/encuesta");


const debug = require("debug")("app:inicio");
//const dbDebug = require("debug")("app:db");
const config = require("config");
const morgan = require('morgan');

mongoose.connect("mongodb://127.0.0.1:27017/polea")
.then(() => console.log("conectado a mongobd"))
.catch(err => console.log("no se pudo conectar con mongobd", err));


const app = express();
// //middelware 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api/encuesta", encuesta);


// //configuracion de entornos
// console.log(config.get('nombre'));

// //morgan - logger
// if(app.get("env") === "development") {
//     app.use(morgan("tiny"));
//     //console.log("morgan habilitado")
//     debug("morgan habilitado")
// }


app.listen(3000, () => {
    console.log(`escuchando en puerto 3000`)
})