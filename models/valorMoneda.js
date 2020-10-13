'use strict'
var mongoose = require('mongoose');

var valorMonedaSchema = new mongoose.Schema({
    fecha: {type: Date, default: Date.now},    
    valor: Number,
});

module.exports = mongoose.model('valorMoneda', valorMonedaSchema, "moneda");