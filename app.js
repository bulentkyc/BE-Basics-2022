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

const iphones = [
    {
        model: 'X',
        color: 'White',
        price: '700$',
        imgURL: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
        model: 'XS',
        color: 'White',
        price: '500$',
        imgURL: 'https://images.unsplash.com/photo-1512054502232-10a0a035d672?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
    },
    {
        model: '13 Pro',
        color: 'White',
        price: '1500$',
        imgURL: 'https://images.unsplash.com/photo-1530319067432-f2a729c03db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=789&q=80'
    }
];

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