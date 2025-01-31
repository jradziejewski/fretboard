export type Fretboard = Array<Array<Note>>;

export type Tuning = Array<Note>;

export const noteStrings = [
  "A",
  "A#",
  "B",
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
];

export type Note = (typeof noteStrings)[number];

export enum NoteEnum {
  "A" = 0,
  "A#" = 1,
  "B" = 2,
  "C" = 3,
  "C#" = 4,
  "D" = 5,
  "D#" = 6,
  "E" = 7,
  "F" = 8,
  "F#" = 9,
  "G" = 10,
  "G#" = 11,
}

export type Scale = Array<Note>;

export type ScaleIntervals = Array<number>;

export type DiatonicScale =
  | "major"
  | "minor"
  | "harmonic minor"
  | "melodic minor"
  | "dorian"
  | "phrygian"
  | "lydian"
  | "mixolydian"
  | "locrian"
  | "double harmonic"
  | "neapolitan minor"
  | "neapolitan major"
  | "byzantine"
  | "persian"
  | "hungarian minor"
  | "flamenco";

export type PentatonicScale =
  | "major pentatonic"
  | "minor pentatonic"
  | "hirajoshi"
  | "yo scale"
  | "pelog"
  | "kumoi"
  | "egyptian";

export type ScaleName = DiatonicScale | PentatonicScale | "chromatic";
