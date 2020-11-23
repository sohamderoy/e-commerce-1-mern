// All the auth methods are inside the auth controllers
const User = require("../models/user");

//User signup API
exports.signup = (req, res) => {
    const user = new User(req.body)
    user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                err: "Not able to save user in DB"
            })
        }
        res.json(user);
    });
}; 

//User signout API
exports.signout = (req, res) => {
    res.json({
        message: "User Signout"
    });
};
