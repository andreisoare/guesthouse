var express = require('express');
var fs = require('fs');

var rootPath = process.argv[2] || '.';
var defaultPath = rootPath + '/index.html';

var app = express();

app.get(/^(.*)$/, function(req, res){
  var path = rootPath + req.params[0];
  fs.stat(path, function(err, stat) {
    if (err || !stat.isFile()) {
      console.log('File not found: ' + path);
      path = defaultPath;
    }
    console.log('Serving', path);
    res.sendfile(path);
  });
});

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});
