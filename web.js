var express = require('express');
var app = express.createServer(express.logger());
var fs = require("fs");
var buf = new Buffer(256);

//read file                                                                                                                                
app.get('/', function(request, response) {
  //read file                                                                                                                              
  fs.readFile('index.html', function (err, buf) {
    if (err) throw err;
      response.send(buf.toString('utf-8'));  
    });  
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
