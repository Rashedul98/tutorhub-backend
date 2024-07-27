const express = require("express");
const router = express();
const updateLocation = require("../Controller/location/update_location");

router.post("/updatelocations", updateLocation.getUpdateLocations);

module.exports = router;