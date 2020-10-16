const {  DataTypes, Model } = require("sequelize");
const sequelize = require("../connection");

class Tasks extends Model {}

Tasks.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "tasks",
  }
);

module.exports = Tasks;
