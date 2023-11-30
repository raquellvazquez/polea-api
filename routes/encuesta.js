const express = require('express');
const ruta = express.Router();
const Encuesta = require("../models/encuesta_model")
const Joi = require('joi');

const schema = Joi.object({
    genero: Joi.string()
        .min(1)
        .max(1)
        .required(),

    rangoEdad: Joi.string()
        .min(1)
        .max(1)
        .required(),

    nacionalidad: Joi.string()
        .max(20)
        .required(),

    otraNacionalidad: Joi.string()
        .optional()
        .allow('')
        .max(60),
        //.required(), // lo tenemos que marcar como requerido? o

    estado: Joi.string()
        //.alphanum()
        .max(60)
        .required(),

    comunidad: Joi.string()
        //.alphanum()
        .max(2)
        .required(),

    comunidadIndigena: Joi.string()
        .optional()
        .allow('')
        //.alphanum()
        .max(60),

    sectorOcupacional: Joi.string()
        //.alphanum()
        .min(1)
        .max(1)
        .required(),

    pregunta1: Joi.array()
        .items(Joi.number()),
    
    pregunta2: Joi.string()
        //.alphanum()
        .min(1)
        .max(1500)
        .required(),
    
    pregunta3: Joi.string()
        //.alphanum()
        .min(1)
        .max(1500)
        .required(),
    
    pregunta4: Joi.string()
        .min(1)
        .max(1)
        .required(),
    
    pregunta5:  Joi.array()
        .items(Joi.string()),
    
    pregunta5Otra: Joi.string()
        .optional()
        .allow('')
        //.alphanum()
        .max(60),
    
    pregunta6: Joi.string()
        //.alphanum()
        .min(1)
        .max(1500)
        .required(),

    pregunta7: Joi.string()
    //.alphanum()
    .min(1)
    .max(1500)
    .required(),

    pregunta8: Joi.string()
    //.alphanum()
    .min(1)
    .max(1500)
    .required(),

    pregunta9: Joi.string()
        //.alphanum()
        .min(1)
        .max(1500)
        .required(),
    
    pregunta10:  Joi.array()
        .items(Joi.string()),

    pregunta10Otra: Joi.string()
        .optional()
        .allow('')
        //.alphanum()
        .max(60),

    pregunta11: Joi.string()
    //.alphanum()
    .min(1)
    .max(1500)
    .required(),

    pregunta12: Joi.string()
    //.alphanum()
    .min(1)
    .max(1500)
    .required(),

    pregunta13:  Joi.array()
        .items(Joi.number()),

    pregunta13Otra: Joi.string()
        .optional()
        .allow('')
        //.alphanum()
        .max(60),
    
    pregunta14: Joi.string()
        //.alphanum()
        .min(1)
        .max(1500)
        .required(),

    pregunta15: Joi.string()
        //.alphanum()
        .max(4)
        .required(),

    pregunta15Otra: Joi.string()
        .optional()
        .allow('')
        //.alphanum()
        .max(60),
    
    pregunta16:  Joi.array()
        .items(Joi.string()),

    pregunta16Otra: Joi.string()
        .optional()
        .allow('')
        //.alphanum()
        .max(60),

    pregunta17: Joi.string()
        //.alphanum()
        .min(2)
        .max(2)
        .required(),

    pregunta17Otra: Joi.string()
        .optional()
        .allow('')
        //.alphanum()
        .min(2)
        .max(60),

    pregunta18: Joi.string()
        //.alphanum()
        .min(2)
        .max(2)
        .required(),

    pregunta19: Joi.string()
        //.alphanum()
        .min(1)
        .max(1500)
        .required(),
    
    pregunta20: Joi.string()
    //.alphanum()
    .min(1)
    .max(1500)
    .required(),
})

ruta.post('/', (req, res) => {

    let body = req.body;
    const { error } = schema.validate(req.body);

    if (!error) {
        let resultado = crearEncuesta(body);
        console.log(resultado)
        resultado.then(() => {
            //  res.json({
            //      valor: encuesta
            //  })
            res.status(200).json({ message: 'Encuesta guardada exitosamente' });
        }).catch(err => {
            res.status(400).json({ error: err });
        })
    } else {
        res.status(400).json({ error: error.details[0].message });
    }
})

async function crearEncuesta(body) {

    const encuesta = new Encuesta({
        genero: body.genero,
        rangoEdad: body.rangoEdad,
        nacionalidad: body.nacionalidad,
        otraNacionalidad: body.otraNacionalidad,
        estado: body.estado,
        comunidad: body.comunidad,
        comunidadIndigena: body.comunidadIndigena,
        sectorOcupacional: body.sectorOcupacional,
        pregunta1: body.pregunta1,
        pregunta2: body.pregunta2,
        pregunta3: body.pregunta3,
        pregunta4: body.pregunta4,
        pregunta5: body.pregunta5,
        pregunta5Otra: body.pregunta5Otra,
        pregunta6: body.pregunta6,
        pregunta7: body.pregunta7,
        pregunta8: body.pregunta8,
        pregunta9: body.pregunta9,
        pregunta10: body.pregunta10,
        pregunta10Otra: body.pregunta10Otra,
        pregunta11: body.pregunta11,
        pregunta12: body.pregunta12,
        pregunta13: body.pregunta13,
        pregunta14: body.pregunta14,
        pregunta15: body.pregunta15,
        pregunta15Otra: body.pregunta15Otra,
        pregunta16: body.pregunta16,
        pregunta16Otra: body.pregunta16Otra,
        pregunta17: body.pregunta17,
        pregunta17Otra: body.pregunta17Otra,
        pregunta18: body.pregunta18,
        pregunta19: body.pregunta19,
        pregunta20: body.pregunta20,
    })
        
    return await encuesta.save();
    //     console.log(resultado)
}


module.exports = ruta;