import { useState } from "react";
import { Fret } from "./Fret.tsx"
import { generateFretboard, standardTuning } from "./fretboard/main.ts";
import { Note, noteStrings, ScaleName } from "./fretboard/types.ts";
import { scalesIntervals } from "./fretboard/scales.ts";

export function Fretboard() {
  const [rootNote, setRootNote] = useState<Note>("C");
  const [activeScale, setActiveScale] = useState<ScaleName>("chromatic")
  const [strings, setStrings] = useState(generateFretboard(standardTuning, rootNote))

  const handleNoteChange = (event: any) => {
    setRootNote(event.target.value);
    setStrings(generateFretboard(standardTuning, event.target.value, activeScale))
  }

  const handleStringsChange = (event: any) => {
    setActiveScale(event.target.value)
    setStrings(generateFretboard(standardTuning, rootNote, event.target.value))
  }

  return (
    <div>
      <h1>{rootNote} {activeScale}</h1>
      <div className="fretboard">
        {strings.map((string, strIdx) => (
          <div style={{ display: "flex" }} key={strIdx}>
            {string.map((note, noteIdx) => (
              <Fret
                style={{ borderLeft: noteIdx === 0 ? "none" : "1px solid white" }}
                className={rootNote === note ? "rootnote" : ""}
                key={noteIdx}
                note={note} />
            ))}
          </div>
        ))
        }
        <div className="fretboard-options">
          <div className="notes-buttons">
            {noteStrings.map((note) => <button onClick={handleNoteChange} className={note === rootNote ? "active-button" : ""} key={note} value={note}>{note}</button>)}
          </div>
          <div className="scales-buttons">
            {Object.keys(scalesIntervals).map((scale, idx) => (
              <button onClick={handleStringsChange} key={idx} value={scale} className={scale === activeScale ? "active-button" : ""}>
                {scale.replace(/\b\w/g, (char) => char.toUpperCase())}
              </button>
            ))}
          </div>
        </div>
      </div >
    </div >
  )
}
