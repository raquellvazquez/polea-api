const mongoose = require("mongoose");

const encuestaSchema = new mongoose.Schema({
    genero: {
        type: String,
        required: true
    },
    rangoEdad: {
        type: String,
        required: true
    },
    nacionalidad: {
        type: String,
        required: true
    },
    otraNacionalidad: {
        type: String,
        required: false
    },
    estado: {
        type: String,
        required: true
    },
    comunidad: {
        type: String,
        required: true
    },
    comunidadIndigena: {
        type: String,
        required: false
    },
    sectorOcupacional: {
        type: String,
        required: true
    },
    pregunta1: {
        type:[Number],
        required: true
    },
    pregunta2: {
        type: String,
        required: true
    },
    pregunta3: {
        type: String,
        required: true
    },
    pregunta4: {
        type: String,
        required: true
    },
    pregunta5: {
        type: [String],
        required: true
    },
    pregunta5Otra: {
        type: String,
        required: false
    },
    pregunta6: {
        type: String,
        required: true
    },
    pregunta7: {
        type: String,
        required: true
    },
    pregunta8: {
        type: String,
        required: true
    },
    pregunta9: {
        type: String,
        required: true
    },
    pregunta10: {
        type: [String],
        required: true
    },
    pregunta10Otra: {
        type: String,
        required: false
    },
    pregunta11: {
        type: String,
        required: true
    },
    pregunta12: {
        type: String,
        required: true
    },
    pregunta13: {
        type: [Number],
        required: true
    },
    pregunta13Otra: {
        type: String,
        required: false
    },
    pregunta14: {
        type: String,
        required: true
    },
    pregunta15: {
        type: String,
        required: true
    },
    pregunta15Otra: {
        type: String,
        required: false
    },
    pregunta16: {
        type: [String],
        required: true
    },
    pregunta16Otra: {
        type: String,
        required: false
    },
    pregunta17: {
        type: String,
        required: true
    },
    pregunta17Otra: {
        type: String,
        required: false
    },
    pregunta18: {
        type: String,
        required: true
    },
    pregunta19: {
        type: String,
        required: true
    },
    pregunta20: {
        type: String,
        required: true
    },
}
);
    
module.exports = mongoose.model('Encuesta', encuestaSchema);