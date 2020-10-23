const config = require("../config/db");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user")(sequelize, Sequelize);
db.timetable = require("../models/timetable")(sequelize, Sequelize);
db.userNotifications = require("../models/userNotifications")(sequelize, Sequelize);
db.subject = require("../models/subject")(sequelize, Sequelize);
db.homework = require("../models/homework")(sequelize, Sequelize);


module.exports = db;