const request = require('supertest');
const faker = require('faker');
const RandExp = require('randexp');
const jwt = require('jsonwebtoken');
const truncate = require('../Utils/truncate');
const app = require('../../src/start/app');
const { secret } = require('../../src/config/vars');

const user = {};

describe('Describe your tests Integrations', () => {
  beforeAll(async () => {
    await truncate.user();
  });

  afterAll(async () => {
    await truncate.user();
  });

  beforeEach(() => {
    user.name = faker.name.findName();
    user.email = faker.internet.email();
    user.password = faker.internet.password();
    user.age = faker.random.number({ min: 1, max: 120 });
    user.city = faker.address.city();
    user.state = faker.address.state();
    user.country = faker.address.country();
    user.characters = [new RandExp(/^[0-9]{4}$/).gen(), new RandExp(/^[0-9]{4}$/).gen(), new RandExp(/^[0-9]{4}$/).gen()];
  });

  it('Should create user', async () => {
    const response = await request(app).post('/users').send(user);
    user.id = response.body.id;
    user.token = response.body.token;

    expect(response.status).toBe(200);
  });

  it.skip('Should show user', async () => {
    const token = jwt.sign({ id: new RandExp(/^[a-zA-Z0-9]{10}$/) }, secret);
    const response = await request(app).put('/users').set('Authorization', `Bearer ${token}`).send(user);

    expect(response.status).toBe(200);
  });
});
