const CourseModel = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");
class CourseController {
  // [Get] /news
  index(req, res, next) {
    CourseModel.find({})
      .then((courses) => {
        courses = multipleMongooseToObject(courses);
        res.render("home", { courses });
      })
      .catch(next);
  }

  // [Get] /news/:slug
  show(req, res) {
    res.send("New Detail");
  }
}

module.exports = new CourseController();
