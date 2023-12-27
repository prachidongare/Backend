const Sequelize = require('sequelize');
const config = require("./config");
const db = {}

const Connection = new Sequelize(config.dataBaseName,config.dataBaseUserName,config.dataBasePassword, {
    host: config.host,
    port: config.serverSqlPort,
    dialect: 'mssql',
    logging : false,
   
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    
    dialectOptions: {
        // Observe the need for this nested `options` field for MSSQL
          options: {
            encrypt: false,
            enableArithAbort: false
          }
        },
         
  });
 
  db.sequelize = Connection;
  db.Sequelize = Sequelize;
  
  module.exports = db;

 