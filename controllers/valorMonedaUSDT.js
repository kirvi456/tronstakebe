"use strict";
var valorMonedaUSDT = require("../models/valorMonedaUSDT");

exports.getPorHora = function (req, res) {
    valorMonedaUSDT.find({}, function(err, resultado){
        if(err) return res.status(500).send("No se pudo conectar a la base de datos.");
        if(!resultado) res.status(200).json('[]');
        res.status(200).json(resultado);
    });

};

exports.getPerWeek = function (req, res) {
  valorMonedaUSDT.find({fecha:{
    $gte: new Date(new Date() - 7 * 60 * 60 * 24 * 1000)
    }
  }).sort('-fecha').exec(function(err, resultado){
      if(err) return res.status(500).send("No se pudo conectar a la base de datos.");
      if(!resultado) res.status(200).json('[]');
      res.status(200).json(resultado);
  });

};

exports.getPerMonth = function (req, res) {
  valorMonedaUSDT.find({}).sort('-fecha').exec(function(err, resultado){
      if(err) return res.status(500).send("No se pudo conectar a la base de datos.");
      if(!resultado) res.status(200).json('[]');
      res.status(200).json(resultado);
  });

};

exports.getDatos = function (req, res) {
  valorMonedaUSDT.find({}).sort('-fecha').limit(20).exec(function(err, resultado){
      if(err) return res.status(500).send("No se pudo conectar a la base de datos.");
      if(!resultado) res.status(200).json('[]');
      res.status(200).json(resultado);
  });

};

exports.postValor = function (req, res) {
  var _valor = req.body.valor;
  var valorAGuardar = new valorMonedaUSDT({
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
