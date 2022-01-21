module.exports = () => {
    const moviesPopularDB = require('../data/moviesPopular.json');
    const controller = {};

    controller.listMoviesPopular = (req, res) => res.status(200).json(moviesPopularDB);

    return controller;
}