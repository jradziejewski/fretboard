import { useState } from "react";
import { Fret } from "./Fret.tsx"
import { generateFretboard, standardTuning } from "./fretboard/main.ts";
import { Note, ScaleName } from "./fretboard/types.ts";
import { FretboardOptions } from "./FretboardOptions.tsx";

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
      <div className="fretboard-indexes">
        {strings[0].map((_, noteIdx) => (
          <span>{noteIdx}</span>
        ))}
      </div>
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
        <FretboardOptions rootNote={rootNote} activeScale={activeScale} handleNoteChange={handleNoteChange} handleStringsChange={handleStringsChange} />
      </div >
    </div >
  )
}
