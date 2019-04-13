import { ISingle } from "../../../models/ISingle";
import { getHero } from "./templates/hero";
import { getHeading } from "./templates/heading";
import { separator } from "./templates/separator";
import { getSongList } from "./templates/songList";
import { SIZE } from "../../../utils/styles";

export const getSingleFlexMessage = (single: ISingle) => {
  const { artworks, number, title, release, songs } = single;
  const artworkUrl = artworks[0].urls.medium;

  // prettier-ignore
  return {
    "type": "bubble",
    "styles": {
      "footer": {
        "separator": true
      }
    },
    "hero": getHero(artworkUrl),
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        getHeading(number, title, release),
        separator(SIZE.XXL),
        getSongList(songs)
      ]
    }
  };
};
