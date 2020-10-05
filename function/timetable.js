const db = require("../models");
const Timetable = db.timetable;
const helper = require("../function/helper");

getDay = async (even, weekDay,isBot) => {
  const data = await Timetable.findAll({
    where: { isEven: even, weekDay: weekDay },
    attributes: { exclude: ["createdAt", "updatedAt"] },
  });
  
  // Проверяем бот или нет если бот то обрабатываем через конструктор
  if(isBot){
    if(!data) return ["Данные отсутствуют"];
    else return helper.messageConstructor(data);
  }
  else return data;
};

getWeek = async (even, isBot) => {
  const data = await Timetable.findAll({
    where: { isEven: even },
    attributes: { exclude: ["createdAt", "updatedAt"] },
  });
  
  // Проверяем бот или нет если бот то обрабатываем через конструктор
  if(isBot){
    if(!data) return ["Данные отсутствуют"];
    else return helper.messageConstructor(data);
  }
  else return data;
};

getAll = async (isBot) => {
  const data = await Timetable.findAll({ attributes: { exclude: ["createdAt", "updatedAt"] }});
  
  // Проверяем бот или нет если бот то обрабатываем через конструктор
  if(isBot){
    if(!data) return ["Данные отсутствуют"];
    else return helper.messageConstructor(data);
  }
  else return data;
};



module.exports = {
  getDay: getDay,
  getWeek: getWeek,
  getAll: getAll,
};
