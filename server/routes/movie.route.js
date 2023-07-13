const router = require("express").Router();
const moviesController = require("../controller/movies.controller");

router.route("").get(moviesController.list);

module.exports = router;
