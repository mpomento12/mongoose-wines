var express = require('express');
var router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

router.post('/wines/:id/reviews', reviewsCtrl.create);
router.delete('/reviews/:id', reviewsCtrl.delete)

module.exports = router;