// prettier-ignore
export const getHeading = (number: string, title: string, release: string) => ({
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${number}. Single`,
      "weight": "bold",
      "color": "#FF705C",
      "size": "sm"
    },
    {
      "type": "text",
      "text": title,
      "weight": "bold",
      "size": "xxl",
      "margin": "md",
      "wrap": true
    },
    {
      "type": "box",
      "layout": "baseline",
      "spacing": "sm",
      "margin": "md",
      "contents": [
        {
          "type": "text",
          "text": "Release",
          "color": "#aaaaaa",
          "size": "sm",
          "flex": 1
        },
        {
          "type": "text",
          "text": release,
          "wrap": true,
          "size": "sm",
          "color": "#666666",
          "flex": 3
        }
      ]
    }
  ]
});
