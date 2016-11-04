var express = require('express');
var app = express();
var Search = require('bing.search');
var key = require('./key');
var search = new Search(key.mc());

//console.log(key.mc());
app.get('/:search', function (req, res) {
    var search_key = req.params.search;
    search.images(search_key,
        {top: 10},
        function(err, results) {
            if (err) throw err;
            res.send((results));
        }
    );
    //res.send(search);
}).listen(8080);