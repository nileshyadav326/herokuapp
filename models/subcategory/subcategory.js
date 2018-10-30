var Sequelize  = require("sequelize");
var sequelize  = require("./../../utils/db");
var categoryModel  = require("./../category/category");
var playlistModel  = require("./../playlist/playlist");
// var likesModel  = require("./../likes/likes");

const subcategoryModel = sequelize.define('subcategory', {
    subcategoryId: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false, unique: true },
    description: { type: Sequelize.STRING, allowNull: false },
    img: { type: Sequelize.STRING, allowNull: false },
    largImg: { type: Sequelize.STRING, allowNull: false },
    categoryId: { type: Sequelize.INTEGER }
});

subcategoryModel.belongsTo(categoryModel, { foreignKey: 'categoryId' });
subcategoryModel.hasMany(playlistModel, { foreignKey: 'subcategoryId' });



module.exports = subcategoryModel;
