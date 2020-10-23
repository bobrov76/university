const db = require("../models");
const bcrypt = require("bcryptjs");
const Timetable = db.timetable;
const User = db.user;
const Subject = db.subject;

// Initial data
initial = async () => {
  data.forEach(async function(item, i, arr) {
    console.log(item)
   await Timetable.create(item);
  })
  subject.forEach(async function(item, i, arr) {
    console.log(item)
    await Subject.create(item);
  })
  User.create({
    username: "admin@oziv_1_20",
    password: bcrypt.hashSync("admin@oziv_1_20", 8),
  })

};

const subject = [
    {
      subject:"История",
      teacher: "Кичеев Владимир Георгиевич"
    },
  {
    subject:"Физика",
    teacher: "Чесноков Дмитрий Владимирович"
  },
  {
    subject:"Математика",
    teacher: "Плюснина Елена Сергеевна"
  },
];


const data = [
    //Вт
    {
      isEven:0,
      weekDay:"Вт",
      timeStart:"17:10",
      timeEnd:"18:40",
      subject:"История",
      teacher:"Кичеев Владимир Георгиевич",
      cabinet:"320",
    },
  {
    isEven:0,
    weekDay:"Вт",
    timeStart:"18:50",
    timeEnd:"20:20",
    subject:"Физика",
    teacher:"Чесноков Дмитрий Владимирович",
    cabinet:"318",
  },
    //Ср
  {
    isEven:0,
    weekDay:"Ср",
    timeStart:"17:10",
    timeEnd:"18:40",
    subject:"Математика",
    teacher:"Плюснина Елена Сергеевна",
    cabinet:"412",
  },
  {
    isEven:0,
    weekDay:"Ср",
    timeStart:"18:50",
    timeEnd:"20:20",
    subject:"Информатика",
    teacher:"Карнетова Ирина Викторовна",
    cabinet:"406",
  },
    //Чт
  {
    isEven:0,
    weekDay:"Чт",
    timeStart:"17:10",
    timeEnd:"18:40",
    subject:"Основы ИБ",
    teacher:"Сирин Вячеслав Оюнович",
    cabinet:"233",
  },
  {
    isEven:0,
    weekDay:"Чт",
    timeStart:"18:50",
    timeEnd:"20:20",
    subject:"Основы ИБ",
    teacher:"Сирин Вячеслав Оюнович",
    cabinet:"233",
  },
    //Пт
  {
    isEven:0,
    weekDay:"Пт",
    timeStart:"17:10",
    timeEnd:"18:40",
    subject:"Русский язык и культура речи",
    teacher:"Недоступ Олег Игоревич",
    cabinet:"233",
  },
  {
    isEven:0,
    weekDay:"Пт",
    timeStart:"18:50",
    timeEnd:"20:20",
    subject:"Иностранный язык",
    teacher:"Фомин Максим Сергеевич",
    cabinet:"233",
  },
    //Пн
  {
    isEven:1,
    weekDay:"Пн",
    timeStart:"17:10",
    timeEnd:"18:40",
    subject:"Информатика",
    teacher:"Карнетова Ирина Викторовна",
    cabinet:"429",
  },
  {
    isEven:1,
    weekDay:"Пн",
    timeStart:"18:50",
    timeEnd:"20:20",
    subject:"Культурология",
    teacher:"Макаренко Наталья Николаевна",
    cabinet:"17",
  },
    //Ср
  {
    isEven:1,
    weekDay:"Ср",
    timeStart:"17:10",
    timeEnd:"18:40",
    subject:"Математика",
    teacher:"Плюснина Елена Сергеевна",
    cabinet:"412",
  },
  {
    isEven:1,
    weekDay:"Ср",
    timeStart:"18:50",
    timeEnd:"20:20",
    subject:"Математика",
    teacher:"Плюснина Елена Сергеевна",
    cabinet:"412",
  },
    //Чт
  {
    isEven:1,
    weekDay:"Чт",
    timeStart:"17:10",
    timeEnd:"18:40",
    subject:"Экология",
    teacher:"Баранова Евгения Ивановна",
    cabinet:"432",
  },
  {
    isEven:1,
    weekDay:"Чт",
    timeStart:"18:50",
    timeEnd:"20:20",
    subject:"Основы ИБ",
    teacher:"Сирин Вячеслав Оюнович",
    cabinet:"233",
  },
    //Пт
  {
    isEven:1,
    weekDay:"Пт",
    timeStart:"17:10",
    timeEnd:"18:40",
    subject:"Физика",
    teacher:"Чесноков Дмитрий Владимирович",
    cabinet:"318",
  },
  {
    isEven:1,
    weekDay:"Пт",
    timeStart:"18:50",
    timeEnd:"20:20",
    subject:"Физика",
    teacher:"Чесноков Дмитрий Владимирович",
    cabinet:"318",
  },
    ];



module.exports = {
  initial: initial,
};