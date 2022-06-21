const express = require('express');
const app = express();
const routing = require("./routing_sys.js");
require('dotenv').config()

app.use((req, res, next) => {
    console.log(`New request`);
    next();
});

app.use('',routing)

app.listen(process.env.PORT, function () {
    console.log(`App is running on ${process.env.PORT}`);
    console.log(`We are currently in a ${process.env.STATE} enviorment`)
});