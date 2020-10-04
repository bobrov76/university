const db = require("../models");
const Timetable = db.timetable;

getDay = async (even, weekDay) => {
  const data = await Timetable.findAll({
    where: { isEven: even, weekDay: weekDay },
    attributes: { exclude: ["createdAt", "updatedAt"] },
  });

  console.log(data);
  return messageConstructor(data);
};

getWeek = (even) => {
  Timetable.findAll({ where: { isEven: even }, raw: true })
    .then((data) => {
      return { status: false, data: data };
    })
    .catch((err) => {
      return {
        status: false,
        message: err.message || "Ошибка полуения расписания на неделю",
      };
    });
};

getAll = () => {
  Timetable.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
    limit: 4,
  })
    .then((data) => {
      return { status: false, data: data };
    })
    .catch((err) => {
      return {
        status: false,
        message: err.message || "Ошибка полуения расписания",
      };
    });
};

// формирует шаблон сообщения
messageConstructor = (datas) => {
  let i = 0;
  let id=0;
  let message = "";

  datas.forEach((data) => {
    console.log(123);
    if(id!==data.id){
      id=data.id;
      i+=1;
    } 
    if(i<=1) message +=`${data.weekDay} \n`;
    
    message += "ᅠᅠᅠᅠᅠᅠᅠПара " + i + "\n";
    message += "Предмет : " + data.subject + "\n";
    message += "Время: " + data.timeStart + " : " + data.timeEnd + "\n";
    message += "Преподаватель: " + data.teacher + "\n\n";
  });

  return message;
};

module.exports = {
  getDay: getDay,
  getWeek: getWeek,
  getAll: getAll,
};
