const express = require("express");
const router = express();
const userStudentController = require("../Controller/student/student");
const userTeacherController = require("../Controller/teacher/teacher");

//Students:
router.post("/student-signup", userStudentController.userStudent);



//Teachers:

router.post("/teacher-signup", userTeacherController.userTeacher);
router.post("/teacher-list", userStudentController.getTeacherBySubject);


module.exports = router;

//router.get("/allTeacherList", userTeacherlistController.getTeachers);

