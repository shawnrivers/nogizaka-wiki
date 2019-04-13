import { COLOR, SIZE } from '../../../../utils/styles';
import { FocusPerformers } from '../../../../apis/types/SinglesResponseTypes';
import { FocusPerformersType } from '../../../../utils/constants';
import { ICdSong } from '../../../../models/ICd';

const getSongItem = (number: number, title: string, type: string, focusPerformers: FocusPerformers) => {
  // prettier-ignore
  let titleBlock: any[] = [{
    "type": "text",
    "text": title,
    "wrap": true,
    "size": SIZE.SM,
    "color": COLOR.Gray00,
    "flex": 9
  }];

  if (type !== '' && focusPerformers.name.length !== 0) {
    let focusPerformersText = focusPerformers.name.reduce((acc, curr) => acc + ' ' + curr);

    focusPerformersText = type === FocusPerformersType.Center ? 'C: ' + focusPerformersText : focusPerformersText;

    // prettier-ignore
    titleBlock.push({
      "type": "box",
      "layout": "baseline",
      "spacing": SIZE.SM,
      "contents": [
        {
          "type": "text",
          "text": type,
          "wrap": true,
          "size": SIZE.SM,
          "color": COLOR.Gray01,
          "flex": 1
        },
        {
          "type": "text",
          "text": focusPerformersText,
          "wrap": true,
          "size": SIZE.SM,
          "color": COLOR.Gray01,
          "flex": 1
        }
      ]
    });
  }

  // prettier-ignore
  return {
    "type": "box",
    "layout": "baseline",
    "margin": SIZE.XL,
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
        "contents": [
          titleBlock
        ]
      }
    ]
  };
};

export const getSongList = (songs: ICdSong[]) => {
  const songListContents = songs.map(song => {
    const { number, title, type, focusPerformers } = song;

    return getSongItem(number, title, type, focusPerformers);
  });

  // prettier-ignore
  return {
    "type": "box",
    "layout": "vertical",
    "contents": songListContents
  };
};
