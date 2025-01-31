import { ScaleIntervals, ScaleName } from "./types";

export const scalesIntervals: Record<
  "common" | "rare" | "exotic",
  {
    diatonic: Partial<Record<ScaleName, ScaleIntervals>>;
    pentatonic: Partial<Record<ScaleName, ScaleIntervals>>;
  }
> = {
  common: {
    diatonic: {
      major: [2, 2, 1, 2, 2, 2, 1],
      minor: [2, 1, 2, 2, 1, 2, 2],
      "harmonic minor": [2, 1, 2, 2, 1, 3, 1],
      "melodic minor": [2, 1, 2, 2, 2, 2, 1],
      dorian: [2, 1, 2, 2, 2, 1, 2],
      lydian: [2, 2, 2, 1, 2, 2, 1],
      locrian: [1, 2, 2, 1, 2, 2, 2],
      phrygian: [1, 2, 2, 2, 1, 2, 2],
      mixolydian: [2, 2, 1, 2, 2, 1, 2],
    },
    pentatonic: {
      "major pentatonic": [2, 2, 3, 2, 3],
      "minor pentatonic": [3, 2, 2, 3, 2],
    },
  },
  rare: {
    diatonic: {
      "double harmonic": [1, 3, 1, 2, 1, 3, 1],
      "neapolitan minor": [1, 2, 2, 2, 1, 3, 1],
      "neapolitan major": [1, 2, 2, 2, 2, 2, 1],
    },
    pentatonic: {
      hirajoshi: [2, 1, 4, 1, 4],
      "yo scale": [2, 3, 2, 2, 3],
    },
  },
  exotic: {
    diatonic: {
      byzantine: [1, 3, 1, 2, 1, 3, 1], // Same as double harmonic
      persian: [1, 3, 1, 1, 2, 3, 1],
      "hungarian minor": [2, 1, 3, 1, 1, 3, 1],
      flamenco: [1, 3, 1, 2, 1, 2, 2],
    },
    pentatonic: {
      pelog: [1, 2, 4, 1, 4], // Balinese scale
      kumoi: [2, 1, 4, 2, 2], // Japanese scale
      egyptian: [2, 3, 2, 3, 2],
    },
  },
};
