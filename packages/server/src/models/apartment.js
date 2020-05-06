const mongoose = require('mongoose');
const { Schema } = mongoose;

const ApartmentSchema = new Schema({
  Number: { type: Number, required: true },
  Block: { type: Number, required: true },
});

module.exports = mongoose.model('apartment', ApartmentSchema);
