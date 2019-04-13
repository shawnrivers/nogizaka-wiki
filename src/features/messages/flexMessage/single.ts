import { ISingle } from '../../../models/ISingle';
import { getHero } from './templates/hero';

export const getSingleFlexMessage = (single: ISingle) => {
  // prettier-ignore
  return {
    "type": "bubble",
    "styles": {
      "footer": {
        "separator": true
      }
    },
    "hero": getHero()
  };
};
