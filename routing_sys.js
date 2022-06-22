module.exports = (function() {
    const request = require('request');
    var route = require('express').Router();

    route.get('/', function(req, res, next) {
        request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', { json: true }, (err, res, body) => {
            if (err) { return console.log(err); }
            console.log(body.url);
            console.log(body.explanation);
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