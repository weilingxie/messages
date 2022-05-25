import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { MessagesModule } from '../src/messages/messages.module';

describe('MessagesModule (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [MessagesModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    const expectedResponse = {
      content: '1',
    };
    return request(app.getHttpServer())
      .get('/messages/1')
      .expect(200)
      .expect(expectedResponse);
  });
});
