
var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();
var port    = 3000;
//var comments = JSON.parse(fs.readFileSync('_comments.json'))

app.use('/', express.static(path.join(__dirname, '/app')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


/*app.get('/comments.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(comments));
});

app.post('/comments.json', function(req, res) {
  comments.push(req.body);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(comments));
});*/

app.listen(port);

console.log('Server started: http://localhost:3000/');
