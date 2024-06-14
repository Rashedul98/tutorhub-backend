const  User = require('../../models/createTutions');

exports.getTutionsTeacher = async (request, response) => {
    try {
        const getTutions = await User.find({teacher_email: request.body.email})
        response.send({results: getTutions, error: null});
      } catch (err) {
        console.log(err);
        response.send({results: null, error: err.message});
      }
}

exports.getTutionsStudent = async (request, response) => {
  try {

      const getTutions = await User.find({student_email: request.body.email})
      response.send({results: getTutions, error: null});
    } catch (err) {
      console.log(err);
      response.send({results: null, error: err.message});
    }

}