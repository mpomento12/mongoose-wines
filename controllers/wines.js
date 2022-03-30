const Wine = require('../models/wine')

module.exports = {
    index, 
    show, 
    new: newWine,
    create,

};

function index (req, res) {
    Wine.find({}, function(err, wines) {
        res.render('wines/index', { title: 'All The Wines', wines });
    });
};

function show(req, res) {
    Wine.findById(req.params.id, function(err, wine) {
      res.render('wines/show', { title: 'Wine Details', wine });
    });
  }
  
function newWine(req, res) {
    res.render('wines/new', {title:'Add New Wine'})
};

function create (req, res) {
    const wine = new Wine(req.body);
    wine.save(function(err) {
        if (err) return res.redirect('/wines/new');
        console.log(wine)
        res.redirect('/wines');
    });
};
