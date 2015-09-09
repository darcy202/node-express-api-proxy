exports.post = function(req, res) {
    var data= {
        status: 'test response: post/create'
    };

    res.send(data);
};

exports.get = function(req, res) {
    var data= {
        status: 'test response: get/read'
    };

    res.send(data);
};

exports.put = function(req, res) {
    var data= {
        status: 'test response: put/update'
    };

    res.send(data);
};

exports.delete = function(req, res) {
    var data= {
        status: 'test response: delete/delete'
    };

    res.send(data);
};