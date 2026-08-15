const express = require('express');
const Contact = require('../models/Contact');
const transporter = require('../config/mailer');

const router = express.Router();

// POST /api/contact - Handle contact form submissions
router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate required fields
    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof message !== 'string' ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    const hasResend = Boolean(process.env.RESEND_API_KEY && process.env.RESEND_FROM);
    const hasGmail = Boolean(process.env.EMAIL_USER && process.env.EMAIL_PASSWORD);

    if (!hasResend && !hasGmail) {
      return res.status(503).json({
        success: false,
        message: 'Email service is not configured on the server.'
      });
    }

    const contact = new Contact({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim()
    });

    await contact.save();

    const mailOptions = {
      from: process.env.RESEND_FROM || process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER || process.env.RESEND_FROM,
      replyTo: contact.email,
      subject: `Portfolio contact message from ${contact.name}`,
      html: `
        <h2>New message from portfolio</h2>
        <p><strong>Name:</strong> ${contact.name}</p>
        <p><strong>Email:</strong> ${contact.email}</p>
        <p><strong>Message:</strong></p>
        <p>${contact.message.replace(/\n/g, '<br>')}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    return res.status(201).json({
      success: true,
      message: 'Message sent successfully! I will get back to you soon.'
    });

  } catch (error) {
    console.error('Contact form error:', error);

    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors
      });
    }

    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'A message from this email already exists'
      });
    }

    return res.status(500).json({
      success: false,
      message: error?.response || 'Server error. Please try again later.'
    });
  }
});

module.exports = router;
