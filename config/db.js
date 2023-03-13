import Sequelize from 'sequelize'
import dotenv from 'dotenv'
dotenv.config({path: '.env'})

const db = new Sequelize('realState', 'root', 'Index.jf2030', {
   charset: 'utf8mb4', host : 'localhost',  socketPath : '/var/run/mysqld/mysqld.sock',
   port: 3306,
   dialect: 'mysql',
   logging: function () {},
   define: {
      timestamps:true,
      paranoid: true
   },
   pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
   },
   operatorAliases: false,



});
//Checking connection status




export default db;
