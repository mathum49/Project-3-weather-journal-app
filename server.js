
// Setup empty JS object to act as endpoint for all routes
const projectData = {};

const apiKey ='826b52f705c6fbe6ede8364f24bc4af2';



// Require Express to run server and routes

const express = require('express');


// Start up an instance of app
const app = express();

/* Middleware*/ 
// body parser is deprecated???
// //Here we are configuring express to use body-parser as middle-ware.
// const express= require('express');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 3000;

app.listen(port, listening);

function listening(){
    console.log("server running"); 
    console.log(`running on localhost: ${port}`);
};


// create get request

app.get('/collect', (request, response)=> {
  response.send(projectData);
});

// Create post request

app.post('/addWeather', (request, response)=> {
  projectData = request.body;
  response.send({ message: "Post recieved"})
  console.log(request);
});




