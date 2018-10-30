var express  = require("express");
var uip  = require("./../controllers/uip/uip");
var checkToken  = require("./../middleware/tockenChecker");

const router = express.Router({ caseSensitive: true });

router.get('/checkAccess', uip.validateUIP);

module.exports = router;
