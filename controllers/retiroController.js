"use strict";
var retiroModel = require("../models/retiroModel");


exports.postValor = function (req, res) {
    var _player = req.body.valor;
    var _valor = req.body.valor;
    var valorAGuardar = new retiroModel({
        player: _player,
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