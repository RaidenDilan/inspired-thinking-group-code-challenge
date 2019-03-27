/*global describe, -should, -expect, it, beforeEach, require */
process.env.NODE_ENV = 'test'; // Set the process environment to be test so we don't log Morgan
const chai     = require('chai');
const should   = require('chai').should();
const expect   = require('chai').expect; //requires Chai which is giving us the actualtesting methods (describe, should,expect )
const chaiHttp = require('chai-http');
const app      = require('supertest')(require('../../server')); // requires the app from server.js and supertest

chai.use(chaiHttp);

describe('GET /api/vehicles', () => {
  it('respond with json containing a list of all vehicles ', (done) => {
    app
      .get('/api/vehicles')
      // .set('Accept', 'application/json')
      // .expect('Content-Type', /json/)
      // .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.length).to.equal(5);
        expect(res.body).to.be.a('Array');
        done();
      });
  });

  //Should gives a 404 not found because our URL is false
  it('should return a 404 not found', (done) => {
    app
      .get('/api/THISISNOTAURL')
      // .set('Accept', 'application/json')
      // .expect('Content-Type', /json/)
      // .expect(200)
      .end((err, res) => {
        expect(res.body).to.have.property('message').to.equal('Not Found');
        res.should.have.status(404);
        done();
      });
  });
});
describe('GET /api/vehicles/:id', () => {
  it('respond with json containing a single vehicle ', (done) => {
    app
      .get('/api/vehicles/xe')
      // .set('Accept', 'application/json')
      // .expect('Content-Type', /json/)
      // .expect(200)
      .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.text).to.contain('id');
          expect(res.text).to.contain('description');
          expect(res.text).to.contain('price');
          done();
        });
  });

  it('respond with json vehicle not found if query doesn\'t exist', (done) => {
    app
      .get('/api/vehicles/xx')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404) // expecting HTTP status code
      // .expect('not found') // expecting content value
      .end((err, res) => {
        // expect(res.body).to.have.property('message').to.equal('Not Found');
        // res.should.have.status(404);
        if(err) return done(err);
        done();
      });
  });
});
