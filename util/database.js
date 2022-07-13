const Sequelize = require("sequelize");

const sequelize = new Sequelize("nodejs", "root", "thienduy", {
  dialect: "mysql",
  host: "localhost"
});
module.exports = sequelize;
