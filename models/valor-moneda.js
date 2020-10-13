"use strict";
var mongoose = require("mongoose");
var schema = mongoose.Schema;

var valorMonedaSchema = mongoose.Schema({
  fecha: Date,
  valor: Number,
});

module.exports = mongoose.model(
  "valorMonedaSchema",
  valorMonedaSchema,
  "valorMoneda"
);
