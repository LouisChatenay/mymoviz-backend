var express = require('express');
var router = express.Router();

router.get('/movies', (req, res) => {
  
  fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
    }
  })
  .then(data => data.json())
  .then(data => res.json({result: true, movies: data.results}))
  .catch(err => res.json({result: false, error: err.message}))
  
})

module.exports = router;
