'use strict'

/**
 * Express Init
 * Setting Port
 * Cors Init
 * Dotenv Init
 * Body Parser
 * /
  
 */

// Initalization dotenv
require('dotenv').config();

// Initalization Libraries
const express = require('express');
const app = express();
const Cors = require('cors');
const bodyParser = require('body-parser');
const {router} = require('./router/router');

// Initalization PORT
const port = process.env.Port || 3000;

// Cors Option Origin
let originoptioncors = {
    origin: `https://localhost:${port}`
}

app.use (Cors(originoptioncors));



//Routing
app.use (`/`, router);

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//Port Connection
app.listen (port, () => `port connected on ${port}`);