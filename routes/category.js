var express  = require("express");
var category  = require("./../controllers/category/category");
var checkToken  = require("./../middleware/tockenChecker");

const router = express.Router({ caseSensitive: true });

router.get('/getAllCategory', checkToken.ensureAuth, category.getAllCategory);

module.exports = router;
