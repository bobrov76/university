const db = require("../models");
const Homework = db.homework;
const Subject = db.subject;


exports.findAllSubject = (req, res) => {
  Subject.findAll({attributes: { exclude: ["createdAt", "updatedAt","id","teacher"] }})
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Возникла ошибка вывод невозможен",
        });
      });
};


exports.create = (req, res) => {


    const homework = {
        subject: req.body.subject,
        task: req.body.task,
        dateOfDelivery: req.body.dateOfDelivery,
    };



    Homework.create(homework)
        .then((data) => {
            res.send({ message: "Данные успешно добавлены" });
        })
        .catch((err) => {
            console.log('err' + err)
            res.status(500).send({
                message:
                    err.message || "Возникла ошибка попробуйте позже",
            });
        });
};


exports.getHomework = (req, res) => {
    Homework.findOne({ id : 1 })
        .then((data) => {
            console.log(data)
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Возникла ошибка вывод невозможен",
            });
        });
};
