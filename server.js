var express = require('express');
var path = require('path');

var app = express();

var port = 3000;
var publicPath = path.resolve(__dirname, 'static');

app.use(express.static(publicPath));

app.listen(port, function () {
  console.log('Server running on port ' + port);
});
