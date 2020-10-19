'use strict'
var express = require('express');
var controller = require('../controllers/valorMoneda');
var api = express.Router();





api.get('/getPorHora',                 controller.getPorHora);
api.get('/getDatos',                   controller.getDatos);

api.post('/postValor',                  controller.postValor);


module.exports = api;