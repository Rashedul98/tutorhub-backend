const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../../models/User_student");
const Teacher = require("../../models/User_Teacher");
const haversine = require("haversine");

exports.userStudent = async (request, response) => {
  const hashedpassword = await bcrypt.hash(request.body.password, 10);
  const user = new User({
    FirstName: request.body.FirstName,
    LastName: request.body.LastName,
    Gender: request.body.Gender,
    ContactInfo: request.body.ContactInfo,
    Institutation: request.body.Institutation,
    Address: request.body.Address,
    email: request.body.email,
    password: hashedpassword,
    date: request.body.date,
  });

  try {
    const savedUser = await user.save();
    console.log("Saving Student Data");
    response.send(savedUser);
    console.log(savedUser);
  } catch (err) {
    response.send(err);
  }
};

exports.getUserStudent = async (request, response) => {
  try {
    const getstdInfo = await User.find();
    console.log("getting students info");
    response.send(getstdInfo);
  } catch (err) {
    console.log(err);
  }
};

exports.StudentJWT = async (request, response) => {
  const authenticateStudent = async (email, password, userModel) => {
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
    const student = await authenticateStudent(email, password, User);
    const token = jwt.sign({ email: student.email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    response.json({
      success: true,
      token: token,
      first_name: student.FirstName ?? null,
      last_name: student.LastName ?? null,
      contact_info: student.ContactInfo ?? null,
      email: student.email ?? null,
      school: student.Institutation.school ?? null,
      college: student.Institutation.college ?? null,
      address: student.Address ?? null,
    
      error: null,
    });
  } catch (error) {
    response.status(200).json({ success: false, error: error.message });
  }
};

exports.getTeacherBySubject = async (request, response) => {
  subjects = request.body.subject;
  scope = request.body.scope;
  const studentCoords = {
    latitude: request.body.latitude,
    longitude: request.body.longitude,
  };

  const calculateDistance = (coords1, coords2) => {
    return haversine(coords1, coords2, { unit: "meter" }); // Returns distance in meters
  };

  try {

    const teachers = await Teacher.find({
      Expertise: {
        $elemMatch: {
          subject: { $in: subjects.map(subject => new RegExp(`^${subject}$`, 'i'))   },
          scope: scope,
        },
      },
    });

    const teachersWithinDistance = teachers.filter((teacher) => {
      const teacherCoords = {
        latitude: teacher.Location.latitude,
        longitude: teacher.Location.longitude,
      };

      const distance = calculateDistance(studentCoords, teacherCoords);
      console.log(distance);
      return distance <= 5000; // in meters
    });

    console.log(teachersWithinDistance);
    response.json({
      teachers: teachersWithinDistance,
      error: null,
    });
  } catch (error) {
    response.json({ teachers: null, error: error.message });
  }
};
