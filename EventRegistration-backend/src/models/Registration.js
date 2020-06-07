const mongoose = require('mongoose');

const RegistrationSchema = new mongoose.Schema({
    registrationNumber: String,
    date:String,
    registrationType:String,
    tickets:Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    event:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Event", 
    },
});

module.exports = mongoose.model("Registration", RegistrationSchema);