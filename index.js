const express = require('express');
const path = require('path');
const mentors = require('./mentors');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api', (req,res) => {
    var answer = 'Server responding';
    res.json(answer);
    console.log('An answer form the server');
});

//Get mentors
app.get('/mentors', (req,res) => {
    res.send('Geting the mentors endpoint');
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);