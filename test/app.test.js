// test/app.test.js
const request = require('supertest');
const app = require('../main'); // Export app from main.js

describe('GET /', () => {
  it('should return a message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBeDefined();
  });
});