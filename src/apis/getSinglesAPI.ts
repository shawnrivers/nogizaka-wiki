import { SingleResponse } from './types/SinglesResponseTypes';
import { ISingle } from '../models/ISingle';
import * as request from 'request';

const convertSingleResponse = (singleResponse: SingleResponse): ISingle => {
  const { number, title, release, artworks, shopping, songs, behindPerformers } = singleResponse;

  return {
    number,
    title,
    release,
    artworks,
    shopping,
    songs,
    behindPerformers,
  };
};

export const fetchSingles = async (): Promise<ISingle[]> => {
  let singlesResponse: SingleResponse[] = [];
  let convertedSingles: ISingle[] = [];

  await request(
    {
      url: 'https://raw.githubusercontent.com/shawnrivers/nogizaka-data/master/src/json/singles.json',
      json: true,
    },
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        singlesResponse = body;

        convertedSingles = singlesResponse.map(singleResponse => convertSingleResponse(singleResponse));
      }
    },
  );

  return convertedSingles;
};
