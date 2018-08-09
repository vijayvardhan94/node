var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
var page = url.parse(req.url).pathname;
console.log(page);
res.writeHead(200, {"Content-Type": "text/plain"});
if (page == '/') {
res.write('this is the home page');
}
else if (page == '/two') {
res.write('this is the second page');
}
else if (page == '/three/restricted') {
res.write('you have no access here');
}
res.end();
});
server.listen(8080);    