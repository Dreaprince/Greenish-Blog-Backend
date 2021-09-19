const winston = require('winston');
const mongoose = require('mongoose');


module.exports = function() {
    mongoose.connect('mongodb://localhost/blog')
      .then(() => winston.info('Connected to MongoDb ...'))  
}