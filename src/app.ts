import * as express from 'express';
import * as line from '@line/bot-sdk';
import { LINE_CONFIG } from './apis/lineAPI';

export const lineClient = new line.Client(LINE_CONFIG);

const lineClient = new line.Client(LINE_CONFIG);

const server = express();

server.post('/webhook', line.middleware(LINE_CONFIG), (request, response) => {
  response.sendStatus(200);

  for (const event of request.body.events) {
    console.log('event:', event);
    lineClient.replyMessage(event.replyToken, {
      type: 'flex',
      altText: '帰り道は遠回りしたくなる',
      contents: songFlexMessage as any,
    });
  }
});

server.listen(process.env.PORT || 8080);
