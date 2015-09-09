var express = require('express'),
bodyParser = require('body-parser'),
app = express();

var api = {
    test: require('./api/test'),
    statica: require('./api/statica')
};

// parse application/json
app.use(bodyParser.json());

// serve static content at root
app.use(express.static(__dirname + '/public'));

// api routes
app.post('/api/test', api.test.post);
app.get('/api/test', api.test.get);
app.put('/api/test', api.test.put);
app.delete('/api/test', api.test.delete);

// api: statica
// usage (test): GET <host>/api/statica
// usage: GET <host>/api/statica?url=<url to proxy to>
app.get('/api/statica', api.statica.get);

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

process.on( 'SIGINT', function() {
    console.log( "\nQuitting... (Ctrl-C)" );
    process.exit( );
});