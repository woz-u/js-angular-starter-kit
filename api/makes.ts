import express = require('express');
let router = express.Router();

let makes = [
  {id:1, name:'BMW'},
  {id:2, name:'Tesla'},
  {id:3, name:'Mini Cooper'}
];

/* GET all makes */
router.get('/makes', function(req, res, next) {
  res.json(makes);
});

export = router;
