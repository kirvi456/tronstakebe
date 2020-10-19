"use strict";
var valorMoneda = require("../models/valorMoneda");

exports.getPorHora = function (req, res) {
    valorMoneda.find({}, function(err, resultado){
        if(err) return res.status(500).send("No se pudo conectar a la base de datos.");
        if(!resultado) res.status(200).json('[]');
        res.status(200).json(resultado);
    });

};

exports.getDatos = function (req, res) {
  valorMoneda.find({}).sort('-fecha').limit(20).exec(function(err, resultado){
      if(err) return res.status(500).send("No se pudo conectar a la base de datos.");
      if(!resultado) res.status(200).json('[]');
      res.status(200).json(resultado);
  });

};

exports.postValor = function (req, res) {
  var _valor = req.body.valor;
  var valorAGuardar = new valorMoneda({
    valor: _valor
  });

  valorAGuardar.save(function (err, partida) {
    if (err) return res.status(500).json({ estado: 500, mensaje: err });
    return res.status(200).json({
      estado: 200,
      mensaje: "Valor guardado con exito.",
    });
  });
};
