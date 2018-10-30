var express  = require("express");
var playlist  = require("./../controllers/playlist/playlist");
var checkToken  = require("./../middleware/tockenChecker");

const router = express.Router({ caseSensitive: true });
router.get('/getAllPlaylist', checkToken.ensureAuth, playlist.getAllPlaylist);
router.get('/getAllPlaylistById', checkToken.ensureAuth, playlist.getAllPlaylistById);
router.post('/addPlaylist', checkToken.ensureAuth, playlist.addPlaylist);

module.exports = router;
