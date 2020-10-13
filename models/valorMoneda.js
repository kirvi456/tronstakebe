'use strict'
var mongoose = require('mongoose');

var valorMonedaSchema = new mongoose.Schema({
    fecha: Date,    
    valor: Number,
});

module.exports = mongoose.model('valorMoneda', valorMonedaSchema, "moneda");