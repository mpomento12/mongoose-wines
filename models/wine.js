const mongoose = require('mongoose')
const Schema = mongoose.Schema

const wineSchema = new Schema({
    wineLabel: {
        type: String,
        required: true
    },
    wineColor: {
        type: String,
        enum: ['red', 'White']
    },
    grapeVariety: {
        type: String,
        enum: ['Pinot Noir', 'Pinot Blanc', 'Sauvignon Blanc', 'Tempranillo', 'Porto']
    },
    wineYear: {
        type: Number,
        default: function () {
          return new Date().getFullYear();
        }
    },
});
module.exports = mongoose.model('Wine', wineSchema);