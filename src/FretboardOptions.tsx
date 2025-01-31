import { Note, noteStrings, ScaleName } from "./fretboard/types.ts";
import { scalesIntervals } from "./fretboard/scales.ts";

interface FretboardOptionsProps {
  rootNote: Note;
  activeScale: ScaleName;
  handleStringsChange: (event: any) => void;
  handleNoteChange: (event: any) => void;
}

export function FretboardOptions(props: FretboardOptionsProps) {
  const { rootNote, activeScale, handleStringsChange, handleNoteChange } = props

  return (
    <div>
      <div className="fretboard-options">
        <div className="notes-buttons">
          {noteStrings.map((note) => <button onClick={handleNoteChange} className={note === rootNote ? "active-button" : ""} key={note} value={note}>{note}</button>)}
        </div>
        <div className="scales-buttons">
          Common Diatonic
          {Object.keys(scalesIntervals.common.diatonic).map((scale, idx) => (
            <button onClick={handleStringsChange} key={idx} value={scale} className={scale === activeScale ? "active-button" : ""}>
              {scale.replace(/\b\w/g, (char) => char.toUpperCase())}
            </button>
          ))}
        </div>
        <div className="scales-buttons">
          Common Pentatonic
          {Object.keys(scalesIntervals.common.pentatonic).map((scale, idx) => (
            <button onClick={handleStringsChange} key={idx} value={scale} className={scale === activeScale ? "active-button" : ""}>
              {scale.replace(/\b\w/g, (char) => char.toUpperCase())}
            </button>
          ))}
        </div>
      </div>
    </div >
  )
}
