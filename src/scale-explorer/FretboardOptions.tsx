import { Note, noteStrings, ScaleName, ScaleType } from "../fretboard/types.ts";
import { scalesIntervals } from "../fretboard/scales.ts";
import { useState } from "react";
import "./FretboardOptions.css";

interface FretboardOptionsProps {
  rootNote: Note;
  activeScale: ScaleName;
  handleStringsChange: (event: any) => void;
  handleNoteChange: (event: any) => void;
}

export function FretboardOptions(props: FretboardOptionsProps) {
  const { rootNote, activeScale, handleStringsChange, handleNoteChange } = props
  const [scaleType, setScaleType] = useState<ScaleType>("common")

  return (
    <div>
      <div className="fretboard-options">
        {/* 🔹 Select Root Note */}
        <h3>Select Root Note</h3>
        <div className="notes-buttons">
          {noteStrings.map((note) => <button onClick={handleNoteChange} className={note === rootNote ? "active-button" : ""} key={note} value={note}>{note}</button>)}
        </div>

        {/* 🔹 Select Scale Type (Common, Rare, Exotic) */}
        <h3>Select Scale</h3>
        <div className="scale-type-buttons">
          {["common", "rare", "exotic"].map((type) => (
            <button
              key={type}
              onClick={() => setScaleType(type as "common" | "rare" | "exotic")}
              className={scaleType === type ? "active-button" : ""}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* 🔹 Display Scales for the Selected Type */}
        {Object.entries(scalesIntervals[scaleType]).map(([subtype, scales]) => (
          <div key={subtype} className="scales-buttons">
            <h3>{`${subtype.charAt(0).toUpperCase() + subtype.slice(1)}`}</h3>
            {Object.keys(scales).map((scale) => (
              <button
                key={scale}
                onClick={handleStringsChange}
                value={scale}
                className={scale === activeScale ? "active-button" : ""}
              >
                {scale.replace(/\b\w/g, (char) => char.toUpperCase())}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div >
  )
}
