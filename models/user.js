const { Schema, model } = require(`mongoose`);

const userSchema = new Schema({
  username: {
    type: String,
    require: true,
  },
  todo: [{ type: Schema.Types.ObjectId, ref: `Todo` }],
});

const User = model(`User`, userSchema);

module.exports = User;
