import { TextMessage, FlexMessage, FlexContainer } from "@line/bot-sdk";
import { ISingle } from "../../models/ISingle";
import { getSingleTitle, getSingleByNumber } from "../search/singles";
import { getSingleFlexMessage } from "../messages/flexMessage/single";

export const replyWithSingleTitle = (query: string, singles: ISingle[]): TextMessage => {
  const queryInt = parseInt(query);

  if (queryInt && queryInt > 0 && queryInt < 23) {
    const singleTitle = getSingleTitle(query, singles);
    const replyText = singleTitle !== "" ? singleTitle : "Sorry, didn't match.";

    return {
      type: "text",
      text: replyText,
    };
  } else {
    return {
      type: "text",
      text: "Please type in an integer between 1 to 22.",
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
