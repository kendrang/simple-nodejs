//just a runtime executing javascript files

var http = require('http');

function onRequest(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello 5.2! This is our demo using Node.js!');
    response.end();
}

http.createServer(onRequest).listen(8000);
