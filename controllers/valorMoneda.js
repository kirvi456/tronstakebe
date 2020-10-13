"use strict";
var valorMoneda = require("../models/valorMoneda");

exports.getPorHora = function (req, res) {};

exports.postValor = function (req, res) {
  var _valor = req.body.valor;

  console.log(_valor);

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
