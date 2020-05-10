const mongoose = require('mongoose');
const { Schema } = mongoose;

const Resident = require('../Resident/resident.schema');

const ApartmentSchema = new Schema(
  {
    name: { type: String, required: true },
    number: { type: Number, required: true },
    block: { type: String, required: true },
  },
  { timestamps: true },
);

ApartmentSchema.post('findOneAndDelete', { query: true }, async function (doc, next) {
  if (doc) {
    await Resident.deleteMany({ apartment: doc._id });
  }
  next();
});

module.exports = mongoose.model('apartment', ApartmentSchema);
