import * as express from 'express';
import * as line from '@line/bot-sdk';

const LINE_CONFIG = {
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN || '',
  channelSecret: process.env.LINE_CHANNEL_SECRET || '',
};

console.log('LINE_CHANNEL_ACCESS_TOKEN:', process.env.LINE_CHANNEL_ACCESS_TOKEN);
console.log('LINE_CHANNEL_SECRET:', process.env.LINE_CHANNEL_SECRET);

const lineClient = new line.Client(LINE_CONFIG);

const server = express();

server.post('/webhook', line.middleware(LINE_CONFIG), (request, response) => {
  response.sendStatus(200);

  for (const event of request.body.events) {
    console.log('event:', event);
    lineClient.replyMessage(event.replyToken, {
      type: 'text',
      text: 'Hello, world!',
    });
  }
});

server.listen(process.env.PORT || 8080);
