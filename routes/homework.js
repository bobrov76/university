const controller = require("../controllers/homework");


module.exports = function (app) {



  app.get("/api/subject", controller.findAllSubject);
  app.get("/api/getHomework", controller.getHomework);
  app.post("/api/subject", controller.create);
  // app.get("api/timetable/week", controller.findWeek);
  // app.get("api/timetable/day", controller.findDay);
};
