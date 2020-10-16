const Users = require("./userModel");
const Tasks = require("./taskModel");

Users.hasMany(Tasks, { foreignKey: "user_id" });
Tasks.belongsTo(Users);



module.exports = { Users, Tasks };
