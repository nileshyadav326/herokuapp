var express  = require("express");
var user  = require("./../controllers/user/user");
var checkToken  = require("./../middleware/tockenChecker");

const router = express.Router({ caseSensitive: true });

router.post('/addUserDetails',  user.addUserDetails);
router.get('/getAllUsers',  user.getAllUsers);
// router.put('/uploadProfilePicture', checkToken.ensureAuth, user.uploadProfilePicture);

module.exports = router;


