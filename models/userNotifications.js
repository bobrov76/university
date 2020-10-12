module.exports = (sequelize, Sequelize) => {
  const UserNotifications = sequelize.define("userNotifications", {
    userId: {
      type: Sequelize.STRING,
    },
  });

  return UserNotifications;
};
