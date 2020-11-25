var express = require("express");
var router = express.Router();
const { signout, signup, signin } = require("../controllers/auth");
const { check, validationResult } = require('express-validator');

router.post("/signup", [
    check("name").isLength({ min: 3 }).withMessage('Name must be at least 3 chars long'), // input validators
    check("email").isEmail().withMessage('Email is required'),
    check("password").isLength({ min: 3 }).withMessage('Password must be at least 3 chars long')
], signup);


router.post("/signin", [
    check("email").isEmail().withMessage('Email is required'),
    check("password").isLength({ min: 1 }).withMessage('Password is required. Password must be at least 3 chars long')
], signin);



router.get("/signout", signout);

module.exports = router;