import {
  Note,
  Tuning,
  NoteEnum,
  noteStrings,
  Scale,
  ScaleName,
} from "./types.ts";
import { findScaleIntervals } from "./utils.ts";

const SCALE_LENGTH = 12;

export const standardTuning: Tuning = ["E", "A", "D", "G", "B", "E"];

export function generateFretboard(
  tuning: Tuning,
  rootNote: Note,
  scale?: ScaleName,
) {
  /*
   Function that generates fretboard with given scale. First, it populates 2d array with chromatic scales.
   Then filters the chromatic scale based on what scale was asked for.
      Input:
        - tuning: tuning in which the fretboard should be generated
        - rootNote: root note for the scale
        - scale: scale that should be generated
      Ouptput:
        - Array of arrays of <Note>s.
          * Length of arrays of <Note>s depends on SCALE_LENGTH global variable.
          * Length of main array depends on the tuning you use. (Mainly 6 for 6-string guitar)
   */
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

function generateChromaticScale(note: Note): Scale {
  /*
   Helper function for (generateFretboard). Generates chromatic scale.
      Input:
        - <Note> - root note from wich chromatic scale should be generated.
      Output:
        - <Scale> - an array of <Note>s representing chromatic scale.
   */
  const noteEnum = noteStrings.indexOf(note) as NoteEnum;
  return Array.from(
    { length: SCALE_LENGTH },
    (_, i) => noteStrings[(noteEnum + i) % SCALE_LENGTH],
  );
}

function getScale(
  rootNote: string,
  chromaticScale: Scale,
  scaleName: ScaleName,
): Scale {
  /*
   Helper function for (generateFretboard). Filters chromatic scale to generate given scale.
      Input:
        - root<Note> - root note from wich chromatic scale should be generated.
        - chromatic<Scale> - chromatic scale to be filtered
        - <ScaleName> - the name of scale that should be generated
      Output:
        - <Scale> - an array of <Note>s representing given scale.
   */
  const scaleIntervals = findScaleIntervals(scaleName);
  if (!scaleIntervals || scaleName == "chromatic") {
    return chromaticScale;
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
