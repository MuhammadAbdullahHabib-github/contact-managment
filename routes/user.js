const express = require("express");
const {check , validationResult} = require("express-validator")
const router = express.Router();

//Signature
// @route  POST api/users
// @desc   Register a user
// @access Public

router.post("/" , [
    check("name","Please enter a name").not().isEmpty(),
    check("email", "Please enter valid email").isEmail(),
    check("password", "Please enter password with at least 6 characters").isLength({min:6})
] , (req , res) => {
    res.send(req.body)
});

module.exports = router;
