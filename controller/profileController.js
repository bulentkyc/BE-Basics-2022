const profileModel = require('../model/profileModel')

exports.save = async (req, res) => {
    console.log('body', req.body);
    const userId = req.payload.userId;

    const profile = await profileModel.findOneAndUpdate({userId}, {userId, ...req.body}, {new: true, upsert: true});

    console.log(profile);

    if (profile) {
        res.send(`Your profile saved successfully!`);
    } else {
        res.send(`There's an error please try again!`);
    } 

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

