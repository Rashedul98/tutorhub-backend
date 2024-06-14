const tutionsModel = require('../../models/createTutions');
const userTeacher = require('../../models/User_Teacher');
const userStudent = require('../../models/User_student');

 
exports.tutions = async(request, response) =>{
    try {
      
        const teacherDoc = await userTeacher.findOne({ email: request.body.teacher_email});
        const studentDoc = await userStudent.findOne({ email: request.body.student_email });
    
  
        if (!teacherDoc || !studentDoc) {
            return response.status(404).send("Teacher or Student not found");
          }
    
        const tutionDoc = new tutionsModel({
            teacher_name: teacherDoc.FirstName+" "+teacherDoc.LastName,
            teacher_email: teacherDoc.email,
            student_name: studentDoc.FirstName+" "+studentDoc.LastName,
            student_email: studentDoc.email,
            subjects: request.body.subjects,
            status: request.body.status 
        }) ;
    
       await tutionDoc.save();

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
