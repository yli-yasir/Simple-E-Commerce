const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema(
    {
        name: String, 
        email: String,
        password: String,
        cart: [ObjectId]
    }
);

module.exports = mongoose.model('user',userSchema);