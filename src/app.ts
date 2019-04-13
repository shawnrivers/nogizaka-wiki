import * as express from 'express';
import * as line from '@line/bot-sdk';
import { getSongFlexMessage } from './templates/flexMessage/song';
import { LINE_CONFIG } from './apis/lineAPI';
import { fetchSingles } from './apis/getSinglesAPI';
import { ISingle } from './models/ISingle';

export const lineClient = new line.Client(LINE_CONFIG);

let singles: ISingle[] = [];

const server = express();

const replyWithSingleTitle = (query: string, singles: ISingle[]): line.TextMessage => {
  const queryInt = parseInt(query);

  if (queryInt && queryInt > 0 && queryInt < 23) {
    for (const single of singles) {
      if (single.number === query) {
        return {
          type: 'text',
          text: single.title,
        };
      }
    }
    return {
      type: 'text',
      text: "Sorry, didn't match.",
    };
  } else {
    return {
      type: 'text',
      text: 'Please type in an integer between 1 to 22.',
    };
  }
};

server.post('/webhook', line.middleware(LINE_CONFIG), async (request, response) => {
  response.sendStatus(200);

  if (singles.length === 0) {
    console.log('Fetching singles data...');
    singles = await fetchSingles();
  }

  for (const event of request.body.events) {
    const userInputText = event.message.text;

    console.log('Received user input:', userInputText);

    const message = replyWithSingleTitle(userInputText, singles);

    lineClient.replyMessage(event.replyToken, message);

    // lineClient.replyMessage(event.replyToken, {
    //   type: 'flex',
    //   altText: '帰り道は遠回りしたくなる',
    //   contents: getSongFlexMessage() as line.FlexContainer,
    // });
  }
});

server.listen(process.env.PORT || 8080);
