const usersModel = require('../model/usersModel');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET_KEY;

/* const users = [
    {
        email: 'test@test.com',
        pass: '123abc'
    },
    {
        email: 'bulent@kyc.com',
        pass: '123'
    },
]; */


exports.login = (req, res) => {
    //console.log(req.body);
    const {email, pass} = req.body;

    usersModel.findOne({email}, (err, doc) => {
        const response = {};
        if (err) {
            console.log(err);
            response.status = 'fail';
            response.msg = `Oooops! There's an error please contact with support!`;
            res.status(503).send(response);
        } else {
            console.log(doc);
            if (doc) {
                if(bcrypt.compareSync(pass, doc.pass)) {
                    //Correct password
                    const token = jwt.sign({msg: 'Hello World!', foo: 'moo', email: doc.email, userId: doc._id}, secretKey);
                    console.log(token);                        
                    response.status = 'success';
                    response.msg = `Authentication is success!`;
                    response.token = token;
                    res.status(200).send(response);
                }else {
                    //Wrong password
                    response.status = 'fail';
                    response.msg = `Wrong cridentials`;
                    res.status(401).send(response);
                }
            } else {
                response.status = 'fail';
                response.msg = `User is not registered`;
                res.status(401).send(response);
            }
        }
    }); 
    
    
    //v1
    //console.log(email, pass);
    /* const activeUser = users.find((user) => user.email === email )
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

    //v2
    /* const activeUser = users.find((user) => user.email === email && user.pass == pass )
    if (activeUser == undefined) {
        res.send('Wrong cridentials');
    } else {
        res.send(`Logged in successfully with ${email}`);
    } */

    //v3
    //console.log({email});

    
}

exports.register = async (req, res) => {
    let {email, pass} = req.body;
    //console.log(email,pass);

    /* users.push(req.body)
    console.log(users);
    res.send(`${req.body.email} is registered!`);
    */

    //let isRegistered = false;
    //TODO: Find email on users collection!

    let userCheck = await usersModel.findOne({email:req.body.email});
    
    if (userCheck) {
        res.send('The user has registered already!');
    } else {

        bcrypt.hash(pass, saltRounds, function(err, hash) {
            if (err) {
                res.send(`Oooops! There's an error please contact with support!`);
            } else {
                pass = hash;
                const newUser = usersModel({email, pass});

                newUser.save((err, doc)=>{
                    if (err) {
                        console.log(err);
                        res.send(`Oooops! There's an error please contact with support!`);
                    } else {
                        console.log(doc);
                        res.send(`${doc.email} is registered successfully!`);
                    }

                });
            }
        });

    }   

}

exports.test = (req, res) => 
    res.send('Test is OK!');