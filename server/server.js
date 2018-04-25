// Author: Jacques Begin
// Start Date: March 9, 2018
// This is a simple web server using the "express" npm package.



const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;


// To serve static files (images, CSS, JS, etc.) use
// the express.static built-in middleware function.
// Use path.join to refer to the absolute path of the directory.
app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine", "ejs");

// Simple GET route that responds with "GET request" on the homepage
app.get('/', (req, res) => {
  res.redirect('/index');
  // res.send('GET request');
});

app.get('/index', (req, res) => {
  res.render('html/index');
});

app.post('/', (req, res) => {
  console.log("POST");
  res.send('POST request');
});

// Starts the server listening for connections
app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
