const { v1: uuidv1 } = require('uuid'); //Note: See the uuid documentation.
var mongoose = require("mongoose");
const crypto = require("crypto");


var userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true
    },
    lastname: {
      type: String,
      maxlength: 32,
      trim: true
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true // Note: Will get a 400 BAD REQUEST if the email of two users are unique
    },
    userinfo: {
      type: String,
      trim: true
    },
    encry_password: {
      type: String,
      required: true
    },
    salt: String,
    role: {
      type: Number,  // Higher the number higher is the access level
      default: 0
    },
    purchases: {
      type: Array,
      default: []
    }
  },
  { timestamps: true }
);

userSchema
  .virtual("password")
  .set(function(password) {
    this._password = password; // convention of having a private variable is to add an underscore before the variable name
    this.salt = uuidv1();
    this.encry_password = this.securePassword(password);
  })
  .get(function() {
    return this._password;
  });

userSchema.methods = {
  authenticate: function(plainpassword) {
    return this.securePassword(plainpassword) === this.encry_password;
  },

  securePassword: function(plainpassword) {
    if (!plainpassword) return "";
    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(plainpassword)
        .digest("hex");  //crypto.createHmac().update().digest();
    } catch (err) {
      return "";
    }
  }
};

module.exports = mongoose.model("User", userSchema);
