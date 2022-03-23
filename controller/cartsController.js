const cartsModel = require('../model/cartsModel')

exports.save = async (req, res) => {
    console.log(req.body);
    
    const userId = req.payload.userId;

    const cart = await cartsModel.findOneAndUpdate(
        {userId}, 
        {userId, ...req.body}, 
        {new: true, upsert: true}
    );

    console.log(cart);

    if (cart) {
        res.send(`Your cart saved successfully!`);
    } else {
        res.send(`There's an error please try again!`);
    } 
}

exports.getCart = async (req, res) => {
    //We have to use auth middleware to have the "payload" in the request.
    const userId = req.payload.userId;
    const cart = await cartsModel.findOne({userId});
    if (cart) {
        res.status(200).json({
        status: 'success',
        msg: 'The cart data is ready!',
        data: cart.basket
    });
    } else {
        res.status(401).json({
            status: 'fail',
            msg: 'User is not found!'
        });
    }
}

