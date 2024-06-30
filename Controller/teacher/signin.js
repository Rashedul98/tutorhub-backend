const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../../models/User_Teacher");

exports.teacherSignin = async (request, response) => {
    const authenticateTeacher = async (email, password, userModel) => {
      const user = await userModel.findOne({ email });
      if (!user) {
        throw new Error("Invalid email ");
      }
  
      const isPasswordMatch = await bcrypt.compare(password, user.password);
  
      if (!isPasswordMatch) {
        throw new Error("Invalid password");
      }
  
      return user;
    };
  
    const { email, password } = request.body;
    try {
      const teacher = await authenticateTeacher(email, password, User);
      const token = jwt.sign({ email: teacher.email }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      response.json({
        success: true,
        token: token,
        first_name: teacher.FirstName ?? null,
        last_name: teacher.LastName ?? null,
        phone: teacher.Phone ?? null,
        email: teacher.email ?? null,
        address: teacher.Address ?? null,
        error: null,
      });
    } catch (error) {
      response.status(200).json({ success: false, error: error.message });
    }
  };