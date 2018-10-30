var categoryModel  = require("./../../models/category/category");
var sequelize  = require("./../../utils/db");

module.exports.getAllCategory = () => {
    return new Promise((resolve, reject) => {
        categoryModel.findAll().then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        })
    });
};