const express = require('express');
const body_pars = require("body-parser")
const app = express();
const routing = require("./routing_sys.js");
const rateLimit = require('express-rate-limit')

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 20,
    standardHeaders: true,
    legacyHeaders: false,
})


require('dotenv').config()

app.use(body_pars.json())

app.use('', apiLimiter)

app.use('', routing)

app.listen(process.env.PORT || 2020, function() {
    console.log(`App is running on ${process.env.PORT || 2020}`);
    console.log(`We are currently in a ${process.env.STATE || "testing"} enviorment`)
});