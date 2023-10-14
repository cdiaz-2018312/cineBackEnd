const { Router } = require('express');
const {  getMovies } = require('../controller/movieController');
const router = Router();

router.get("/getMovies", getMovies);

module.exports = router;
