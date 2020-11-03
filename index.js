'use strict'
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var port = 3000;

const jsonErrorHandler = async (err, req, res, next) => {
    res.status(500).send({ error: err });
}

var app = express();

var retiro_routes = require('./routers/retiroRouter');
var valorMoneda_routes = require('./routers/valorMoneda');
var cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(jsonErrorHandler)



app.use('/', valorMoneda_routes);
app.use('/', retiro_routes);


module.exports = app;


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/valormoneda', { useNewUrlParser: true, useFindAndModify: false  })
    .then(() => {
        console.log("La conexión a la base de datos se ha realizado correctamente.")
        app.listen(port, () => {
            console.log("servidor corriendo en http://localhost:" + port);
        });
    })
    .catch(err => console.log(err));