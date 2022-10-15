const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../../models/user");
const { RequestError } = require("../../helpers");
const { SECRET_KEY } = process.evn;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw RequestError(401, "Email or password is wrong");
  }
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw RequestError(401, "Email or password is wrong");
  }
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "12h" });
  res.status(200).json({
    token,
  });
};

module.exports = login;
