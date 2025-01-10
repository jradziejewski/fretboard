import { Fret } from "./Fret.tsx"
import { generateFretboard, standardTuning } from "./fretboard/main.ts";

export function Fretboard() {
  const strings = generateFretboard(standardTuning);
  return (
    <div className="fretboard">
      {strings.map((string, strIdx) => (
        <div style={{ display: "flex", justifyContent: "space-evenly" }} key={strIdx}>
          {string.map((note, noteIdx) => (
            <Fret key={noteIdx} note={note} />
          ))}
        </div>
      ))
      }
    </div >
  )
}
