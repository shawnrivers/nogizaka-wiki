import { CdType, FocusPerformersType, APIResponseSongType } from "../../utils/constants";

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
  artwork: {
    large: string;
    medium: string;
    small: string;
  };
  focusPerformers: FocusPerformers;
};

type CdResponse = {
  title: string;
  number: string;
  release: string;
  artworks: {
    [type: string]: {
      large: string;
      medium: string;
      small: string;
    };
  };
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
