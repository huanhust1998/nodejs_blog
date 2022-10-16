const courseRouter = require("./courses");
const searchRouter = require("./search");

function route(app) {
  app.use("/", courseRouter);
  app.use("/search", searchRouter);
}
module.exports = route;
