const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    content: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, default: 5 },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
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
        enum: ['Red', 'White', 'Pink', 'Yellow', 'Orange']
    },
    grapeVariety: {
        type: String,
        required: true
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