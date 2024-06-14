const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const teacherSchema = new Schema({
  
  FirstName: {
    type: String,
    required: true,
  },

  LastName: {
    type: String,
    required: true,
  },

  Gender: {
    type: String,
    required: true,
  },

  Phone: {
    type: String,
    required: true,
  },

  educational_qualification: {
    type: String,
    required: true,
  },

  Expertise: [
    {
      subject: String,
      scope: String,
    },
  ],

  Location: {
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  Availability: {
    type: Boolean,
    default: 1,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const teacherModel = mongoose.model("Teacher", teacherSchema);
module.exports = teacherModel;
