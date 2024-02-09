const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');

const app = express();

// view engine setup
app.set('view engine', 'ejs');

// static folder path
app.use(express.static("public"));

// routes 
app.get("/", (req, res) => {
    res.render("home");
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



// establish port for server
const port = 3030;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})