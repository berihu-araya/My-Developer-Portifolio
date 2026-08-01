const test = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');
const { app } = require('../server');

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
