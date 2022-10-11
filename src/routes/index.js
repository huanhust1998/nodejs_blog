const newsRouter = require("./news");
const searchRouter = require("./search");

function route(app) {
  app.use("/news", newsRouter);
  app.use("/search", searchRouter);
}
module.exports = route;
