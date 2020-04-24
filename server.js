/* Empty JS object to act as endpoint for all routes */
const geoProjectData = {};
const weaProjectData = {};
const ProjectData = {};






/* Express to run server and routes */
const express = require('express');

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static('website'));
//Decided to use an uncommon port for expiremental purposes
const port = 7100;
/* Spin up the server*/
app.listen(port, listening);
 function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
  };

  /* Geonames API*/
// GET route
app.get('/geoall', sendData);

function sendData (request, response) {
  response.send(geoProjectData);
};

// POST route
//Combine the two POSTS Functions into one
app.post('/geoadd', geoCallBack);
function geoCallBack (req,res){
  Object.assign(geoProjectData,req.body);
  res.send(true);
};

  /* Weatherbit API*/
// GET route
app.get('/weaall', weaSendData);

function weaSendData (request, response) {
  response.send(weaProjectData);
};

// POST route
//Combine the two POSTS Functions into one
app.post('/weaadd', weaCallBack);
function weaCallBack (req,res){
  Object.assign(weaProjectData,req.body);
  res.send(true);
};
  




/* aby API*/
// GET route

app.get('/all', SendData);

function SendData (request, response) {
  response.send(ProjectData);
};

// POST route
//Combine the two POSTS Functions into one
app.post('/add', CallBack);
function CallBack (req,res){
  Object.assign(ProjectData,req.body);
  res.send(true);
};
