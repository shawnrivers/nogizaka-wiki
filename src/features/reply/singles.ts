import { TextMessage, FlexMessage, FlexContainer } from "@line/bot-sdk";
import { ISingle } from "../../models/ISingle";
import { getSingleTitle, getSingleByNumber } from "../search/singles";
import { getSingleFlexMessage } from "../messages/flexMessage/single";

const INPUT_UP_LIMIT = 23;
const INPUT_DOWN_LIMIT = 1;

export const replyWithSingleTitle = (query: string, singles: ISingle[]): TextMessage => {
  const queryInt = parseInt(query);

  if (queryInt && queryInt >= INPUT_DOWN_LIMIT && queryInt <= INPUT_UP_LIMIT) {
    const singleTitle = getSingleTitle(query, singles);
    const replyText = singleTitle !== "" ? singleTitle : "Sorry, didn't match.";

    return {
      type: "text",
      text: replyText,
    };
  } else {
    return {
      type: "text",
      text: `Please type in an integer between ${INPUT_DOWN_LIMIT} to ${INPUT_UP_LIMIT}.`,
    };
  }
};

export const replyWithSingleFlexMessage = (query: string, singles: ISingle[]): FlexMessage | TextMessage => {
  const queryInt = parseInt(query);

  if (queryInt && queryInt > 0 && queryInt < 23) {
    const single = getSingleByNumber(query, singles);

    if (single) {
      return {
        type: "flex",
        altText: single.title,
        contents: getSingleFlexMessage(single) as FlexContainer,
      };
    } else {
      return {
        type: "text",
        text: "Sorry, didn't match.",
      };
    }
  } else {
    return {
      type: "text",
      text: "Please type in an integer between 1 to 22.",
    };
  }
};
