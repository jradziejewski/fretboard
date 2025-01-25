import { ScaleIntervals, ScaleName } from "./types";

export const scalesIntervals: Record<ScaleName, ScaleIntervals> = {
  chromatic: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  major: [2, 2, 1, 2, 2, 2, 1],
  minor: [2, 1, 2, 2, 1, 2, 2],
  "harmonic minor": [2, 1, 2, 2, 1, 3, 1],
  "melodic minor": [2, 1, 2, 2, 2, 2, 1],
  dorian: [2, 1, 2, 2, 2, 1, 2],
  lydian: [2, 2, 2, 1, 2, 2, 1],
  locrian: [1, 2, 2, 1, 2, 2, 2],
  phrygian: [1, 2, 2, 2, 1, 2, 2],
  mixolydian: [2, 2, 1, 2, 2, 1, 2],
};
