const { Schema, model } = require("mongoose");
const { isEmail } = require("validator");
// const bcrypt = require("bcrypt");

const userSchema = Schema({
    name: String,
    last_name: String,
    telephone: Number,
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: isEmail,
        message: (props) => `${props.value}is not  correct`,
      },
    },
    password: {
      type: String,
      required: [true, "password is requires"],
      minlengh: 8,
    },

// /*userSchema.pre('save', function() {
//   if (!this.email) {
//     const error = new Error('mon message')
//     next(error)
//   }
//   next()
// }) */

// userSchema.pre("save", async function () {
//   this.email = this.email.toLowerCase();
// });

// userSchema.pre("save", async function () {
//   this.password = await bcrypt.hash(this.password, 10);
});

module.exports = model("User", userSchema);
