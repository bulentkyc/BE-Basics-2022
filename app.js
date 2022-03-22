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
//process.env.JWT_SECRET_KEY = '13ef5s46s!@$!@2d4f6v8ds23dfdSDGSD';

require('dotenv').config();
//console.log(process.env)

const publicRouter = require('./router/publicRouter');
const apiRouter = require('./router/apiRouter');
const authRouter = require('./router/authRouter');
const db = require('./config/db')
const test = require('./middleware/test');
const profileRouter = require('./router/profileRouter');
const cartRouter = require('./router/cartRouter');

db();

const port = process.env.PORT || 8080;


//console.log('secretKey:' , process.env.JWT_SECRET_KEY);

app.use(express.json());

console.log(process.argv);

/*process.exit();
The code above shuts the server down!!!
*/

//app.use('/static', express.static(path.join(__dirname, 'public')));
//app.use(express.static('public'));

let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    res.header('Access-Control-Allow-Methods', "GET, PUT, POST, DELETE");
    next();
}

app.use(allowCrossDomain);

/* const test = (req, res, next) => {
    console.log('Hey, you have a new request!');
    next();
} */

//app.use(test);

app.use('/', publicRouter);//no log
app.use('/api', test.log, test.check, apiRouter); //log on the console
app.use('/auth', authRouter); //no log
app.use('/profile', profileRouter);
app.use('/cart', cartRouter);

app.listen(port, ()=> console.log(`Server started to run at the port ${port}`));