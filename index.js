const winston = require('winston');
const express = require('express');
const app = express();


require('./startup/logging');
require('./startup/route')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();


const port = process.env.PORT || 3021;
app.listen(port,() => winston.info(`Listenning at port ${port} ..`));