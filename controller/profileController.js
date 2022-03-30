const profileModel = require('../model/profileModel');
const multer  = require('multer');
const path = require('path');
const { log } = require('console');
let fileName;

const storageSet = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public')
    },
    filename: function (req, file, cb) {
        fileName = 'a' + Date.now() + path.extname(file.originalname);
        cb(null, fileName)
    }
});

const upload = multer({storage:storageSet}).single('avatarFile');

exports.save = async (req, res) => {
    upload(req, res, async err => {
        if (err) {
            console.log(err);
        } else {
            //Exact moment that the file is saved!
            console.log('body', req.body);
            const userId = req.payload.userId;

            const profile = await profileModel.findOneAndUpdate(
                {userId}, 
                {userId, ...req.body, avatarName:fileName}, 
                {new: true, upsert: true});

            console.log(profile);

            if (profile) {
                res.send(`Your profile saved successfully!`);
            } else {
                res.send(`There's an error please try again!`);
            } 
        }
    })


    
 

    /* const newProfile = new profileModel({userId, ...req.body});

    newProfile.save((err, doc) => {
        if (err) {
            console.log(err);
            res.send(`There's an error please try again!`);
        } else {
            console.log(doc);
            res.send(`Your profile saved successfully!`)
        }
    }); */
    //res.send('Submittion is success!');
}

exports.getProfile = async (req, res) => {
    const userId = req.payload.userId;
    const profile = await profileModel.findOne({userId});
    if (profile) {
        profile._doc.avatarUrl = 'http://localhost:8080/'+profile.avatarName;
        res.status(200).json({
        status: 'success',
        msg: 'The profile data is ready!',
        data: profile
    });
    } else {
        res.status(401).json({
            status: 'fail',
            msg: 'User is not found!'
        });
    }
}

