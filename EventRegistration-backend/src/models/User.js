const mongoose = require('mongoose');

// E-Mail
// Upload ID Card (Formats: png, jpeg)
// Registration type : Self/Group/Corporate/Others
// No of Tickets: (If self prepopulate to 1, rest case mandate user to enter)

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobileNo: String,
    idcard:String,
    
})

module.exports = mongoose.model("User", UserSchema);
