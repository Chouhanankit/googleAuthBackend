const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    googleId: String,
    displayName: String,
    email: String,
    image: String,
},
    {
        timestamps: true
    }
)

const userDB = new mongoose.model("user", userSchema)

module.exports = userDB