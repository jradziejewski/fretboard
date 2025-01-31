import { scalesIntervals } from "./scales.ts";
import {
  Note,
  Tuning,
  NoteEnum,
  noteStrings,
  Scale,
  ScaleName,
} from "./types.ts";
import { findScaleIntervals } from "./utils.ts";

export const standardTuning: Tuning = ["E", "A", "D", "G", "B", "E"];

export function generateFretboard(
  tuning: Tuning,
  rootNote: Note,
  scale?: ScaleName,
) {
  const reversedTuning = tuning.slice().reverse();
  const fretboard: Array<Array<Note>> = [];
  for (const note of reversedTuning) {
    fretboard.push(generateChromaticScale(note));
  }

  for (const idx in fretboard) {
    if (scale) {
      fretboard[idx] = getScale(rootNote, fretboard[idx], scale);
    }
  }

  return fretboard;
}

function generateChromaticScale(note: Note): Array<Note> {
  const noteEnum = noteStrings.indexOf(note) as NoteEnum;
  return Array.from({ length: 12 }, (_, i) => noteStrings[(noteEnum + i) % 12]);
}

export function getScale(
  rootNote: string,
  chromaticScale: Scale,
  scaleName: ScaleName,
) {
  const scaleIntervals = findScaleIntervals(scaleName);
  if (!scaleIntervals) {
    return chromaticScale.map((note) => (scale.includes(note) ? note : ""));
  }

  const rootIdx = noteStrings.indexOf(rootNote);

  const scale: Array<Note> = [];
  let currentIdx = rootIdx;

  for (const interval of scaleIntervals) {
    scale.push(noteStrings[currentIdx % 12]);
    currentIdx += interval;
  }

  return chromaticScale.map((note) => (scale.includes(note) ? note : ""));
}
