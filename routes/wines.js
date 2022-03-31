var express = require('express');
var router = express.Router();
const winesCtrl = require('../controllers/wines');
const isLoggedIn = require('../config/auth');



// GET /movies/new
router.get('/', winesCtrl.index)
router.get('/new', isLoggedIn, winesCtrl.new);
router.get('/:id', winesCtrl.show);
router.post('/', isLoggedIn, winesCtrl.create);

module.exports = router;

