const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const studentSchema = new Schema({
    FirstName: {
        type: String,
        required: true
    },

    LastName: {
        type: String,
        required: true
    },

    Gender: {
        type: String,
        required: true
    },

    ContactInfo:{
        type: String,
        required: true
    },

    Institutation:{
        school:{
            type: String,
            
        },
        college:{
            type: String,
          
        }
    },

    Address:{
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    }

})

const studentModel = mongoose.model('Student', studentSchema)
module.exports = studentModel;