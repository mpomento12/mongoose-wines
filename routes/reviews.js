var express = require('express');
var router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

router.get('/reviews/:id/edit', reviewsCtrl.edit);
router.put('/reviews/:id', reviewsCtrl.update);
router.post('/wines/:id/reviews', reviewsCtrl.create);
router.delete('/reviews/:id', reviewsCtrl.delete)


module.exports = router;