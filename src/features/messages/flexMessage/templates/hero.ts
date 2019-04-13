// prettier-ignore
export const getHero = (artworkUrl: string) => {
  return {
    "type": "image",
    "url": artworkUrl,
    "size": "full",
    "aspectRatio": "1:1",
    "aspectMode": "cover",
    "action": {
      "type": "uri",
      "uri": "http://www.nogizaka46.com/discography/category/?single"
    }
  };
}
