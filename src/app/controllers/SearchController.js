class SearchController {
  showForm(req, res) {
    res.render("search");
  }
}

module.exports = new SearchController();
