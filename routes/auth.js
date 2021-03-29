const express = require('express');
const router = express.Router();

//Signature  
// @route  GET /api/auth
// @desc   get the login user
// @access private

router.get("/" , (req,res) => {
    res.send("get the login user");
})


//Signature  
// @route  POST /api/auth
// @desc   Authorize the user an get the token
// @access public

router.post("/", (req,res)=>{
    res.send("Authorize the user an get the token")
})



module.exports = router;