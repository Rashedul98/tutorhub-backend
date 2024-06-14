const User = require("../../models/User_Teacher");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.userTeacher = async (request, response) => {
  const hashedpassword = await bcrypt.hash(request.body.password, 10);
  const user = new User({
    FirstName: request.body.FirstName,
    LastName: request.body.LastName,
    Gender: request.body.Gender,
    Phone: request.body.Phone,
    email: request.body.email,
    password: hashedpassword,
    educational_qualification: request.body.educational_qualification,
    Expertise: request.body.Expertise,
    Location: request.body.Location,
    Availability: request.body.Availability,
  });

  const savedUser = await user.save();
  try {
    console.log("\n saving teachers data \n");
    return response.send(savedUser);
  } catch (err) {
    console.log(err);
  }
};

exports.getTeachers = async (request, response) => {
  try {
    const allTeachersList = await User.find();
    console.log("\n Showing teachers data \n");
    return response.send({
      results: allTeachersList,
      error: null,
    });
  } catch (err) {
    response.send({
      results: null,
      error: err.message,
    });
  }
};
