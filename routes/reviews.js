var express = require('express');
var router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
const isLoggedIn = require('../config/auth');

router.get('/reviews/:id/edit', isLoggedIn, reviewsCtrl.edit);
router.put('/reviews/:id', isLoggedIn, reviewsCtrl.update);
router.post('/wines/:id/reviews', isLoggedIn, reviewsCtrl.create);
router.delete('/reviews/:id', reviewsCtrl.delete)


module.exports = router;