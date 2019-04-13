import { SingleResponse } from './types/SinglesResponseTypes';
import { ISingle } from '../models/ISingle';
import * as request from 'request-promise';

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

  try {
    singlesResponse = await request({
      url: 'https://raw.githubusercontent.com/shawnrivers/nogizaka-data/master/src/json/singles.json',
      json: true,
    });

    convertedSingles = singlesResponse.map(singlesResponse => convertSingleResponse(singlesResponse));
  } catch (error) {
    console.log('Error:', error);
  }

  return convertedSingles;
};
