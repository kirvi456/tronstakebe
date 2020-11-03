'use strict'
var express = require('express');
var controller = require('../controllers/retiroController');
var api = express.Router();


api.post('/postValorRetiro',                          controller.postValor);
api.post("/getReinversion",                           controller.getValor);

module.exports = api;