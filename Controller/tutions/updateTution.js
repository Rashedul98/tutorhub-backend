const tutionsModel = require('../../models/createTutions');
const userTeacher = require('../../models/User_Teacher');
const userStudent = require('../../models/User_student');


exports.updateTutionTeacher = async (request, response) => {
  try {
    console.log(request.body);

    resp = await tutionsModel.updateOne({ _id: request.body.id }, { $set: { status: request.body.status, fee: request.body.fee }, });
    console.log(resp);
    response.status(200).send({
      success: true,
      error: null
    });

  } catch (error) {
    console.error(error);
    response.status(200).send({
      success: false,
      error: error.message,
    });
  }
}

exports.updateTutionStudent = async (request, response) => {
  try {

    resp = await tutionsModel.updateOne({ _id: request.body.id }, { $set: { status: request.body.status }, });

    response.status(200).send({
      success: true,
      error: null
    });

  } catch (error) {
    console.error(error);
    response.status(200).send({
      success: false,
      error: error.message,
    });
  }
}
