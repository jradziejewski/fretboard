import { useState } from "react";
import { Fret } from "./Fret.tsx"
import { generateFretboard, standardTuning } from "./fretboard/main.ts";
import { noteStrings, ScaleName } from "./fretboard/types.ts";

export function Fretboard() {
  const [rootNote, setRootNote] = useState("C");
  const [strings, setStrings] = useState(generateFretboard(standardTuning, rootNote))

  const handleNoteChange = (event: any) => {
    setRootNote(event.target.value);
  }

  const handleStringsChange = (event: any) => {
    setStrings(generateFretboard(standardTuning, rootNote, event.target.value))
  }

  return (
    <div className="fretboard">
      {strings.map((string, strIdx) => (
        <div style={{ display: "flex", justifyContent: "space-evenly" }} key={strIdx}>
          {string.map((note, noteIdx) => (
            <Fret style={{ borderLeft: noteIdx === 0 ? "none" : "1px solid white" }} key={noteIdx} note={note} />
          ))}
        </div>
      ))
      }
      <div>
        <select value={rootNote} onChange={handleNoteChange} >
          {noteStrings.map((note) => <option key={note} value={note}>{note}</option>)}
        </select>
        <button onClick={handleStringsChange} value="minor">Minor</button>
        <button onClick={handleStringsChange} value="major">Major</button>
        <button onClick={handleStringsChange} value="harmonic minor">Harmonic Minor</button>
        <button onClick={handleStringsChange} value="melodic minor">Melodic Minor</button>
        <button onClick={handleStringsChange}>Chromatic</button>
      </div>
    </div >
  )
}
