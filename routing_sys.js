module.exports = (function() {
    const request = require('request');
    var route = require('express').Router();

    route.post('/', function(req, res, next) {
        var headersOpt = {
            'Content-Type': 'application/json',
        };
        if (!req.body.email && !req.body.item_id) return next()
        request({
            method: 'post',
            url: process.env.WEBHOOK,
            form: { "content": `Email: ${req.body.email}\nItem_Id: ${req.body.item_id}` },
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