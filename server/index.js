const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const Routes = require('./Routes');

//We set up all the components of our router.
const app = express();

app.use(bodyParser.urlencoded({
extended: true
}));

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// Test
app.get('/test', function (req, res) {
res.set('Content-Type', 'application/json');
res.send('{"message":"Hello from the custom server!"}');
});

//The endpoint for all the api actions, using the Routes.
app.get('/api', Routes );

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
