const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);


const uniqueValidator = require('mongoose-unique-validator');


const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  });

userSchema.plugin(uniqueValidator);

  module.exports = mongoose.model('User', userSchema);