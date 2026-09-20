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
  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM || !Resend) { // Check if Resend is configured and the Resend class is available
    return null;
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error, data } = await resend.emails.send({
    from: process.env.RESEND_FROM,
    to: Array.isArray(mailOptions.to) ? mailOptions.to : [mailOptions.to],
    reply_to: mailOptions.replyTo || process.env.EMAIL_USER || process.env.RESEND_FROM,
    subject: mailOptions.subject,
    html: mailOptions.html,
  }); // Use 'reply_to' instead of 'replyTo' for Resend API and its main usage is to send an array of recipients, so we ensure that 'to' is always an array.

  if (error) {
    throw new Error(error.message || 'Resend email delivery failed');
  }

  return data;
};

const sendMail = async (mailOptions) => { // This function will first attempt to send the email using Resend if configured, and if that fails or is not configured, it will fall back to Gmail SMTP.
  if (process.env.RESEND_API_KEY && process.env.RESEND_FROM) {
    try {
      const result = await sendWithResend(mailOptions);
      if (result) {
        return result;
      } // this means Resend was configured and the email was sent successfully, so we return the result.
    } catch (error) {
      console.warn('Resend failed; falling back to Gmail SMTP:', error.message);
    }
  }

  return gmailTransporter.sendMail(mailOptions); // Fallback to Gmail SMTP if Resend is not configured or fails
};

module.exports = { 
  ...gmailTransporter,
  sendMail,
  sanitizeEmailPassword,
  transporter: gmailTransporter,
}; 