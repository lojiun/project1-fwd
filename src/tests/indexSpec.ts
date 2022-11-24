import { app } from '../index';
import supertest from 'supertest';

const request = supertest(app);

describe('Api testing', () => {
  it(' return this page not found when wirte anys wrong url ', async () => {
    const response = await request.get('/img/anyword');
    expect(response.status).toBe(404);
  });
  it(' return this page not found when wirte anys wrong url ', async () => {
    const response = await request.get('/img');
    expect(response.status).toBe(400);
  });
  it('height parameter is missing', async () => {
    const response = await request.get('/img?fileName=Inter&width=900');
    expect(response.status).toBe(400);
  });
  it('enter valid number ', async () => {
    const response = await request.get('/img?fileName=Inter&width=900&height=-2000');
    expect(response.status).toBe(400);
  });
  it('fileName parameter is missing', async () => {
    const response = await request.get('/img?width=900&height=2000');
    expect(response.status).toBe(404);
  });

  it(' width parameter is missing', async () => {
    const response = await request.get('/img?fileName=Inter&height=2000');
    expect(response.status).toBe(400);
  });
  it(' image not found', async () => {
    const response = await request.get(
      '/img?fileName=lojiun&width=100&height=100'
    );
    expect(response.status).toBe(404);
  });
  

  it('should return sucess as image exists and all query parameters are available', async () => {
    const response = await request.get(
      '/img?fileName=Inter&width=900&height=2000'
    );
    expect(response.status).toBe(200);
  });
});
