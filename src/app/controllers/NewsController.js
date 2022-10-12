class NewController {
    // [Get] /news
    index(req, res) {
        res.render('news');
    }

    // [Get] /news/:slug
    show(req, res) {
        res.send('New Detail');
    }
}

module.exports = new NewController();
