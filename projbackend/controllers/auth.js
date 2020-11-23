// All the auth methods are inside the auth controllers
exports.signout = (req, res) => (
    res.json({
        message: "User Signout"
    })
);
