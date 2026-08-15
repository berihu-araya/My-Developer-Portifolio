const nodemailer = require("nodemailer");

let Resend;
try {
  ({ Resend } = require("resend"));
} catch (error) {
  Resend = null;
}

const sanitizeEmailPassword = (value = '') => String(value).replace(/\s+/g, '');

const gmailTransporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  family: 4,
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 10000,
  auth: {
    user: process.env.EMAIL_USER,
    pass: sanitizeEmailPassword(process.env.EMAIL_PASSWORD)
  }
});

const sendWithResend = async (mailOptions) => {
  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM || !Resend) {
    return null;
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error, data } = await resend.emails.send({
    from: process.env.RESEND_FROM,
    to: Array.isArray(mailOptions.to) ? mailOptions.to : [mailOptions.to],
    reply_to: mailOptions.replyTo || process.env.EMAIL_USER || process.env.RESEND_FROM,
    subject: mailOptions.subject,
    html: mailOptions.html,
  });

  if (error) {
    throw new Error(error.message || 'Resend email delivery failed');
  }

  return data;
};

const sendMail = async (mailOptions) => {
  if (process.env.RESEND_API_KEY && process.env.RESEND_FROM) {
    try {
      const result = await sendWithResend(mailOptions);
      if (result) {
        return result;
      }
    } catch (error) {
      console.warn('Resend failed; falling back to Gmail SMTP:', error.message);
    }
  }

  return gmailTransporter.sendMail(mailOptions);
};

module.exports = {
  ...gmailTransporter,
  sendMail,
  sanitizeEmailPassword,
  transporter: gmailTransporter,
};