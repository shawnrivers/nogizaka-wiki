import { ICd } from "./ICd";

export type ISingle = ICd & {
  behindPerformers: {
    trainees: string[];
    skips: string[];
  };
};
