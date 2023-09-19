var express = require('express');
var router = express.Router();

const FILMS = [
  {
    id: 1,
    title: 'Divergente1',
    duration : 120,
    budget : 20000,
    link : "monlien"
  },
  {
    id: 2,
    title: 'Divergente2',
    duration : 120,
    budget : 20000,
    link : "monlien"  },
  {
    id: 3,
    title: 'Divergente3',
    duration : 120,
    budget : 20000,
    link : "monlien"  }
];
/* GET home page. */
router.get('/films', function(req, res, next) {
  res.json(FILMS);
});

module.exports = router;
