const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENGRID_API_KEY } = process.env;

sgMail.setApiKey(SENGRID_API_KEY);

const sendEmail = async (data) => {
  const mail = { ...data, from: "fefaodessa@gmail.com" };
  await sgMail.send(mail);
  return true;
};

module.exports = sendEmail;
