'use strict'
var express = require('express');
var controller = require('../controllers/valorMoneda');
var api = express.Router();





api.post('/getPorHora',                 controller.getPorHora);
api.post('/postValor',                  controller.postValor);


module.exports = api;