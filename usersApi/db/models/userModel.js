const { DataTypes, Model } = require("sequelize");
const sequelize = require("../connection")

class Users extends Model {}

Users.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "users",
  }
);

module.exports = Users;
