exports.log = (req, res, next) => {
    console.log('Hey, you have a new request!');
    next();
}

exports.check = (req, res, next) => {
    token = req.header('x-auth-token');
    console.log(token);
    if (token != 'null') {
        console.log('Token is here');
        //res.send('I got your token');
        res.header('checked', true);
    } else {
        console.log('No Token!');
    }
    next();
}