var express  = require("express");
var userPlaylist  = require("./../controllers/userplaylist/userplaylist");
var checkToken  = require("./../middleware/tockenChecker");

const router = express.Router({ caseSensitive: true });

router.get('/getUserPlaylistId', checkToken.ensureAuth, userPlaylist.getUserPlaylistId);
router.get('/getUserPlaylist', checkToken.ensureAuth, userPlaylist.getUserPlaylist);
router.post('/addUserPlaylist', checkToken.ensureAuth, userPlaylist.addUserPlaylist);
router.delete('/deleteUserPlaylist', checkToken.ensureAuth, userPlaylist.deleteUserPlaylist);
// router.put('/updateUserPlaylistCategory', checkToken.ensureAuth, userPlaylistCategory.updateUserPlaylistCategory);

module.exports = router;