var userModel  = require("./../../models/user/user");
var sequelize  = require("./../../utils/db");

module.exports.addUserDetails = (userData) => {
    console.log("fdssdfsdf",userData)
    return new Promise((resolve, reject) => {
       
        userModel.findOrCreate({
            where:{email:userData.email},
            defaults :userData})
        .then((result) => {
            resolve(result);
        }).catch((err) => {
            console.log(err)
            reject(err);
        });
    });
};


module.exports.getAllUsers = (email) => {
    return new Promise((resolve, reject) => {
        sequelize.query(`SELECT * FROM users where email!='${email}'`, { type: sequelize.QueryTypes.SELECT }).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        })
    });
};

// module.exports.updateUserDetails = (input) => {
//     return new Promise((resolve, reject) => {
//         return userModel.update(
//             input.body,
//             {
//                 where: { userId: input.decoded.user.userId }
//             }).then(result => {
//                 resolve(JSON.parse(result));
//             }).catch((err) => {
//                 reject(err);
//             })
//     });
// }

// module.exports.uploadProfilePicture = (data, userid) => {
//     return new Promise((resolve, reject) => {
//         return userModel.update(
//             data,
//             {
//                 where: { userId: userid }
//             }).then(result => {
//                 resolve(JSON.parse(result));
//             }).catch((err) => {
//                 reject(err);
//             })
//     });
// }
