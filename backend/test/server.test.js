const test = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');
const { app } = require('../server');
const transporter = require('../config/mailer');

test('GET /api/health returns service status', async () => {
  const response = await request(app).get('/api/health');

  assert.equal(response.status, 200);
  assert.equal(response.body.status, 'OK');
  assert.equal(response.body.environment, process.env.NODE_ENV || 'development');
});

test('POST /api/contact rejects incomplete payloads', async () => {
  const response = await request(app)
    .post('/api/contact')
    .send({ name: 'Berihu' });

  assert.equal(response.status, 400);
  assert.equal(response.body.success, false);
});

test('POST /api/contact returns 503 when mail is not configured', async () => {
  const previousEmailUser = process.env.EMAIL_USER;
  const previousEmailPassword = process.env.EMAIL_PASSWORD;
  const previousResendApiKey = process.env.RESEND_API_KEY;
  const previousResendFrom = process.env.RESEND_FROM;

  delete process.env.EMAIL_USER;
  delete process.env.EMAIL_PASSWORD;
  delete process.env.RESEND_API_KEY;
  delete process.env.RESEND_FROM;

  try {
    const response = await request(app)
      .post('/api/contact')
      .send({
        name: 'Berihu Araya',
        email: 'berihuaraya374@gmail.com',
        message: 'I would like to discuss a website project.'
      });

    assert.equal(response.status, 503);
    assert.equal(response.body.success, false);
    assert.match(response.body.message, /not configured|email service/i);
  } finally {
    if (previousEmailUser) process.env.EMAIL_USER = previousEmailUser;
    if (previousEmailPassword) process.env.EMAIL_PASSWORD = previousEmailPassword;
    if (previousResendApiKey) process.env.RESEND_API_KEY = previousResendApiKey;
    if (previousResendFrom) process.env.RESEND_FROM = previousResendFrom;
  }
});

test('POST /api/contact fails fast when the mail provider rejects the message', async () => {
  const originalSendMail = transporter.sendMail;
  transporter.sendMail = async () => {
    throw new Error('SMTP timeout while connecting to Gmail');
  };

  try {
    const response = await request(app)
      .post('/api/contact')
      .send({
        name: 'Berihu Araya',
        email: 'berihuaraya374@gmail.com',
        message: 'I would like to discuss a website project.'
      });

    assert.equal(response.status, 500);
    assert.equal(response.body.success, false);
    assert.match(response.body.message, /server error|try again later|failed/i);
  } finally {
    transporter.sendMail = originalSendMail;
  }
});
