const db = require("../models");
const validator = require("../middleware/validationReq");
const Timetable = db.timetable;

exports.create = (req, res) => {

  // console.log(req.body)
  //
  // //Validate request
  // const valid = validator.validationTimetable(req.body);
  // if(valid.error){
  //   res.status(400).send({ message: valid.error });
  //   return;
  // }

  const timetable = {
    isEven: req.body.isEven,
    weekDay: req.body.weekDay,
    timeStart: req.body.timeStart,
    timeEnd: req.body.timeEnd,
    subject: req.body.subject,
    teacher: req.body.teacher,
    cabinet: req.body.cabinet,
  };

  Timetable.create(timetable)
    .then((data) => {
      if (data) res.send({ message: "Данные успешно добавлены" });
      else res.send({ message: "Возникла ошибка попробуйте позже" });
    })
    .catch((err) => {
      console.log('err' + err)
      res.status(500).send({
        message:
          err.message || "Возникла ошибка попробуйте позже",
      });
    });
};

exports.findAll = (req, res) => {
  Timetable.findAll({ order: [ ['isEven', 'ASC'], ['weekDay', 'ASC'],],
    attributes: { exclude: ["createdAt", "updatedAt"] }})
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Возникла ошибка вывод невозможен",
        });
      });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Timetable.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error retrieving Timetable with id=" + id,
      });
    });
};

exports.update = (req, res) => {

  const id = req.params.id;

  //Validate request
  // const valid = validator.validationTimetable(req.body);
  // if(valid.error.length > 0 ){
  //   res.status(400).send({ message: valid.error });
  //   return;
  // }

  Timetable.update(req.body, { where: { id: id }})
    .then(() => {
      res.send({ message: "Данные успешно обновлены" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || "Ошибка обновления данных" });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Timetable.destroy({ where: { id: id }})
    .then(() => {
      res.send({ message: "Данные успешно удалены" });
    })
    .catch((err) => {
      res.status(500).send({  message: err.message || "Ошибка удаления данных"});
    });
};

