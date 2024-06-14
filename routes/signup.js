const express = require("express");
const router = express();
const jwt = require("jsonwebtoken");

const userStudentController = require("../Controller/student/student");
const userTeacherController = require("../Controller/teacher/teacher");
const userTeacherlistController = require("../Controller/teacher/teacher");
//Students:

router.post("/student-signup", userStudentController.userStudent);

router.get("/student-list", userStudentController.getUserStudent);

//Teachers:

router.post("/teacher-signup", userTeacherController.userTeacher);

router.post("/teacher-list", userStudentController.getTeacherBySubject);

router.get("/allTeacherList", userTeacherlistController.getTeachers);

module.exports = router;
