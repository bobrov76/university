const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");

//db.sequelize.sync({ force: true }).then(() => { console.log("БД обновлена");});
db.sequelize.sync().then(() => { console.log("БД запущена");});

// routes
require("./routes/auth")(app);
require("./routes/timetable")(app);

require("./bot/VKBot");





// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});