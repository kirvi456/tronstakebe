'use strict'
var express = require('express');
var controller = require('../controllers/valorMonedaETH');
var api = express.Router();





api.get('/getPorHoraETH',                 controller.getPorHora);
api.get('/getDatosETH',                   controller.getDatos);
api.get('/getPerWeekETH',                 controller.getPerWeek);
api.get('/getPerMonthETH',                controller.getPerMonth);

api.post('/postValorETH',                  controller.postValor);


module.exports = api;