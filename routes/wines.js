var express = require('express');
var router = express.Router();
const winesCtrl = require('../controllers/wines');

// GET /movies/new
router.get('/', winesCtrl.index)
router.get('/new', winesCtrl.new);
router.get('/:id', winesCtrl.show);
router.post('/', winesCtrl.create);

module.exports = router;

