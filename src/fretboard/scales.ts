import { ScaleIntervals, ScaleName } from "./types";

export const scalesIntervals: Record<ScaleName, ScaleIntervals> = {
  major: [2, 1, 2, 2, 1, 2, 2],
  minor: [2, 1, 2, 2, 1, 2, 2],
  "harmonic minor": [2, 1, 2, 2, 1, 3, 1],
  "melodic minor": [2, 1, 2, 2, 2, 2, 1],
  dorian: [],
  lydian: [],
  locrian: [],
  phrygian: [],
  mixolydian: [],
};
