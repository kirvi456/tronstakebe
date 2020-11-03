'use strict'
var mongoose = require('mongoose');

var RetiroSchema = new mongoose.Schema({
    player: {type: String, required: true},
    valor: {type: Number, required: true}
});

module.exports = mongoose.model('retiroModel', RetiroSchema, "retiro");