const {
  lengthValidate,
  emailValidate,
  usernameValidate,
} = require("../helpers/validation.js");
const bcrypt = require("bcrypt");
const User = require("../models/User.js");
const { generateToken } = require("../helpers/token.js");
const { sendEmailVerification } = require("../helpers/mailer.js");
const jwt = require("jsonwebtoken");

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
    const usernameAfter = await usernameValidate(usernameBefore);

    const user = await new User({
      first_name,
      last_name,
      email,
      password: passwordEncripted,
      username: usernameAfter,
      gender,
      bYear,
      bMonth,
      bDay,
    }).save();

    const emailVerificationToken = generateToken({ id: user._id }, "30m");
    const url = `${process.env.BASE_URL}/activate/${emailVerificationToken}`;
    sendEmailVerification(user.email, user.first_name, url);
    const token = generateToken({ id: user._id.toString() }, "7d");
    res.send({
      id: user._id,
      username: user.username,
      first_name: user.first_name,
      last_name: user.last_name,
      token,
      varified: user.varified,
      message: "Register sucess ! Active your email to start",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.activeAccount = async (req, res) => {
  try {
    const { token } = req.body;
    console.log(token);

    const user = jwt.verify(token, process.env.TOKEN_SECRET);
    const check = await User.findById(user.id);

    if (check == true) {
      return res
        .status(400)
        .json({ message: "This account has already activated" });
    } else {
      await User.findByIdAndUpdate(user.id, { varified: true });
      return res.status(200).json({ message: "Account is activated" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "This email is not connected any account" });
    }

    const check = await bcrypt.compare(password, user.password);
    if (!check) {
      return res.status(400).json({ message: "Invalid password,Try again" });
    }

    const token = generateToken({ id: user._id.toString() }, "7d");
    res.send({
      id: user._id,
      username: user.username,
      first_name: user.first_name,
      last_name: user.last_name,
      token,
      varified: user.varified,
      message: "Login sucess ! ",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
