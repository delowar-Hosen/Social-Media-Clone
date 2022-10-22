const User = require("../models/User.js");

exports.lengthValidate = (text, min, max) => {
  if (text.length > max || text.length < min) {
    return false;
  }
  return true;
};

exports.emailValidate = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
};

exports.usernameValidate = async (username) => {
  let a = false;
  do {
    let check = await User.findOne({ username });
    if (check) {
      username += (+new Date() * Math.random()).toString().substring(0, 1);
      a = true;
    } else a = false;
  } while (a);

  return username;
};
