module.exports = (sequelize, Sequelize) => {
  const Subject = sequelize.define("subjects", {
    subject: {
      type: Sequelize.STRING,
    },
    teacher: {
      type: Sequelize.STRING,
    },
  });

  return Subject;
};
