"use strict";
var retiroModel = require("../models/retiroModel");


exports.postValor = function (req, res) {
    var _player = req.body.valor;
    var _valor = req.body.valor;

    var query   = {player: _player},
    update      = { $inc: { valor: _valor }},
    options     = { upsert: true, new: true, setDefaultsOnInsert: true };

    retiroModel.findOneAndUpdate(query, update, options, function(error, result) {
        if (error) return res.status(500).json({ estado: 500, mensaje: err });
        return res.status(200).json({
            estado: 200,
            mensaje: "Valor guardado con exito.",
        });

    });        
  };