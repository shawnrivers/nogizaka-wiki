import { CdType, FocusPerformersType, APIResponseSongType } from "../../utils/constants";

type CdArtwork = {
  type: CdType;
  urls: {
    large: string;
    medium: string;
    small: string;
  };
};

type FocusPerformers = {
  type: FocusPerformersType;
  name: string[];
};

type Site = {
  title: string;
  url: string;
};

type CdSong = {
  number: number;
  title: string;
  inCdType: CdType[];
  type: APIResponseSongType;
  artwork: string;
  focusPerformers: FocusPerformers;
};

type CdResponse = {
  title: string;
  number: string;
  release: string;
  artworks: CdArtwork[];
  shopping: Site[];
  songs: CdSong[];
};

type SingleBehindPerformers = {
  trainees: string[];
  skips: string[];
};

export type SingleResponse = CdResponse & {
  behindPerformers: SingleBehindPerformers;
};
