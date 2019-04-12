import * as express from 'express';
import * as line from '@line/bot-sdk';
import { songFlexMessage } from './templates/flexMessage/songs';

const LINE_CONFIG = {
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN || '',
  channelSecret: process.env.LINE_CHANNEL_SECRET || '',
};

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
