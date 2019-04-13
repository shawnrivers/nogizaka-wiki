import { ISingle } from '../../../models/ISingle';
import { getHero } from './templates/hero';
import { getHeading } from './templates/heading';
import { separator } from './templates/separator';
import { getSongList } from './templates/songList';

export const getSingleFlexMessage = (single: ISingle) => {
  const { number, title, release, songs } = single;

  // prettier-ignore
  return {
    "type": "bubble",
    "styles": {
      "footer": {
        "separator": true
      }
    },
    "hero": getHero(),
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        getHeading(number, title, release),
        separator,
        getSongList(songs)
      ]
    }
  };
};
