const mongoose = require("mongoose");

const encuestaSchema = new mongoose.Schema({
    datosGenerales: {
        genero: {
            type: Number,
            required: true
        },
        rangoEdad: {
            type: Number,
            required: true
        },
        nacionalidad: {
            type: String,
            required: true
        },
        estado: {
            type: String,
            required: true
        },
        comunidad: {
            type: String,
            required: true
        },
        sectorOcupacion: {
            type: String,
            required: true
        },
    }
});
    
module.exports = mongoose.model('Encuesta', encuestaSchema);