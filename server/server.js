// ¡¡¡¡¡¡TODAS LAS RUTAS DEBEN IR DESPUÉS DE LAS LIBRERÍAS!!!!!!
// 


// SE INCLUYE EL ARCHIVO CONFIG.JS PARA UTILIZAR EL PORT
require('./config/config');

// =============================================
// LIBRERÍAS

const express = require('express');
const mongoose = require('mongoose');

// =============================================
// SE INICIA EL EXPRESS
const app = express();
// SE USA EL BODY PARSER
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

// =============================================
// CONFIGURACIÓN GLOBAL DE LAS RUTAS --------> DESPUÉS DE LAS LIBRERÍAS
  app.use (require('./routes/index'));
// =============================================

// ===============================================================================
// CONEXIÓN A LA BASE DE DATOS CON MONGOOSE

mongoose.connect(process.env.URLDB, 
                      { useNewUrlParser: true, useCreateIndex: true },     
                      (err, res) => {

  if (err) throw err;

  console.log('Base de datos ONLINE');

});

// ===============================================================================
//  AQUÍ SE UTILIZA EL ARCHIVO CONFIG.JS
app.listen(process.env.PORT, () => {
    console.log('Escuchando el puerto: ', 3000);
});