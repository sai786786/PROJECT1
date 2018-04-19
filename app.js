var http = require('http');
var config = require('./config.js').get(process.env.NODE_ENV);

var server = http.createServer(function (req, res) {
    res.writeHead(200);
    res.end('Hi everybody! ' + config.common.ServerName + ' follow us on :' + config.twitter.callbackURL);
});
server.listen(config.common.port, () => console.log('Started'));
