module.exports = (function() {
    var route = require('express').Router();

    route.get('/', function (req, res,next) {
        res.send('Welcome to my very awesome thing');
    });

    route.get('/Animal/:type', function (req, res,next) {
        if(req.params.type == 0) {
            next('route');
        }
        res.send(`You gave us ${req.params.type}`)
    });
    route.use((req, res, next) => {
        res.send("Give us sth will ya ?");
    });
    return route;
})();