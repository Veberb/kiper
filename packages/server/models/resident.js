const mongoose = require('mongoose');
const { Schema } = mongoose;

const ResidentSchema = new Schema({
  Name: { type: String, required: true },
  Birth: { type: Number, required: true },
  Phone: { type: Number, required: true },
  Cpf: { type: Number, required: true },
  Email: { type: String, required: true },
  Apartment: { type: Schema.Types.ObjectId, ref: 'apartment', required: true },
  Responsible: { type: Number, required: true },
});

module.exports = mongoose.model('resident', ResidentSchema);
