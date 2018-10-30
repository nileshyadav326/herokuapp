var playlistModel  = require("./../../models/playlist/playlist");
var sequelize  = require("./../../utils/db");
var userplaylistModel  = require("./../../models/userplaylist/userplaylist");

module.exports.getAllPlaylist = () => {
    return new Promise((resolve, reject) => {
        sequelize.query(`SELECT pl.*, 
        (SELECT userplaylistId from userplaylists where playlistId=pl.playlistId ) as isExistUserPlaylist 
        FROM playlists pl`, { type: sequelize.QueryTypes.SELECT }).then((result) => {
                resolve(result);
            }).catch((err) => {
                reject(err);
            })
        // playlistModel.findAll().then((result) => {
        //     resolve(result);
        // }).catch((err) => {
        //     reject(err);
        // })
    });
};
module.exports.getAllPlaylistById = (subcategoryId) => {
    return new Promise((resolve, reject) => {
        sequelize.query(`SELECT pl.* FROM playlists pl WHERE pl.subcategoryId=${subcategoryId}`, { type: sequelize.QueryTypes.SELECT }).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        })

        // playlistModel.findAll({
        //     where: { subcategoryId: subcategoryId },
        // }).then((result) => {
        //     resolve(result);
        // }).catch((err) => {
        //     reject(err);
        // })
    });
};
module.exports.addPlaylist = (input) => {
    return new Promise((resolve, reject) => {
        playlistModel.bulkCreate(input)
            .then((result) => {
                resolve(result);
            }).catch((err) => {
                console.log(err)
                reject(err);
            });
    });
};
