import { COLOR, SIZE } from "../../../../utils/styles";
import { toOrdinalNumber } from "../../../../utils/string";

// prettier-ignore
export const getHeading = (number: string, title: string, release: string) => ({
  "type": "box",
  "layout": "vertical",
  "margin": SIZE.XXL,
  "contents": [
    {
      "type": "text",
      "text": `${toOrdinalNumber(Number(number))}. Single`,
      "weight": "bold",
      "color": COLOR.Gray01,
      "size": SIZE.MD
    },
    {
      "type": "text",
      "text": title,
      "weight": "bold",
      "size": SIZE.XXL,
      "margin": SIZE.MD,
      "color": COLOR.Gray00,
      "wrap": true
    },
    {
      "type": "box",
      "layout": "baseline",
      "spacing": SIZE.SM,
      "margin": SIZE.MD,
      "contents": [
        {
          "type": "text",
          "text": "Release",
          "color": COLOR.Gray01,
          "size": SIZE.SM,
          "flex": 1
        },
        {
          "type": "text",
          "text": release,
          "wrap": true,
          "size": SIZE.SM,
          "color": COLOR.Gray00,
          "flex": 3
        }
      ]
    }
  ]
});
