import { SingleResponse, CdSong } from "./types/SinglesResponseTypes";
import { ISingle } from "../models/ISingle";
import * as request from "request-promise";
import { APIResponseSongType, SongType } from "../utils/constants";
import { ICdSong } from "../models/ICd";

const convertSongType = (songType: APIResponseSongType): SongType => {
  switch (songType) {
    case APIResponseSongType.None:
      return SongType.None;
    case APIResponseSongType.Title:
      return SongType.Title;
    case APIResponseSongType.Coupling:
      return SongType.Coupling;
    case APIResponseSongType.Under:
      return SongType.Under;
    case APIResponseSongType.Unit:
      return SongType.Unit;
    case APIResponseSongType.Solo:
      return SongType.Solo;
    case APIResponseSongType.FirstGeneration:
      return SongType.FirstGeneration;
    case APIResponseSongType.SecondGeneration:
      return SongType.SecondGeneration;
    case APIResponseSongType.ThirdGeneration:
      return SongType.ThirdGeneration;
    case APIResponseSongType.FourthGeneration:
      return SongType.FourthGeneration;
  }
};

const convertSongs = (songs: CdSong[]): ICdSong[] => {
  let convertedSongs: ICdSong[] = [];
  for (const song of songs) {
    convertedSongs.push({
      ...song,
      type: convertSongType(song.type),
    });
  }

  return convertedSongs;
};

const convertSingleResponse = (singleResponse: SingleResponse): ISingle => {
  const { number, title, release, artworks, shopping, songs, behindPerformers } = singleResponse;

  return {
    number,
    title,
    release,
    artworks,
    shopping,
    songs: convertSongs(songs),
    behindPerformers,
  };
};

export const fetchSingles = async (): Promise<ISingle[]> => {
  let singlesResponse: SingleResponse[] = [];
  let convertedSingles: ISingle[] = [];

  try {
    singlesResponse = await request({
      url: "https://raw.githubusercontent.com/shawnrivers/nogizaka-data/master/src/json/singles.json",
      json: true,
    });

    convertedSingles = singlesResponse.map(singlesResponse => convertSingleResponse(singlesResponse));
  } catch (error) {
    console.log("Error:", error);
  }

  return convertedSingles;
};
