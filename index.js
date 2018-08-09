var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.on('request', function (request, response) {
    if (request.method === "GET" && request.url === '/index') {
        fs.readFile('./index.html', function(err, data) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        response.end();
        });
    } else {
        response.statusCode = 404;
        fs.readFile('./404.jpg', function(err, data) {
            response.writeHead(404, {'Content-Type': 'image/jpeg'});
            response.write(data);
            response.end();
            });
    };
});
server.listen(9000);