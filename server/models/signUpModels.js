const mongoose = require("mongoose")

const articles = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },

    content: {
        type:String,
        required:true
    },

    date:{
        type:Date,
        default:Date.now()
    }
})

const signUpTemplate = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },

    username:{
        type: String,
        required: true
    },

    password:{
        type:String,
        required: true
    },

    email:{
        type:String,
        required:true,
        unique: true
    },

    dob:{
        type:String,
        required: true
    },

    date:{
        type:Date,
        default:Date.now()
    },

    articles:[articles]
})



module.exports = mongoose.model('mytable', signUpTemplate)