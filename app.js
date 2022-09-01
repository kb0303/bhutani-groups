const express = require('express');
const path = require('path');

const app = express();
var cors = require('cors');

// use it before all route definitions
app.use(cors({origin: 'https://www.youtube.com'}));

app.use(express.urlencoded({ extended: true }));

const port = 8080;

app.use('/static', express.static('static')) // For serving static files

app.set('views', path.join(__dirname, 'views'))

// sendFile will go here
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});
app.get('/alphathum', function (req, res) {
  res.sendFile(path.join(__dirname, '/views/alphathum.html'));
});
app.get('/cyberthum', function (req, res) {
  res.sendFile(path.join(__dirname, '/views/cyberthum.html'));
});
app.get('/city', function (req, res) {
  res.sendFile(path.join(__dirname, '/views/city.html'));
});
app.get('/techno', function (req, res) {
  res.sendFile(path.join(__dirname, '/views/techno.html'));
});
app.get('/thank', function (req, res) {
  res.sendFile(path.join(__dirname, '/views/thank.html'));
});
app.get('/disclaimer', function (req, res) {
  res.sendFile(path.join(__dirname, '/views/disclaimer.html'));
});


// START THE SERVER
app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});