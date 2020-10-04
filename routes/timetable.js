const controller = require("../controllers/timetable");

module.exports = function (app) {
  app.post("/api/timetable", controller.create);
  app.get("/api/timetable/:id", controller.findOne);
  app.put("/api/timetable/:id", controller.update);
  app.delete("/api/timetable/:id", controller.delete);

  app.get("/api/timetable", controller.findAll);
  // app.get("api/timetable/week", controller.findWeek);
  // app.get("api/timetable/day", controller.findDay);
};
