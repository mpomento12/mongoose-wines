const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    content: String,
    rating: {type: Number, min: 1, max: 5, default: 5},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
  });

const wineSchema = new Schema({
    wineLabel: {
        type: String,
        required: true
    },
    wineColor: {
        type: String,
        enum: ['Red', 'White']
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
    }, reviews: [reviewSchema]
}, { 
    timestamps: true
});
module.exports = mongoose.model('Wine', wineSchema);