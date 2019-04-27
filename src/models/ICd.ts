import { ISite } from "./ISite";
import { CdType, SongType, FocusPerformersType } from "../utils/constants";

export type ICdArtworks = {
  type: CdType;
  urls: {
    large: string;
    medium: string;
    small: string;
  };
};

export type ICdSong = {
  number: number;
  title: string;
  inCdType: CdType[];
  type: SongType;
  artwork: {
    large: string;
    medium: string;
    small: string;
  };
  focusPerformers: IFocusPerformers;
};

type IFocusPerformers = {
  type: FocusPerformersType;
  name: string[];
};

export type ICd = {
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
  shopping: ISite[];
  songs: ICdSong[];
};
