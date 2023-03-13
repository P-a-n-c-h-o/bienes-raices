import Sequelize from 'sequelize'
import dotenv from 'dotenv'
dotenv.config({path: '.env'})

const db = new Sequelize('realState', 'root', 'Index.jf2030', {
   host: '127.0.0.1',
   port: 3306,
   dialect: 'mysql',
   define: {
      timestamps:true
   },
   pool: {
      max: 5,   
      min: 0,
      acquire: 30000,
      idle: 10000
   },
   operatorAliases: false

});
//Checking connection status




export default db;
