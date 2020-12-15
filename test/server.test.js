const knex = require('knex');
const app = require('../app');
require('dotenv').config();
const supertest = require('supertest');
const expect = require('chai').expect;
process.env.NODE_ENV = 'test';



global.expect = expect;
global.supertest = supertest;

describe('Journal API:', function () {
  let db;
  let entries = [
    {
      id: 16,
      title: '',
      content: '',
      mood: '',
      user_id: 15
    },
    {
      id: 17,
      title: 'Under Pressure',
      content: 'Lots of things and stuff',
      mood: '',
      user_id: 15
    },
  ];

  before('make knex instance', () => {  
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL,
    });
    app.set('db', db);
  });
  
  before('cleanup', () => db.raw('TRUNCATE TABLE entries RESTART IDENTITY;'));

  afterEach('cleanup', () => db.raw('TRUNCATE TABLE entries RESTART IDENTITY;')); 

  after('disconnect from the database', () => db.destroy()); 

  describe('GET /api/journal', () => {

    beforeEach('insert some entries', () => {
      return db('entries').insert(entries);
    });

    it('should respond to GET `/api/journal` with an array of entries and status 200', function () {
      return supertest(app)
        .get('/api/journal')
        .expect(200)
        .expect(res => {
          expect(res.body).to.be.a('array');
          expect(res.body).to.have.length(entries.length);
          res.body.forEach((item) => {
            expect(item).to.be.a('object');
            expect(item).to.include.keys('id', 'title', 'completed');
          });
        });
    });

  });

  
  describe('GET /api/journal/:id', () => {

    beforeEach('insert some entries ', () => {
      return db('entries').insert(entries);
    });

    it('should return correct entries when given an id', () => {
      let doc;
      return db('entries')
        .first()
        .then(_doc => {
          doc = _doc;
          return supertest(app)
            .get(`/api/journal ${doc.id}`)
            .expect(200);
        })
        .then(res => {
          expect(res.body).to.be.an('object');
          expect(res.body).to.include.keys('id', 'title', 'completed');
          expect(res.body.id).to.equal(doc.id);
          expect(res.body.title).to.equal(doc.title);
          expect(res.body.completed).to.equal(doc.completed);
        });
    });

    it('should respond with a 404 when given an invalid id', () => {
      return supertest(app)
        .get('/api/journal/aaaaaaaaaaaa')
        .expect(404);
    });
    
  });

  
  describe('POST /api/journal', function () {

    it('should create and return a new entries when provided valid data', function () {
      const newItem = {
        id: 17,
        date: '2020-11-19T20:23:59.199Z',
        title: 'Under Pressure',
        content: 'Lots of things and stuff',
        mood: 'bleh',
        user_id: 15
      };
      
      return supertest(app)
        .post('/api/journal')
        .send(newItem)
        .expect(201)
        .expect(res => {
          expect(res.body).to.be.a('object');
          expect(res.body).to.include.keys('id', 'title', 'content', 'mood');
          expect(res.body.title).to.equal(newItem.title);
          expect(res.headers.location).to.equal(`/api/journal /${res.body.id}`);
        });
    });

    it('should respond with 400 status when given bad data', function () {
      const badItem = {
        foobar: 'broken item'
      };
      return supertest(app)
        .post('/api/journal')
        .send(badItem)
        .expect(400);
    });

  });
  describe('POST /api/login', function () {
    it('should respond with a 200 when given valid cred', () => {
      const user = {username: 'name', password: 'password' };
      return supertest(app)
        .post('/api/login/')
        .send(user)
        .expect(200)
        .expect(res => {
          expect(res.body).to.be.a('object');
        });
    });
  });

  describe('POST /api/register', function () {
    it('should respond with a 200 when given valid info', () => {
      const user = {username: 'name', password: 'password' };
      return supertest(app)
        .post('/api/register/')
        .send(user)
        .expect(200)
        .expect(res => {
          expect(res.body).to.be.a('object');
        });
    });
  });

  
  describe('POST /api/activity', function () {

    it('should create and return a new entries when provided valid data', function () {
      const newItem = {
        id: 15,
        medicine: 'tylonol',
        food: 'waffles',
        mood: 'happy',
        sleep: 5,
        energy: 4,
        focus: 3
      };
      
      return supertest(app)
        .post('/api/activity')
        .send(newItem)
        .expect(201)
        .expect(res => {
          expect(res.body).to.be.a('object');
          expect(res.body).to.include.keys('id', 'medicine', 'food', 'mood', 'sleep', 'energy', 'focus');
          expect(res.body.title).to.equal(newItem.title);
          expect(res.headers.location).to.equal(`/api/activity/${res.body.id}`);
        });
    });

    it('should respond with 400 status when given bad data', function () {
      const badItem = {
        foobar: 'broken item'
      };
      return supertest(app)
        .post('/api/activity')
        .send(badItem)
        .expect(400);
    });

  });

});