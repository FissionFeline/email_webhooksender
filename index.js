const express = require('express');
const body_pars = require("body-parser")
const app = express();
const routing = require("./routing_sys.js");
const nmailer = require('nodemailer')

require('dotenv').config()

var mail_trans = nmailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.mail_user,
        pass: process.env.pass_pass
    }
});

app.use(body_pars.json())

app.use('', routing)

app.listen(process.env.PORT || 2020, function() {
    console.log(`App is running on ${process.env.PORT || 2020}`);
    console.log(`We are currently in a ${process.env.STATE || "testing"} enviorment`)
});