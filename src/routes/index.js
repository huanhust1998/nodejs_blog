const courseRouter = require("./courses");
const searchRouter = require("./search");

function route(app) {
  app.use("/courses", courseRouter);
  app.use("/search", searchRouter);
}
module.exports = route;
