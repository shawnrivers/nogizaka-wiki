import { TextMessage } from '@line/bot-sdk'
import { ISingle } from "../models/ISingle";

export const replyWithSingleTitle = (query: string, singles: ISingle[]): TextMessage => {
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