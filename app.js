/* console.log('Hello World');

//import http from 'http';
const myFirstServer = require('http');

myFirstServer
.createServer((req, res) => {
    console.log('This line will be logged to the console in every single request!');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey! Anymore we have a Server App :) ');
})
.listen(8081, 'localhost', () => console.log('Server started to work on //localhost:8081'));
 */
////////////////////////////////////////////////////////////////////////////////
//Express

const express = require('express');
const app = express();
const path = require('path');

const public = require('./controller/public');

//app.use('/static', express.static(path.join(__dirname, 'public')));
//app.use(express.static('public'));

let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    res.header('Access-Control-Allow-Methods', "GET, PUT, POST, DELETE");
    next();
}

app.use(allowCrossDomain);


//TODO: Hadle requests with "/" via controller/public.js

app.get('/', public.main);

//about
app.get('/about', public.about);

app.get('/iphone', public.getIphones);

app.get('/contact', (req, res) => 
    res
        .status(200)
        .setHeader('Content-Type', 'text/html')
        .sendFile(path.join(__dirname, 'public/contact.html'))
);

app.listen(8080, ()=> console.log('Server started to run at the port 8088'));