import { ISingle } from "../../models/ISingle";

export const getSingleByNumber = (singleNumber: string, singles: ISingle[]): ISingle | undefined => {
  for (const single of singles) {
    if (singleNumber === single.number) {
      return single;
    }
  }
};

export const getSingleByTitle = (singleTitle: string, singles: ISingle[]): ISingle | undefined => {
  for (const single of singles) {
    if (single.title.includes(singleTitle)) {
      return single;
    }
  }
};

export const getSingleTitle = (singleNumber: string, singles: ISingle[]): string => {
  for (const single of singles) {
    if (singleNumber === single.number) {
      return single.title;
    }
  }
  return "";
};
