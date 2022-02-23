const users = [
    {
        email: 'test@test.com',
        pass: '123abc'
    },
    {
        email: 'bulent@kyc.com',
        pass: '12345'
    },
];

exports.login = (req, res) => {
    //console.log(req.body);
    const {email, pass} = req.body;
    //console.log(email, pass);
    const user = users.find((item) => item.email === email )
    console.log('found user :',user);
    res.send('Welcome to login!');
}
exports.register = (req, res) => 
    res.send('Welcome to register!');

exports.test = (req, res) => 
    res.send('Test is OK!');