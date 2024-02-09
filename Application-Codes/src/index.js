const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');

const app = express();

// view engine setup
app.set('view engine', 'ejs');


// routes 
app.get("/", (req, res) => {
    res.render("home");
});

// establish port for server
const port = 3030;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})