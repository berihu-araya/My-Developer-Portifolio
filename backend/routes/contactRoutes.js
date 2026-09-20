const express = require('express');
const Contact = require('../models/Contact');
const transporter = require('../config/mailer');

const router = express.Router(); // this is used to create a new router object that can handle routes for the contact form.

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

    const hasResend = Boolean(process.env.RESEND_API_KEY && process.env.RESEND_FROM); // Check if Resend is configured and this is used for sending emails. If not, fallback to Gmail SMTP.
    const hasGmail = Boolean(process.env.EMAIL_USER && process.env.EMAIL_PASSWORD); // Check if Gmail is configured

    if (!hasResend && !hasGmail) {
      return res.status(503).json({
        success: false,
        message: 'Email service is not configured on the server.'
      });
    } // If neither Resend nor Gmail is configured, return a 503 Service Unavailable response.

    const contact = new Contact({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim()
    }); // Create a new contact instance with the provided data, trimming whitespace and normalizing the email to lowercase.

    await contact.save(); // Save the contact instance to the database. This will trigger Mongoose validation and save the document.

    const mailOptions = {
      from: process.env.RESEND_FROM || process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER || process.env.RESEND_FROM, // Send to the configured recipient email or fallback to the sender email
      replyTo: contact.email,
      subject: `Portfolio contact message from ${contact.name}`,
      html: `
        <h2>New message from portfolio</h2>
        <p><strong>Name:</strong> ${contact.name}</p>
        <p><strong>Email:</strong> ${contact.email}</p>
        <p><strong>Message:</strong></p>
        <p>${contact.message.replace(/\n/g, '<br>')}</p>
      `
    }; // Prepare the email options, including the sender, recipient, subject, and HTML body. The message content is formatted to preserve line breaks.

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
    } // Handle Mongoose validation errors and return a 400 Bad Request response with the error messages.

    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'A message from this email already exists'
      });
    } // after how many messages from the same email address are allowed, this handles duplicate key errors and returns a 400 Bad Request response.

    return res.status(500).json({
      success: false,
      message: error?.response || 'Server error. Please try again later.'
    });
  }
});

module.exports = router;
