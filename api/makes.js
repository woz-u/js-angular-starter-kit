"use strict";
var express = require("express");
var router = express.Router();
var makes = [
    { id: 1, name: 'BMW' },
    { id: 2, name: 'Tesla' },
    { id: 3, name: 'Mini Cooper' }
];
router.get('/makes', function (req, res, next) {
    res.json(makes);
});
module.exports = router;
