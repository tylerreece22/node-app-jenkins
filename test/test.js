const request = require('supertest');
const app = require('../');

describe('GET /', () => {
 it('respond with hello world', (done) => {
 request(app).get('/').expect('hello world', done);
 });
});
