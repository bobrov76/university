const controller = require("../controllers/timetable");
const { authJwt } = require("../middleware");

module.exports = function (app) {
  app.post("/api/timetable",[authJwt.verifyToken], controller.create);
  app.get("/api/timetable/:id",[authJwt.verifyToken], controller.findOne);
  app.put("/api/timetable/:id",[authJwt.verifyToken], controller.update);
  app.delete("/api/timetable/:id",[authJwt.verifyToken], controller.delete);

  app.get("/api/timetable",[authJwt.verifyToken], controller.findAll);
  // app.get("api/timetable/week", controller.findWeek);
  // app.get("api/timetable/day", controller.findDay);
};
