module.exports = (sequelize, Sequelize) => {
  const Homework = sequelize.define("homeworks", {
    subject: {
      type: Sequelize.STRING,
    },
    task: {
      type: Sequelize.TEXT,
    },
    dateOfDelivery:{
      type: Sequelize.DATE(6)
    }
  });
  return Homework;
};
