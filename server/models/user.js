const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt')

const photographerSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    photoType: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    link: {
      type: String,
    },
    reservationCost: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
    }
  });

photographerSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

photographerSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', photographerSchema);

module.exports = User;