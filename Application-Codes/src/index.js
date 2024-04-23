const express = require('express');
const app = express();
const path = require('path');
const bcrypt = require('bcrypt');
const session = require('express-session');
const passport = require('passport');
const MongoDBStore = require('connect-mongodb-session')(session);

// models 
const users = require("./config");
const loginController = require("../controllers/Login");
const registerController = require("../controllers/SignUp");
const addTocartController = require("../controllers/addToCart");


const store = new MongoDBStore({
    uri: 'mongodb://localhost:3030/',
    collection: 'sessions'
});

// authentication for products to be added to cart
const isAuthenticated = (req, res, next) => {
    if (req.session && req.session.checkID) {
        return next();
    }
    res.redirect("/login");
}

const cartRoutes = require('../routes/cart');


// session
app.use(session({
    secret: process.env.SecretKey,
    resave: false,
    saveUninitialized: false
}))

console.log("Secret Key:", process.env.SecretKey);



// convert data into json format
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// view engine setup
app.set('view engine', 'ejs');

// static folder path
app.use(express.static("public"));
app.use(express.static("src"));

// app.use('/cart', cartRoutes);


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

app.get("/cart/:id", (req, res) => {
    res.json(cart);
})


// post 
app.post('/login', loginController);

app.post('/signup', registerController);
app.post('/cart', addTocartController);



// establish port for server
const port = 3030;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})