import { COLOR, SIZE } from '../../../../utils/styles';

// prettier-ignore
export const getHeading = (number: string, title: string, release: string) => ({
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${number}. Single`,
      "weight": "bold",
      "color": COLOR.Gray01,
      "size": SIZE.SM
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
