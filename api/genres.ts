import express = require('express');
let router = express.Router();

let genres = [
  {
    id:1,
    name:'action',
    movies: [
      {id:1, title:'Die Hard'},
      {id:2, title:'Broken Arrow'}
    ]
  },
  {
    id:2,
    name:'science fiction',
    movies: [
      {id:3, title:'Star Wars'},
      {id:4, title:'Bladerunner'},
      {id:5, title:'Ex Machina'}
    ]
  },
  {
    id:3,
    name:'drama',
    movies: [
      {id:6, title:'The Godfather'},
      {id:7, title:'Training Day'}
    ]
  }

];

/* GET genres without movies */
router.get('/genres', function(req, res, next) {
  let results = genres.map((genre)=>{
    return {id:genre.id, name:genre.name};
  });
  res.json(results);
});

/* GET genre with matching movies */
router.get('/genres/:id', function(req, res, next) {
  let genreId = parseInt(req.params['id']);
  let genre = findGenre(genreId);
  if (genre) {
    res.json(genre);
  } else {
    res.sendStatus(404);
  }
});

function findGenre(id:number) {
  let matches = genres.filter((genre)=>{
    return genre.id == id;
  });
  return matches.length?matches[0]:null;
}

export = router;
