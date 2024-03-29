const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

});

const userCollection = new mongoose.model("users", LoginSchema);
module.exports = userCollection;