import * as express from "express";
import * as line from "@line/bot-sdk";
import { LINE_CONFIG } from "./apis/lineAPI";
import { fetchSingles } from "./apis/getSinglesAPI";
import { ISingle } from "./models/ISingle";
import { replyWithSingleFlexMessage } from "./features/reply/singles";

export const lineClient = new line.Client(LINE_CONFIG);

let singles: ISingle[] = [];

const server = express();

server.post("/webhook", line.middleware(LINE_CONFIG), async (request, response) => {
  response.sendStatus(200);

  if (singles.length === 0) {
    console.log("Fetching singles data...");
    singles = await fetchSingles();
  }

  for (const event of request.body.events) {
    const userInputText = event.message.text;

    console.log("Received user input:", userInputText);

    const message = replyWithSingleFlexMessage(userInputText, singles);

    lineClient.replyMessage(event.replyToken, message);
  }
});

server.listen(process.env.PORT || 8080);
