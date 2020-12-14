'use strict'
var express = require('express');
var controller = require('../controllers/valorMonedaUSDT');
var api = express.Router();





api.get('/getPorHoraUSDT',                 controller.getPorHora);
api.get('/getDatosUSDT',                   controller.getDatos);
api.get('/getPerWeekUSDT',                 controller.getPerWeek);
api.get('/getPerMonthUSDT',                controller.getPerMonth);

api.post('/postValorUSDT',                  controller.postValor);


module.exports = api;