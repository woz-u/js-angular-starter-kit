import express = require('express');
let router = express.Router();

/* return answer for meaning of life with 3 sec delay */
router.get('/deepThought/getAnswer', function(req, res, next) {
  let possibilities = [
    "42", "popcorn", "vacations", "money", "friends", "movies"
  ];

  setTimeout(() => {
    let index = Math.floor(Math.random() * possibilities.length);
    let answer = {text:'The answer is ' + possibilities[index]};
    res.json(answer)
  }, 3000);
});

/* return your fortune with 3 sec delay */
router.get('/deepThought/fortune', function(req, res, next) {
  let possibilities = [
    "You are destined to be eaten by a bear.",
    "You will be rich and powerful beyond your dreams.",
    "You will win a talent show and start a succesful rock band."
  ];

  setTimeout(() => {
    let index = Math.floor(Math.random() * possibilities.length);
    let answer = {text:possibilities[index]};
    res.json(answer)
  }, 3000);
});

export = router;
