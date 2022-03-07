const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET_KEY;

exports.validate = (req, res, next) => {
    const token = req.header('x-auth-token');
    console.log(token);

    jwt.verify(token, secretKey, function(err, decoded) {
        if (err) {
            console.log(err);
            res
                .status(401)
                .setHeader('Content-Type', 'text/plain')
                .send('Authorisation is failed.');
        } else {
            console.log(decoded);
            next();
        }
    });
}