import { FukujinType, APIResponseSongType } from '../../utils/constants';

type SongCreators = {
  lyrics: string[];
  compose: string[];
  arrange: string[];
  direct: string[];
};

export type SongPerformers = {
  center: string[];
  fukujin: FukujinType | string[];
  solo: string;
  unit: string;
};

export type SongFormations = {
  firstRow: string[];
  secondRow: string[];
  thirdRow: string[];
  fourthRow: string[];
};

export type SongResponse = {
  title: string;
  single: string;
  artwork: string;
  musicVideo: string;
  albums: string[];
  type: APIResponseSongType;
  creators: SongCreators;
  performers: SongPerformers;
  formations: SongFormations;
};
