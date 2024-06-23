const express = require('express')
const router = express();
const getStudent = require('../Controller/student/student')
const teacherSignIn = require('../Controller/teacher/signin')

router.post('/student-login',getStudent.getStudent);
router.post('/teacher-signin',teacherSignIn.teacherSignin)

module.exports = router;