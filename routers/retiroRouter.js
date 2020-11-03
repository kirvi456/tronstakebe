'use strict'
var express = require('express');
var controller = require('../controllers/retiroController');
var api = express.Router();


api.post('/postValorRetiro',                  controller.postValor);


module.exports = api;