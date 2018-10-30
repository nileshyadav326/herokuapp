var express  = require("express");
var userPlaylistCategory  = require("./../controllers/userPlaylistcategory/userPlaylistcategory");
var checkToken  = require("./../middleware/tockenChecker");

const router = express.Router({ caseSensitive: true });

router.get('/getUserPlaylistCategory', checkToken.ensureAuth, userPlaylistCategory.getUserPlaylistCategory);
router.post('/addUserPlaylistCategory', checkToken.ensureAuth, userPlaylistCategory.addUserPlaylistCategory);
router.delete('/deleteUserPlaylistCategory', checkToken.ensureAuth, userPlaylistCategory.deleteUserPlaylistCategory);
router.put('/updateUserPlaylistCategory', checkToken.ensureAuth, userPlaylistCategory.updateUserPlaylistCategory);


module.exports = router;
