const express = require('express');
const ruta = express.Router();
const Encuesta = require("../models/encuesta_model")
const Joi = require('joi');

const schema = Joi.object({
    datosGenerales: Joi.object({
        genero: Joi.number()
            .integer()
            .required(),

        rangoEdad: Joi.number()
            .integer()
            .required(),

        nacionalidad: Joi.string()
            .min(3)
            .max(50)
            .required(),

        estado: Joi.string()
            .alphanum()
            .min(3)
            .max(50)
            .required(),

        comunidad: Joi.string()
            .alphanum()
            .min(2)
            .max(50)
            .required(),

        sectorOcupacion: Joi.string()
            .alphanum()
            .min(1)
            .max(1)
            .required(),
    }),
    // cuestionario: Joi.object({
    //     pregunta1: Joi.number()
    //         .integer()
    //         .required(),
    // })


})

ruta.post('/', (req, res) => {

    let body = req.body;
    const { error, value } = schema.validate(req.body);

    if (!error) {
        let resultado = crearEncuesta(body);
        console.log(resultado)
        resultado.then((encuesta) => {
            // res.json({
            //     valor: encuesta
            // })
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
         datosGenerales : {
                genero: body.datosGenerales.genero,
                rangoEdad: body.datosGenerales.rangoEdad,
                nacionalidad: body.datosGenerales.nacionalidad,
                estado: body.datosGenerales.estado,
                comunidad: body.datosGenerales.comunidad,
                sectorOcupacion: body.datosGenerales.sectorOcupacion
        }
    })
        
    return await encuesta.save();
    //     console.log(resultado)
}


module.exports = ruta;