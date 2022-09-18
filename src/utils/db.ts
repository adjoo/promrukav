import mysql from 'mysql'

const config = require('../config')

const connection = mysql.createConnection({
    host     : config.HOST,
    user     : config.DBUSER,
    password : config.DBPASSWORD,
    database : config.DBNAME
});

connection.connect((error)=>{
    if(error){
        return console.log('Database connection error')
    } else {
        return console.log('Database connected!')
    }
})


module.exports = connection