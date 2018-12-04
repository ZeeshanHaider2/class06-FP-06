const express = require('express');
const database = require('./database');

const Router = express.Router;

const Routes = Router();

Routes
    //Get all the mentors
    .get('/mentors', (req, res) => {
        console.log('called');
        database.getAllMentors()
        .then((result) => {
            res.send(result);
        })
        .catch((error)=>{ throw error})
    })

module.exports = Routes;