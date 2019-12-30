const request = require('supertest');
const faker = require('faker');
const RandExp = require('randexp');
const truncate = require('../Utils/truncate');
const app = require('../../src/start/app');

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
    const response = await request(app).post('/signup').send(user);

    expect(response.status).toBe(200);
  });

  it('Should show user', async () => {
    const { body } = await request(app).post('/signup').send(user);

    const response = await request(app).get(`/user/${body.id}`).set('Authorization', `Bearer ${body.token}`);
    expect(response.status).toBe(200);
  });

  it('Should updated user', async () => {
    const { body } = await request(app).post('/signup').send(user);

    const response = await request(app).put(`/user/${body.id}`).set('Authorization', `Bearer ${body.token}`).send(user);

    expect(response.status).toBe(200);
  });

  it('Should delete user', async () => {
    const { body } = await request(app).post('/signup').send(user);
    user.id = body.id;
    user.token = body.token;

    const response = await request(app).delete(`/user/${body.id}`).set('Authorization', `Bearer ${body.token}`);

    expect(response.status).toBe(200);
  });
});
