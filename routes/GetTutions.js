const express = require('express')
const router = express();
const getTutionRoutes = require('../Controller/tutions/GetTutions');
const updateTutionRoutes = require('../Controller/tutions/updateTution');

router.post('/gettutionsteacher',getTutionRoutes.getTutionsTeacher);
router.post('/gettutionsstudent',getTutionRoutes.getTutionsStudent);
router.post('/updatetutionteacher',updateTutionRoutes.updateTutionTeacher);
router.post('/updatetutionstudent',updateTutionRoutes.updateTutionStudent);

module.exports = router;