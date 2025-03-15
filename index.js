var express = require('express');
const ai = require('./app.js');
var app = express();

app.get('/', function (req, res) {
  res.sendFile('./index.html', {root: __dirname });
}); 

app.get('/api/prompt', function (req, res) {
  st = req.query.query;
  ai.main([st]).then(function(result) {
    //console.log(result);
    res.send(result);
  });
}); 

app.listen(3000, function () {
  console.log('Server listening on port 3000!');
});

