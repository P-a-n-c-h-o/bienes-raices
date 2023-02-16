import Sequelize from 'sequelize'
import dotenv from 'dotenv'
dotenv.config({path: '.env'})

const db = new Sequelize('bienesraices_node_mvc', 'root', '2021GTL2030', {
    host: 'https://realstate-gli1.onrender.com',
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

export default db;
