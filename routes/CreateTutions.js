const express = require('express')
const router = express();
const tutionRoutes = require('../Controller/tutions/CreateTutions');


router.post('/tutions',tutionRoutes.tutions)



module.exports = router;