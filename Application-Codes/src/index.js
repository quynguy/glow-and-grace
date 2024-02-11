const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');

// models 


const app = express();


// convert data into json format


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


// Login User Logic



// establish port for server
const port = 3030;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})