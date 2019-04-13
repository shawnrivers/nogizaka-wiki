import { ISingle } from '../../models/ISingle';

export const getSingleTitle = (singleNumber: string, singles: ISingle[]): string => {
  for (const single of singles) {
    if (singleNumber === single.number) {
      return single.title;
    }
  }
  return '';
};
