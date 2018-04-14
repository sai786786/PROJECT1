    var http = require('http');
     
    var server = http.createServer(function handler(req, res) {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Hello!!!');
    });
     
    server.listen(3001);
    console.log('Server running at http://127.0.0.1:3000/');
