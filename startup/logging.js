const winston = require('winston');
require('winston-mongodb');
require('express-async-errors');



module.exports = function() {
    // winston.handleExceptions(
    //   new winston.transports.File({ filename: 'uncaughtExceptions.log' }));
      
    //   process.on('unhandledRejection', (ex) => {
    //     throw ex;
    //   });
  
  //   const logger = winston.createLogger({
      
  //     level: 'info',
  //     format: winston.format.json(),
  //     defaultMeta: { service: 'user-service' },
  //     transports: [
      
  //       new winston.transports.File({ filename: 'error.log', level: 'error' }),
  //       new winston.transports.File({ filename: 'combined.log' }),

  //       new winston.transports.File({ filename: 'uncaughtExceptions.log' }),
        
  //       new winston.transports.MongoDB({ 
  //           db: 'mongodb://localhost/blog',
  //           level: 'info'
  //         }),
             
  //     ],
  //   });
     
  //   //
  //   // If we're not in production then log to the `console` with the format:
  //   // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
  //   //
  //   if (process.env.NODE_ENV !== 'production') {
  //     logger.add(new winston.transports.Console({
  //       format: winston.format.simple(),
  //     }));
  //   }
  // winston.add(logger);

  winston.handleExceptions(
    new winston.transports.File({ filename: 'uncaughtExceptions.log' }));
  
  process.on('unhandledRejection', (ex) => {
    throw ex;
  });
  
  winston.add(winston.transports.File, { filename: 'logfile.log' });
  winston.add(winston.transports.MongoDB, { 
    db: 'mongodb://localhost/blog',
    level: 'info'
  }); 
}