    var http = require('http');
     
    var server = http.createServer(function handler(req, res) {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Hello Jenkins is working test!!!');
    });
     
    server.listen(3000);
    console.log('Server running at http://127.0.0.1:3000/');
