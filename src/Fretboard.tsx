import { useState } from "react";
import { Fret } from "./Fret.tsx"
import { generateFretboard, standardTuning } from "./fretboard/main.ts";
import { noteStrings } from "./fretboard/types.ts";

export function Fretboard() {
  const [rootNote, setRootNote] = useState("C");
  const [strings, setStrings] = useState(generateFretboard(standardTuning, rootNote))

  const handleNoteChange = (event: any) => {
    setRootNote(event.target.value);
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
        <button onClick={() => setStrings(generateFretboard(standardTuning, rootNote, "minor"))}>Minor</button>
        <button onClick={() => setStrings(generateFretboard(standardTuning, rootNote, "major"))}>Major</button>
        <button onClick={() => setStrings(generateFretboard(standardTuning, rootNote))}>Chromatic</button>
      </div>
    </div >
  )
}
