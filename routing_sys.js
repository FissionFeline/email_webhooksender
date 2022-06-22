module.exports = (function() {
    const request = require('request');
    var route = require('express').Router();

    route.get('/', function(req, res, next) {
        var headersOpt = {
            'Content-Type': 'application/json',
        };
        request({
            method: 'post',
            url: process.env.WEBHOOK,
            form: { "content": `lets see if it works lol` },
            headers: headersOpt,
            json: true,
        }, function(error, response, body) {
            if (error) next()
        });
    });

    route.post('/Animal/:type', function(req, res, next) {
        if (req.params.type == 0) {
            next('route');
        }
        res.send(`You gave us ${req.params.type}`)
    });
    route.use((req, res, next) => {
        res.send("Give us sth will ya ?");
    });
    return route;
})();