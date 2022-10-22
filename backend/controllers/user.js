const {
  lengthValidate,
  emailValidate,
  usernameValidate,
} = require("../helpers/validation.js");
const bcrypt = require("bcrypt");
const User = require("../models/User.js");

exports.register = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      password,
      gender,
      bYear,
      bMonth,
      bDay,
    } = req.body;

    // firstname validation
    if (!lengthValidate(first_name, 4, 35)) {
      return res
        .status(400)
        .json({ message: "First name must between 4 to 35 charcter" });
    }

    // lastname validation
    if (!lengthValidate(last_name, 4, 35)) {
      return res
        .status(400)
        .json({ message: "Last name must between 4 to 35 charcter" });
    }

    // email validation
    if (!emailValidate(email)) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    const check = await User.findOne({ email });

    if (check) {
      return res
        .status(400)
        .json({ message: "This email has already use ,Try another one" });
    }

    //password validation
    if (!lengthValidate(password, 8, 40)) {
      return res
        .status(400)
        .json({ message: "Password at lest 8 charcter or more" });
    }
    const passwordEncripted = await bcrypt.hash(password, 10);

    // username creating
    const usernameBefore = first_name + last_name;
    const usernameAfter =await usernameValidate(usernameBefore);

    const user = await new User({
      first_name,
      last_name,
      email,
      password: passwordEncripted,
      username:usernameAfter,
      gender,
      bYear,
      bMonth,
      bDay,
    }).save();
    res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
