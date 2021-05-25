const express = require('express')
const morgan = require('morgan')
const path = require('path')
const mongoose = require('mongoose')
const MongoClient = require('mongodb').MongoClient
const bodyparser = require('body-parser')


/*I Ejecutando express*/
const app = express()
/*I definiendo puerto*/
app.set('port', process.env.PORT || 8080);
/*F definiendo puerto*/


app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({extended:false}))


/*i Se reuire la ruta de la carpeta server*/
app.use("", require('./routes/starwars.routes'))
/*F Se reuire la ruta de la carpeta server*/


module.exports = app;
