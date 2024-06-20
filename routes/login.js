const express = require('express')
const router = express();
const getStudentJWT = require('../Controller/student/student')
const teacherSignIn = require('../Controller/teacher/signin')
router.post('/student-login',getStudentJWT.StudentJWT);

router.post('/teacher-signin',teacherSignIn.teacherSignin)

module.exports = router;