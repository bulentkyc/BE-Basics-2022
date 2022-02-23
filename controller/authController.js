const users = [
    {
        email: 'test@test.com',
        pass: '123abc'
    },
    {
        email: 'bulent@kyc.com',
        pass: '123'
    },
];

exports.login = (req, res) => {
    //console.log(req.body);
    const {email, pass} = req.body;
    //console.log(email, pass);
   /*  const activeUser = users.find((user) => user.email === email )
    console.log('found user :',activeUser);
    if (activeUser == undefined) {
        res.send('The user is not registered!');
    } else {
        if (activeUser.pass == pass) {
            res.send(`Logged in successfully with ${email}`);
        } else{
            res.send('Wrong cridentials');
        }  
    } */

    const activeUser = users.find((user) => user.email === email && user.pass == pass )
    if (activeUser == undefined) {
        res.send('Wrong cridentials');
    } else {
        res.send(`Logged in successfully with ${email}`);
    }


}
exports.register = (req, res) => {
    //const {email, pass} = req.body;
    //console.log(email,pass);
    users.push(req.body)
    console.log(users);
    res.send(`${req.body.email} is registered!`);
}
exports.test = (req, res) => 
    res.send('Test is OK!');