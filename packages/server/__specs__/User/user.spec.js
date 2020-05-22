const MongoMemory = require('mongodb-memory-server').default;
const mongoose = require('mongoose');
const { expect } = require('chai');
const request = require('supertest');
const server = require('../../src/');
const { CREATE_USER, SIGNIN } = require('./Query');

let mongod;
describe('User Test', () => {
  before(async () => {
    mongod = new MongoMemory();
    const conn = await mongoose.connect(await mongod.getConnectionString(), {
      useNewUrlParser: true,
    });
    return conn;
  });

  it('Create User', (done) => {
    request(server)
      .post('/graphql')
      .send({
        query: CREATE_USER,
        variables: {
          user: { email: 'bubbles@gmail.com', password: 'trailerparkboymelhorseriado' },
        },
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.data.createUser).to.have.property('email');
        done();
      });
  });
  it('Duplicate user login', (done) => {
    request(server)
      .post('/graphql')
      .send({
        query: CREATE_USER,
        variables: {
          user: { email: 'bubbles@gmail.com', password: 'temnanetflix' },
        },
      })
      .end((err, res) => {
        expect(res.body.errors[0].message).to.contains('Já existe um usuário com o email informado');
        done();
      });
  });
  it('Auth user with invalid password', (done) => {
    request(server)
      .post('/graphql')
      .send({
        query: SIGNIN,
        variables: {
          user: { email: 'bubbles@gmail.com', password: 'theofficeehgenialtambem' },
        },
      })
      .expect(200)
      .end((err, res) => {
        expect(res.body.errors[0].message).to.contains('Senha errada');
        done();
      });
  });
  it('Auth user with valid password', (done) => {
    request(server)
      .post('/graphql')
      .send({
        query: SIGNIN,
        variables: {
          user: { email: 'bubbles@gmail.com', password: 'trailerparkboymelhorseriado' },
        },
      })
      .expect(200)
      .end((err, res) => {
        expect(res.body.data).to.have.property('signIn');
        done();
      });
  });
  after(() => {
    mongod.stop();
  });
});
