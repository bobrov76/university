module.exports = (sequelize, Sequelize) => {
  const timeTable = sequelize.define("timetables", {
    isEven: {
      type: Sequelize.BOOLEAN,
    },
    weekDay: {
      type: Sequelize.STRING(2),
    },
    timeStart: {
      type: Sequelize.STRING(5),
    },
    timeEnd: {
      type: Sequelize.STRING(5),
    },
    subject: {
      type: Sequelize.STRING(50),
    },
    teacher: {
      type: Sequelize.STRING(50),
    },
    cabinet:{
      type: Sequelize.INTEGER(4),
    }
  });

  return timeTable;
};
