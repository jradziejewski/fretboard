import { Note, Tuning, NoteEnum, noteStrings } from "./types.ts";

export const standardTuning: Tuning = ["E", "A", "D", "G", "B", "E"];

function main() {
  const fretboard = generateFretboard(standardTuning);

  for (const frets of fretboard) {
    console.log(frets.join(" "));
  }
}

export function generateFretboard(tuning: Tuning) {
  const fretboard: Array<Array<Note>> = [];
  tuning.reverse();
  for (const note of tuning) {
    fretboard.push(generateChromaticScale(note));
  }

  for (const idx in fretboard) {
    fretboard[idx] = getMinorScale("B", fretboard[idx]);
  }

  return fretboard;
}

function generateChromaticScale(note: Note): Array<Note> {
  const noteEnum = noteStrings.indexOf(note) as NoteEnum;
  return Array.from({ length: 12 }, (_, i) => noteStrings[(noteEnum + i) % 12]);
}

function getMajorScale(rootNote: string, chromaticScale: Array<Note>) {
  const majorScaleIntervals = [2, 2, 1, 2, 2, 2, 1];
  const rootIdx = noteStrings.indexOf(rootNote);

  const majorScale: Array<Note> = [];
  let currentIdx = rootIdx;

  for (const interval of majorScaleIntervals) {
    majorScale.push(noteStrings[currentIdx % 12]);
    currentIdx += interval;
  }

  return chromaticScale.map((note) => (majorScale.includes(note) ? note : ""));
}

function getMinorScale(rootNote: string, chromaticScale: Array<Note>) {
  const majorScaleIntervals = [2, 1, 2, 2, 1, 2, 2];
  const rootIdx = noteStrings.indexOf(rootNote);

  const majorScale: Array<Note> = [];
  let currentIdx = rootIdx;

  for (const interval of majorScaleIntervals) {
    majorScale.push(noteStrings[currentIdx % 12]);
    currentIdx += interval;
  }

  return chromaticScale.map((note) => (majorScale.includes(note) ? note : ""));
}

main();
