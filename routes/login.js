const express = require('express')
const router = express();
const getStudentJWT = require('../Controller/student/student')

router.post('/student-login',getStudentJWT.StudentJWT);


module.exports = router;