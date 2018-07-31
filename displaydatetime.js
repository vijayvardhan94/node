var http = require('http');
var dt = require('./datetime_module');
var server = http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.write("The date and time are currently: " + dt.myDateTime());
res.end();
});

server.listen(8080);