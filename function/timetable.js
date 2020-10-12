const db = require("../models");
const Timetable = db.timetable;
const helper = require("../function/helper");

getDay = async (even, weekDay) => {

  const data = await Timetable.findAll({
    where: { isEven: even, weekDay: weekDay },
    attributes: { exclude: ["createdAt", "updatedAt"] },
  });
    if(even && weekDay=="Вт") return "Сегодня выходной &#128524;";
    else if(!even && weekDay=="Пн") return "Сегодня выходной &#128524;";
    else if(data.length===0) return "Данные отсутствуют &#128556;";
    else return helper.messageConstructorDay(data);
};

getWeek = async (even) => {

  let array=[];
  const pn = await Timetable.findAll({ where: { isEven: even, weekDay: 'Пн' }, attributes: { exclude: ["createdAt", "updatedAt"] }});
  pn.forEach((data) => { array.push(data) });
  const vt = await Timetable.findAll({ where: { isEven: even, weekDay: 'Вт' }, attributes: { exclude: ["createdAt", "updatedAt"] }});
  vt.forEach((data) => { array.push(data) });
  const sr = await Timetable.findAll({ where: { isEven: even, weekDay: 'Ср' }, attributes: { exclude: ["createdAt", "updatedAt"] }});
  sr.forEach((data) => { array.push(data) });
  const ct = await Timetable.findAll({ where: { isEven: even, weekDay: 'Чт' }, attributes: { exclude: ["createdAt", "updatedAt"] }});
  ct.forEach((data) => { array.push(data) });
  const pt = await Timetable.findAll({ where: { isEven: even, weekDay: 'Пт' }, attributes: { exclude: ["createdAt", "updatedAt"] }});
  pt.forEach((data) => { array.push(data) });

    if(array.length===0) return "Данные отсутствуют &#128556;";
    else return helper.messageConstructorWeek(array);

};

getAll = async () => {
  const data = await Timetable.findAll({
      order: [
          ['isEven', 'ASC'],
    ['weekDay', 'ASC'],
    ],
    attributes: { exclude: ["createdAt", "updatedAt"] }});
  
  // Проверяем бот или нет если бот то обрабатываем через конструктор

    if(data.length===0) return "Данные отсутствуют &#128556;";
    else return helper.messageConstructorAll(data);

};

getAllBot = async () => {
  let array=[];
  //четная
  const pn = await Timetable.findAll({ where: { isEven: 1, weekDay: 'Пн' }, attributes: { exclude: ["createdAt", "updatedAt"] }});
  pn.forEach((data) => { array.push(data) });
  const sr = await Timetable.findAll({ where: { isEven: 1, weekDay: 'Ср' }, attributes: { exclude: ["createdAt", "updatedAt"] }});
  sr.forEach((data) => { array.push(data) });
  const ct = await Timetable.findAll({ where: { isEven: 1, weekDay: 'Чт' }, attributes: { exclude: ["createdAt", "updatedAt"] }});
  ct.forEach((data) => { array.push(data) });
  const pt = await Timetable.findAll({ where: { isEven: 1, weekDay: 'Пт' }, attributes: { exclude: ["createdAt", "updatedAt"] }});
  pt.forEach((data) => { array.push(data) });
  //не четная
  const vt1 = await Timetable.findAll({ where: { isEven: 0, weekDay: 'Вт' }, attributes: { exclude: ["createdAt", "updatedAt"] }});
  vt1.forEach((data) => { array.push(data) });
  const sr1 = await Timetable.findAll({ where: { isEven: 0, weekDay: 'Ср' }, attributes: { exclude: ["createdAt", "updatedAt"] }});
  sr1.forEach((data) => { array.push(data) });
  const ct1 = await Timetable.findAll({ where: { isEven: 0, weekDay: 'Чт' }, attributes: { exclude: ["createdAt", "updatedAt"] }});
  ct1.forEach((data) => { array.push(data) });
  const pt1 = await Timetable.findAll({ where: { isEven: 0, weekDay: 'Пт' }, attributes: { exclude: ["createdAt", "updatedAt"] }});
  pt1.forEach((data) => { array.push(data) });

  return helper.messageConstructorAll(array);
}


module.exports = {
  getDay: getDay,
  getWeek: getWeek,
  getAll: getAll,
  getAllBot:getAllBot,
};
