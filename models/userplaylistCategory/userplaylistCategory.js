var Sequelize  = require("sequelize");
var sequelize  = require("./../../utils/db");
var userModel  = require("./../../models/user/user");
var userplaylistModel  = require("./../../models/userplaylist/userplaylist");

const userPlaylistcategoryModel = sequelize.define('userplaylistcategory', {
    categoryId: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false, unique: true },
    userId: { type: Sequelize.CHAR }
});

userPlaylistcategoryModel.hasMany(userplaylistModel, { foreignKey: 'categoryId', onDelete: 'cascade', hooks: true });

module.exports = userPlaylistcategoryModel;
