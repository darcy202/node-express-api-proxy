var request = require('request'),
cfenv = require('cfenv'),
appEnv = cfenv.getAppEnv(),
env_statica = appEnv.getService(/statica/i),
options = {
    proxy: env_statica.credentials.STATICA_URL || process.env.STATICA_URL,
    headers: {
        'User-Agent': 'Bluemix/Statica'
    }
};

// debug
// console.log(cfenv.getAppEnv());
// console.log(appEnv.getServices());

if (env_statica && env_statica.credentials && env_statica.credentials.STATICA_URL)
    console.log('Good news - Statica service (' + appEnv.getService(/statica/i).name + ') detected.');
else
    console.log('No Statica service found. Please create and bind an instance of the Statica service to your application.');


// exports.post = function(req, res) {
//     var data= {
//         status: 'test response: post/create'
//     };

//     res.send(data);
// };

exports.get = function(req, res) {
    var data= {};

    if (req.query.url)
        options.url = req.query.url;
    else
        options.url = 'http://ip.jsontest.com';

    request(options, function (error, response, body) {
        data.url = options.url;
        data.statusCode = response.statusCode;
        data.body = body;

        if (error)
            data.error = error;

        res.send(data);
    });
};

// exports.put = function(req, res) {
//     var data= {
//         status: 'test response: put/update'
//     };

//     res.send(data);
// };

// exports.delete = function(req, res) {
//     var data= {
//         status: 'test response: delete/delete'
//     };

//     res.send(data);
// };