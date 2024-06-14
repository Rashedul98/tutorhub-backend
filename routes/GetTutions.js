const express = require('express')
const router = express();
const getTutionRoutes = require('../Controller/tutions/GetTutions');

router.post('/gettutionsteacher',getTutionRoutes.getTutionsTeacher);
router.post('/gettutionsstudent',getTutionRoutes.getTutionsStudent);

module.exports = router;