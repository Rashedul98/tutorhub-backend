const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const tutions = new Schema({

    teacher_name: String,
    teacher_email: String,
    student_name: String,
    student_email: String,
    subjects: [
        {
            subject: String,
            scope: String,
        }
    ],
    fee: {
        type: Number,
        default: 0
    },
    status: String
});
const tutionsModel = mongoose.model("createTutions", tutions);
module.exports = tutionsModel;