module.exports = (function() {
    const request = require('request');
    var route = require('express').Router();

    route.get('/', function(req, res, next) {
        request.post({
            url: process.env.WEBHOOK,
            body: "content:'test'"
        }, function(error, response, body) {
            console.log(body);
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