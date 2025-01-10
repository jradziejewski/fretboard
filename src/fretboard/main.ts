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

  return fretboard;
}

function generateChromaticScale(note: Note) {
  const noteEnum = noteStrings.indexOf(note) as NoteEnum;
  return Array.from({ length: 12 }, (_, i) => noteStrings[(noteEnum + i) % 12]);
}

main();
