const express = require("express");
const router = express.Router();

//Signature
// @route  GET api/contacts
// @desc   Get all user's contacts
// @access Private

router.get("/", (req,res)=>{
    res.send("Get all user's contacts");
})


//Signature
// @route  POST api/contacts
// @desc   Add a new user's contacts
// @access Private

router.post("/", (req,res)=>{
    res.send("Add a new user's contactss");
})

//Signature
// @route  PUT api/contacts/:id
// @desc   Update user's contacts
// @access Private

router.put("/:id", (req,res)=>{
    res.send("Update user's contacts");
})

//Signature
// @route  DELETE api/contacts:id
// @desc  Delete user's contacts
// @access Public

router.delete("/:id", (req,res)=>{
    res.send("Delete user's contacts");
})


module.exports = router;