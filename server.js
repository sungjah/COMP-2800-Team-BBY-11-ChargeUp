'use strict';
const express = require('express');
const app = express();
const fs = require("fs");
const msg404 = 'BAD PROBLEM!';


app.use('/css', express.static('./css'));
app.use('/img', express.static('./img'));
app.use('/js', express.static('./js'));

app.get('/favicon.ico', function (req, res) {
    res.setHeader('Content-Type', 'image/x-icon');
    fs.createReadStream("./img/favicon.ico").pipe(res);
});

app.get('/', function (req, res) {
    fs.readFile("./index.html", function (error, pgRes) {
        if (error) {
            res.writeHead(404);
            res.write(msg404);
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(pgRes);
        }
        res.end();
    });
});

app.use(function (req, res, next) {
    res.status(404).send(msg404);
});

let port = 451;
app.listen(port, function () {
    console.log('Ready at port ' + port);
});