import express = require('express');
let router = express.Router();

// create static list of movies
let entries = [
   {id:1, author:'Stephen', dateCreated:new Date('12/1/2015'), message:'Hello from Stephen!'},
   {id:2, author:'Jeremy', dateCreated:new Date('12/4/2015'), message:'Welcome to Coder Camps!'}
];

// unique entry id
let entryId = entries.length;

/* GET movies */
router.get('/guestbook', function(req, res, next) {
  res.json(entries);
});

/* GET entry by id */
router.get('/guestbook/:id', function(req, res, next) {
  let id = parseInt(req.params['id']);
  let entry = findEntry(id);
  if (entry) {
    res.json(entry);
  } else {
    res.sendStatus(404);
  }
});

/* Post to create or update entry */
router.post('/guestbook', function(req, res, next) {
  let entry = req.body;
  // update existing entry
  if (entry.id) {
    let original = findEntry(entry.id);
    original.author = entry.author;
    original.dateCreated = entry.dateCreated;
    original.message = entry.message;
  // create new movie
  } else {
    entry.id = ++entryId;
    entry.dateCreated = new Date();
    entries.push(entry);
  }
  res.sendStatus(200);
});

/* delete entry by id */
router.delete('/guestbook/:id', function(req, res, next) {
  let id = parseInt(req.params['id']);
  if (!findEntry(id)) {
    res.sendStatus(404);
  } else {
    entries = entries.filter((entry)=> {
      return entry.id != id;
    });
    res.sendStatus(200);
  }
});

function findEntry(id:number) {
  let matches = entries.filter((entry) => {
    return entry.id == id;
  });
  return matches.length ? matches[0] : null;
}

export = router;
