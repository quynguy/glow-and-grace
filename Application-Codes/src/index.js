const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');

// models 
const userCollection = require("./config");

const app = express();


// convert data into json format
app.use(express.json());

app.use(express.urlencoded({ extended: true }));



// view engine setup
app.set('view engine', 'ejs');

// static folder path
app.use(express.static("public"));

// routes 
app.get("/", (req, res) => {
    res.render("home");
});

app.get("/home", (req, res) => {
    res.render("home");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.get("/products", (req, res) => {
    res.render("products");
});




// Register User Logic
app.post("/signup", async (req, res) => {

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
        const hasedPassword = await bcrypt.hash(data.password, saltRounds);

        data.password = hasedPassword; // replace hash password with original password

        const userdata = await userCollection.insertMany(data);
        console.log(userdata);
    }
})

// Login User Logic
app.post ("/login", async (req, res) => {
    try {
        const check = await userCollection.findOne({ name: req.body.username });
        if(!check) {
            res.send("Unable to locate user. Please sign up.");
        }

        // compare hash password from database to plain text 

        const passwordMatch = await bcrypt.compare(req.body.password, check.password);
        if (passwordMatch) {
            res.render("home");

        } else {
            req.send("Incorrect password. Please try again.");
        }
    }catch{
        res.send("Incorrect Password or unable to locate user. Please sign up.");
    }

});



// establish port for server
const port = 3030;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})