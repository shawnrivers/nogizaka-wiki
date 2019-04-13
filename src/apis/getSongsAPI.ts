import { SongResponse } from "./types/SongsResponseTypes";
import * as request from "request";

const convertSongResponse = (songResponse: SongResponse) => {};

export const fetchSongs = async () => {
  let songsResponse: SongResponse[] = [];

  request(
    {
      url: "https://raw.githubusercontent.com/shawnrivers/nogizaka-data/master/src/json/songs.json",
      json: true,
    },
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        songsResponse = body;
      }
    },
  );

  return songsResponse;
};
