const jwt = require("jsonwebtoken");

exports.generateToken = (payload, expaired) => {
  return jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: expaired,
  });
};
