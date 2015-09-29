var express = require('express');


var app = express();

var port = process.env.PORT || 3030;

app.get('/', function(req, res) {
  res.send('Welcome to book API');
});

app.listen(port, function(){
  console.log('Running on port:' + port);
});



