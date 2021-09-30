const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{type: String},
    email:{type: String},
    phone:{type: String},
    password:{type: String},
    role:{type: String, enum:['admin', 'client'], default:'client'},
    isbanned:{type: Boolean, default: false}
})

module.exports = User = mongoose.model('user', userSchema)