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

//The endpoint for all the api actions, using the Routes.
app.use('/api', Routes )

// Test
app.get('/test', function (req, res) {
res.set('Content-Type', 'application/json');
res.send('{"message":"Hello from the custom server!"}');
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname + '/../client/build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
