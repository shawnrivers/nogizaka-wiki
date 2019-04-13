import { COLOR, SIZE } from "../../../../utils/styles";
import { FocusPerformers } from "../../../../apis/types/SinglesResponseTypes";
import { FocusPerformersType } from "../../../../utils/constants";
import { ICdSong } from "../../../../models/ICd";
import { separator } from "./separator";

const getSongItem = (number: number, title: string, type: string, focusPerformers: FocusPerformers) => {
  // prettier-ignore
  let titleBlock: any[] = [{
    "type": "text",
    "text": title,
    "weight": "bold",
    "wrap": true,
    "size": SIZE.SM,
    "color": COLOR.Gray00
  }];

  if (type !== "" && focusPerformers !== null) {
    if (focusPerformers.name.length !== 0) {
      let focusPerformersText = focusPerformers.name.reduce((acc, curr) => acc + ", " + curr);

      focusPerformersText =
        focusPerformers.type === FocusPerformersType.Center ? "C: " + focusPerformersText : focusPerformersText;

      // prettier-ignore
      titleBlock.push({
        "type": "box",
        "layout": "baseline",
        "spacing": SIZE.SM,
        "contents": [
          {
            "type": "text",
            "text": type,
            "size": SIZE.SM,
            "color": COLOR.Gray01,
            "flex": 2
          },
          {
            "type": "text",
            "text": focusPerformersText,
            "size": SIZE.SM,
            "color": COLOR.Gray01,
            "flex": 5
          }
        ]
      });
    }
  }

  // prettier-ignore
  return {
    "type": "box",
    "layout": "horizontal",
    "margin": SIZE.MD,
    "spacing": SIZE.SM,
    "contents": [
      {
        "type": "text",
        "text": String(number),
        "color": COLOR.Gray01,
        "size": SIZE.SM,
        "flex": 1
      },
      {
        "type": "box",
        "layout": "vertical",
        "margin": SIZE.SM,
        "spacing": SIZE.SM,
        "flex": 9,
        "contents": titleBlock
      }
    ]
  };
};

export const getSongList = (songs: ICdSong[]) => {
  const songListContents: any[] = songs.map(song => {
    const { number, title, type, focusPerformers } = song;

    return getSongItem(number, title, type, focusPerformers);
  });

  for (let i = 0; i < songs.length - 1; i++) {
    songListContents.splice(2 * i + 1, 0, separator(SIZE.MD));
  }

  // prettier-ignore
  return {
    "type": "box",
    "layout": "vertical",
    "margin": SIZE.XXL,
    "contents": songListContents
  };
};
