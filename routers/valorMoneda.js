'use strict'
var express = require('express');
var controller = require('../controllers/valorMoneda');
var api = express.Router();





api.get('/getPorHora',                 controller.getPorHora);
api.get('/getDatos',                   controller.getDatos);
api.get('/getPerWeek',                 controller.getPerWeek);
api.get('/getPerMonth',                 controller.getPerMonth);

api.post('/postValor',                  controller.postValor);


module.exports = api;