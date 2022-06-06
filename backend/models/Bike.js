// MealSchema.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Meal
let MealSchema = new Schema({
  model_name: {
    type: String
  },
  meal_color: {
    type: String
  },
  location: {
    type: String
  },
  rating: {
    type: Number
  },
  isAvailable: {
    type: Boolean
  },

},{
    collection: 'meal'
});

module.exports = mongoose.model('Meal', MealSchema);