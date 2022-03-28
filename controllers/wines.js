const Wine = require('../models/wine')

module.exports = {
    new: newWine,
    create,
    index,
};

function index (req, res) {
    Wine.find({}, function(err, wines) {
        res.render('wines/index', { title: 'All Wine', wines });
    });
};

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