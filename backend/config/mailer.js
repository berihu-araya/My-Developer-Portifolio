const nodemailer = require("nodemailer");

const sanitizeEmailPassword = (value = '') => value.replace(/\s+/g, '');

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  family: 4,
  auth: {
    user: process.env.EMAIL_USER,
    pass: sanitizeEmailPassword(process.env.EMAIL_PASSWORD)
  }
});

module.exports = transporter;
module.exports.sanitizeEmailPassword = sanitizeEmailPassword;