const { MongoDriverError } = require('mongodb');
var Wine = require('../models/wine');

module.exports = {
  create,
  delete: deleteReview

};

function create(req, res) {
  Wine.findById(req.params.id, function(err, wine) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    wine.reviews.push(req.body);
    wine.save(function(err) {
      res.redirect(`/wines/${wine._id}`);
    });
  });
}


function deleteReview(req, res, next) {
    Wine.findOne({'reviews._id': req.params.id}).then(function(wine) {
      const review = wine.reviews.id(req.params.id);
      if (!review.user.equals(req.user._id)) return res.redirect(`/wines/${wine._id}`);
      review.remove();
      wine.save().then(function() {
      res.redirect(`/wines/${wine._id}`);
      }).catch(function(err) {
        return next(err);  
      });
    });
  }
