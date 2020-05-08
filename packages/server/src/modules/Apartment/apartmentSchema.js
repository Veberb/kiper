const mongoose = require('mongoose');
const { Schema } = mongoose;

const ApartmentSchema = new Schema(
  {
    name: { type: String, required: true },
    number: { type: Number, required: true },
    block: { type: String, required: true },
  },
  { timestamps: true },
);

module.exports = mongoose.model('apartment', ApartmentSchema);
