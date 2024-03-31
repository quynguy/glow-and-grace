const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const userCollection = require("../models/Users");

// Login User Logic
router.post ("/login", async (req, res) => {
    try {
        const check = await userCollection.findOne({ name: req.body.username });
        if(!check) {
            res.send("Unable to locate user. Please sign up.");
        }

        // compare hash password from database to plain text 
        const passwordMatch = await bcrypt.compare(req.body.password, check.password);
        if (passwordMatch) {
            req.session.checkID = check._id;
            return res.redirect("/cart/" + check._id);
        } else {
            return req.send("Incorrect password. Please try again.");
        }
    }catch{
        return res.send("Incorrect Password or unable to locate user. Please sign up.");
    }

});

module.exports = router;