const db = require("../models");
const timetableClass = require("../function/timetable");
const Timetable = db.timetable;

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const timetable = {
    isEven: req.body.isEven,
    weekDay: req.body.weekDay,
    timeStart: req.body.timeStart,
    timeEnd: req.body.timeEnd,
    subject: req.body.subject,
    teacher: req.body.teacher,
  };

  Timetable.create(timetable)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

exports.findAll = (req, res) => {
  Timetable.findAll({ attributes: { exclude: ["createdAt", "updatedAt"] }, limit: 4})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
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
        message: "Error retrieving Timetable with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Timetable.update(req.body, {
    where: { id: id },
  })
    .then(() => {
      res.send({
        message: "Timetable was updated successfully.",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Timetable.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Timetable was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Timetable with id=${id}. Maybe Timetable was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Timetable with id=" + id,
      });
    });
};

exports.findDay = (req, res) => {
  return timetableClass.getDay(req.query.even, req.query.weekDay);
};

exports.findWeek = (req, res) => {
  return timetableClass.getWeek(req.query.even);
};

// exports.findAll = (req, res) => {
//   return timetableClass.getAll();
// };