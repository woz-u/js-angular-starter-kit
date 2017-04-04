import express = require('express');
let router = express.Router();

let makes = [
  {id:1, name:'BMW'},
  {id:2, name:'Tesla'},
  {id:3, name:'Mini Cooper'}
];

var cars = [
        {
            id: 1,
            ShortDescription: "Green MINI Cooper S",
            FullDescription : "This MINI Cooper S is great for the city.",
            CarMakeId : 3,
            Price : 30000,
            ImageUrl : "https://netlogx.com/wp-content/uploads/2012/09/british-racing-green-mini-cooper-s-small1.jpg"
        },
        {
            id: 2,
            ShortDescription : "Orange MINI Cooper S",
            FullDescription : "Orange is an odd color for a car.",
            CarMakeId : 3,
            Price : 25000,
            ImageUrl : "https://s-media-cache-ak0.pinimg.com/736x/7d/d3/fc/7dd3fcdea71950a3d1c9c50b3522d488.jpg"
        },
        {
            id: 3,
            ShortDescription : "Black MINI Cooper Countryman",
            FullDescription : "Holds more people than a normal MINI cooper and it is invisible at night.",
            CarMakeId : 3,
            Price : 45000,
            ImageUrl : "http://www.moibbk.com/images/mini-cooper-countryman-black-2.jpg"
        },
        {
            id: 4,
            ShortDescription : "Tesla Model S",
            FullDescription : "This red Tesla Model S has a 120 mile range.",
            CarMakeId : 2,
            Price : 130000,
            ImageUrl : "http://media.caranddriver.com/images/14q4/638369/2015-tesla-model-s-p85d-first-drive-review-car-and-driver-photo-648964-s-original.jpg"
        },
        {
            id: 5,
            ShortDescription : "Tesla Model X",
            FullDescription : "A Tesla Mini Van with Falcon Doors.",
            CarMakeId : 2,
            Price : 150000,
            ImageUrl : "http://cdn.vrworld.com/wp-content/uploads/2015/09/tesla-model-x-concept-doors-open-rear-three-quarter.jpg"
        }
];

router.get('/cars', function (req, res, next) {
    res.json(cars);
});

router.get('/cars/:id', function (req, res, next) {
    let id = parseInt(req.params['id']);
    let car = findCar(id);
    if (car) {
        res.json(car);
    } else {
        res.sendStatus(404);
    }
});

function findCar(id:number) {
  let matches = cars.filter((car) => {
    return car.id == id;
  });
  return matches.length ? matches[0] : null;
}

export = router;
