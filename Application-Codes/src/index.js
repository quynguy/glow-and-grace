const express = require('express');
const path = require('path');
const app = express();
const bcrypt = require('bcrypt');
const session = require('express-session');

// models 
const users = require("./config");
const loginController = require("../controllers/Login");
const registerController = require("../controllers/SignUp");


// session
app.use(session({
    secret: process.env.SecretKey,
    resave: false,
    saveUninitialized: false
}))

// convert data into json format
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// view engine setup
app.set('view engine', 'ejs');

// static folder path
app.use(express.static("public"));

app.use(require('../routes/cart'));

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

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("/cart/:id", (req, res) => {
    res.render("cart", { id: req.params.id });
});


// post 
app.post('/login', loginController);

app.post('/signup', registerController);



// establish port for server
const port = 3030;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})