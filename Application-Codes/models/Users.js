const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema({
    username: {
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