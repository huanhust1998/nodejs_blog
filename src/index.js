const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const path = require("path");
const app = express();
const port = 8080;

const route = require("./routes");
const db = require("./config/db");

//connect to DB
db.connect();

app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//HTTP logger
//app.use(morgan("combined"));

//Template engine
app.engine("hbs", engine({ extname: ".hbs", defaultLayout: "main" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//router init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
