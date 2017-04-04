"use strict";
var express = require("express");
var router = express.Router();
var genres = [
    {
        id: 1,
        name: 'action',
        movies: [
            { id: 1, title: 'Die Hard' },
            { id: 2, title: 'Broken Arrow' }
        ]
    },
    {
        id: 2,
        name: 'science fiction',
        movies: [
            { id: 3, title: 'Star Wars' },
            { id: 4, title: 'Bladerunner' },
            { id: 5, title: 'Ex Machina' }
        ]
    },
    {
        id: 3,
        name: 'drama',
        movies: [
            { id: 6, title: 'The Godfather' },
            { id: 7, title: 'Training Day' }
        ]
    }
];
router.get('/genres', function (req, res, next) {
    var results = genres.map(function (genre) {
        return { id: genre.id, name: genre.name };
    });
    res.json(results);
});
router.get('/genres/:id', function (req, res, next) {
    var genreId = parseInt(req.params['id']);
    var genre = findGenre(genreId);
    if (genre) {
        res.json(genre);
    }
    else {
        res.sendStatus(404);
    }
});
function findGenre(id) {
    var matches = genres.filter(function (genre) {
        return genre.id == id;
    });
    return matches.length ? matches[0] : null;
}
module.exports = router;
