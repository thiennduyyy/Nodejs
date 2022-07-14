const Sequelize = require("sequelize");

const sequelize = new Sequelize("ecommerce", "postgres", "pgsecret", {
  dialect: "postgres",
  host: "10.0.0.14"
});
module.exports = sequelize;
