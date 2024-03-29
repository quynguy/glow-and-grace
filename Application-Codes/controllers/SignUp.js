// Register User

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const userCollection = require('../models/Users');


// Register User Logic
router.post("/signup", async (req, res) => {

    // get data from body > send through sign up form
    const data = {
        name: req.body.username,
        password: req.body.password
    }

    // check if user already exists in the database
    const userExists = await userCollection.findOne({ name: data.name });
    if (userExists) {
        res.send("User already exists. Please choose a different username.");
    } else {
        // hash password (bcrypt)
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);

        data.password = hashedPassword; // replace hash password with original password

        const userdata = await userCollection.insertMany(data);
        res.redirect('/home');
        console.log(userdata);
    }
})

module.exports = router;