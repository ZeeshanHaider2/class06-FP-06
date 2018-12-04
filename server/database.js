//We require mysql.
const mysql =  require('mysql');

console.log('from database');

//A constant variable containing all the data we need for the database connection in the .env file

const config = {
    host : process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    database: process.env.DB_DB
}

//We create the connection

const { host, user, password, port, database } = config;
const connection = mysql.createConnection({
    host,
    user,
    password,
    port,
    database
});

connection.getAllMentors = function () {
    this.connect(() => {
        console.log('Connected to database');
    })

    return new Promise((resolve, reject) => {
        this.query('SELECT * FROM `mentors`', (error, result) => {
            if (error) reject(error)
            resolve(result)
        })
    })
}

module.exports = connection;