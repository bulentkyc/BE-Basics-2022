const profilesModel = require('../model/profileModel')

exports.save = async (req, res) => {
    console.log(req.body);
    const userId = req.payload.userId;

    const profile = await profilesModel.findOneAndUpdate({userId}, {userId, ...req.body}, {new: true, upsert: true});

    console.log(profile);

    if (profile) {
        res.send(`Your profile saved successfully!`);
    } else {
        res.send(`There's an error please try again!`);
    } 

    /* const newProfile = new profilesModel({userId, ...req.body});

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

