"use strict";
var express = require("express");
var router = express.Router();
router.get('/deepThought/getAnswer', function (req, res, next) {
    var possibilities = [
        "42", "popcorn", "vacations", "money", "friends", "movies"
    ];
    setTimeout(function () {
        var index = Math.floor(Math.random() * possibilities.length);
        var answer = { text: 'The answer is ' + possibilities[index] };
        res.json(answer);
    }, 3000);
});
router.get('/deepThought/fortune', function (req, res, next) {
    var possibilities = [
        "You are destined to be eaten by a bear.",
        "You will be rich and powerful beyond your dreams.",
        "You will win a talent show and start a succesful rock band."
    ];
    setTimeout(function () {
        var index = Math.floor(Math.random() * possibilities.length);
        var answer = { text: possibilities[index] };
        res.json(answer);
    }, 3000);
});
module.exports = router;
