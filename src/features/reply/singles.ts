import { TextMessage } from '@line/bot-sdk';
import { ISingle } from '../../models/ISingle';
import { getSingleTitle } from '../search/singles';

export const replyWithSingleTitle = (query: string, singles: ISingle[]): TextMessage => {
  const queryInt = parseInt(query);

  if (queryInt && queryInt > 0 && queryInt < 23) {
    const singleTitle = getSingleTitle(query, singles);
    const replyText = singleTitle !== '' ? singleTitle : "Sorry, didn't match.";

    return {
      type: 'text',
      text: replyText,
    };
  } else {
    return {
      type: 'text',
      text: 'Please type in an integer between 1 to 22.',
    };
  }
};
