module.exports = app => {
    const controller = require('../controllers/moviesPopular')();

    app.route('/movies-popular')
        .get(controller.listMoviesPopular);
}