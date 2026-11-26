const express = require('express');
const Contact = require('../models/Contact');
const transporter = require('../config/mailer');

const router = express.Router();

// Helper to escape potential HTML characters for safe email rendering
const escapeHtml = (text = '') => {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

// POST /api/contact - Handle contact form submissions
router.post('/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Type and existence check
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required fields.'
      });
    }

    const cleanName = String(name).trim().slice(0, 50);
    const cleanEmail = String(email).trim().toLowerCase().slice(0, 254);
    const cleanSubject = subject ? String(subject).trim().slice(0, 100) : 'General Inquiry';
    const cleanMessage = String(message).trim().slice(0, 1000);

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.'
      });
    }

    if (cleanName.length < 2) {
      return res.status(400).json({
        success: false,
        message: 'Name must be at least 2 characters long.'
      });
    }

    if (cleanMessage.length < 10) {
      return res.status(400).json({
        success: false,
        message: 'Message must be at least 10 characters long.'
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

    // Store in MongoDB
    const contact = new Contact({
      name: cleanName,
      email: cleanEmail,
      message: cleanMessage
    });
    await contact.save();

    const escapedName = escapeHtml(cleanName);
    const escapedEmail = escapeHtml(cleanEmail);
    const escapedSubject = escapeHtml(cleanSubject);
    const escapedMessage = escapeHtml(cleanMessage).replace(/\n/g, '<br>');

    // Notification email to Berihu
    const mailOptions = {
      from: process.env.RESEND_FROM || process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER || process.env.RESEND_FROM,
      replyTo: cleanEmail,
      subject: `[Portfolio Inquiry] ${escapedSubject} from ${escapedName}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <div style="border-bottom: 2px solid #10b981; padding-bottom: 12px; margin-bottom: 20px;">
            <h2 style="color: #0f172a; margin: 0; font-size: 20px;">New Portfolio Contact Message</h2>
            <span style="font-size: 12px; color: #64748b; font-family: monospace;">Time: ${new Date().toUTCString()}</span>
          </div>
          <p style="margin: 8px 0; font-size: 14px; color: #334155;"><strong>From:</strong> ${escapedName} &lt;<a href="mailto:${escapedEmail}" style="color: #10b981;">${escapedEmail}</a>&gt;</p>
          <p style="margin: 8px 0; font-size: 14px; color: #334155;"><strong>Subject:</strong> ${escapedSubject}</p>
          <div style="margin-top: 16px; padding: 16px; background-color: #f8fafc; border-radius: 8px; border: 1px solid #cbd5e1;">
            <p style="margin: 0; font-size: 14px; color: #1e293b; line-height: 1.6;">${escapedMessage}</p>
          </div>
        </div>
      `
    };

    // Auto-reply acknowledgment email to sender
    const autoReplyOptions = {
      from: process.env.RESEND_FROM || process.env.EMAIL_USER,
      to: cleanEmail,
      subject: `Thank you for reaching out, ${escapedName} - Berihu Araya`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #0f172a; margin: 0 0 12px 0; font-size: 18px;">Message Received</h2>
          <p style="font-size: 14px; color: #334155; line-height: 1.6;">
            Hi ${escapedName},<br><br>
            Thank you for contacting me through my portfolio. I have received your message regarding <strong>${escapedSubject}</strong> and will review it promptly.
          </p>
          <p style="font-size: 14px; color: #334155; line-height: 1.6;">
            Best regards,<br>
            <strong>Berihu Araya Gebrihans</strong><br>
            <span style="font-size: 12px; color: #64748b;">Full-Stack &amp; Odoo ERP Software Engineer</span><br>
            <a href="https://berihu-araya-portifolio.vercel.app/" style="font-size: 12px; color: #10b981;">Portfolio</a> • 
            <a href="https://www.linkedin.com/in/berihu-araya-159b0033b/" style="font-size: 12px; color: #10b981;">LinkedIn</a>
          </p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    transporter.sendMail(autoReplyOptions).catch(err => {
      console.warn('Auto-responder delivery non-fatal error:', err.message);
    });

    return res.status(201).json({
      success: true,
      message: 'Your message has been received! I will review your inquiry and get back to you promptly.'
    });

  } catch (error) {
    console.error('Contact route internal error:', error);

    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      });
    }

    return res.status(500).json({
      success: false,
      message: 'Internal server error while processing your message. Please reach out directly to berihuaraya374@gmail.com.'
    });
  }
});

module.exports = router;
