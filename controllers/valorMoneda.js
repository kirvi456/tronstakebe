'use strict'
var Nacimiento = require('../models/valorMoneda');

exports.getPorHora = function (req, res){
	var dpiPoM = req.body.dpipadremadre;
    Nacimiento.find({$or:[{dpipadre:  dpiPoM}, {dpimadre:  dpiPoM}]}, function(err, resultado){
        if(err) return res.status(500).send("No se pudo conectar a la base de datos.");
        if(!resultado) res.status(200).json('[]');
        res.status(200).json(resultado);
    });
}


exports.postValor = function (req, res){
	var dpiPoM = req.body.dpipadremadre;
    Nacimiento.find({$or:[{dpipadre:  dpiPoM}, {dpimadre:  dpiPoM}]}, function(err, resultado){
        if(err) return res.status(500).send("No se pudo conectar a la base de datos.");
        if(!resultado) res.status(200).json('[]');
        res.status(200).json(resultado);
    });
}

