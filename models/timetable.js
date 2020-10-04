module.exports = (sequelize, Sequelize) => {
  const timeTable = sequelize.define("timetables", {
    isEven: {
      type: Sequelize.BOOLEAN,
    },
    weekDay: {
      type: Sequelize.STRING,
    },
    timeStart: {
      type: Sequelize.STRING,
    },
    timeEnd: {
      type: Sequelize.STRING,
    },
    subject: {
      type: Sequelize.STRING,
    },
    teacher: {
      type: Sequelize.STRING,
    },
  });

  return timeTable;
};
