import request from 'supertest';
import { app, server } from './server';

describe('server', () => {
  it('should allow requests before rate limit reached', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toEqual('Hello World!');
  });

  it('should deny requests after rate limit exceeded', async () => {
    // assuming BUCKET_SIZE = 100 and REFILL_RATE = 10
    for (let i = 0; i < 150; i += 1) {
      await request(app).get('/');
    }
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(429);
    expect(response.text).toEqual('Rate Limit Exceeded.');
  });
});

afterAll((done) => {
  server.close();
  done();
});
