var express  = require("express");
var subcategory  = require("./../controllers/subcategory/subcategory");
var checkToken  = require("./../middleware/tockenChecker");

const router = express.Router({ caseSensitive: true });

router.get('/getAllSubcategory', checkToken.ensureAuth, subcategory.getAllSubcategory);

module.exports = router;