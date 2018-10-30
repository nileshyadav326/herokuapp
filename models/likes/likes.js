var Sequelize  = require("sequelize");
var sequelize  = require("./../../utils/db");
var subcategoryModel  = require("./../subcategory/subcategory");

const likesModel = sequelize.define('likes', {
    likesId: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    subcategoryId: { type: Sequelize.INTEGER },
    userId: { type: Sequelize.CHAR }
});

likesModel.belongsTo(subcategoryModel, { foreignKey: 'subcategoryId' });
module.exports = likesModel;