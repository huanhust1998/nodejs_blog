const CourseModel = require("../models/Course");
const {
  multipleMongooseToObject,
  mongooseToObject,
} = require("../../util/mongoose");
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

  // [Get] /course/:slug
  show(req, res, next) {
    CourseModel.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", { course: mongooseToObject(course) });
      })
      .catch(next);
  }
}

module.exports = new CourseController();
