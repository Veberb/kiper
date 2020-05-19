const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;
const salt = 12;

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true },
);

UserSchema.statics.hashPassword = ({ password }) => bcrypt.hash(password, salt);

UserSchema.methods.checkPassword = function checkPassword(password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('user', UserSchema);
