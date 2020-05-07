const mongoose = require('mongoose');
const { Schema } = mongoose;

const ResidentSchema = new Schema(
  {
    name: { type: String, required: true },
    birth: { type: Number, required: true },
    phone: { type: Number, required: true },
    cpf: { type: Number, required: true },
    email: { type: String, required: true },
    apartment: { type: Schema.Types.ObjectId, ref: 'apartment', required: true },
    responsible: { type: Number, required: true },
  },
  { timestamps: true },
);

module.exports = mongoose.model('resident', ResidentSchema);
