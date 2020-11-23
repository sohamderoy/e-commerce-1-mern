// All the auth methods are inside the auth controllers


//User signup API
exports.signup = (req, res) => {
    console.log("REQ BODY", req.body)
    res.json({
        message: "Signup route works"
    });
}; 

//User signout API
exports.signout = (req, res) => {
    res.json({
        message: "User Signout"
    });
};
