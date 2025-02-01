import { useEffect, useState } from "react";
import { Fret } from "./Fret.tsx"
import { generateFretboard, standardTuning } from "./fretboard/main.ts";
import { Note, ScaleName } from "./fretboard/types.ts";
import { FretboardOptions } from "./scale-explorer"
import "./Fretboard.css";

export function Fretboard() {
  const [rootNote, setRootNote] = useState<Note>("C");
  const [activeScale, setActiveScale] = useState<ScaleName>("chromatic")
  const [maxFrets, setMaxFrets] = useState<number>(23)
  const [strings, setStrings] = useState(generateFretboard(standardTuning, rootNote, "chromatic", maxFrets))
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const updateMaxFrets = () => {
    setIsMobile(false);
    const width = window.innerWidth;
    if (width < 500) {
      setIsMobile(true);
    }
    else if (width < 700) {
      setMaxFrets(8);
    } else if (width < 750) {
      setMaxFrets(13);
    } else if (width < 900) {
      setMaxFrets(16);
    } else if (width < 1150) {
      setMaxFrets(19)
    } else {
      setMaxFrets(23)
    }
  }

  useEffect(() => {
    updateMaxFrets();
    window.addEventListener("resize", updateMaxFrets)

    return () => window.removeEventListener("resize", updateMaxFrets);
  }, [])

  useEffect(() => {
    setStrings(generateFretboard(standardTuning, rootNote, activeScale, maxFrets));
  }, [rootNote, activeScale, maxFrets])

  const handleNoteChange = (event: any) => {
    setRootNote(event.target.value);
    setStrings(generateFretboard(standardTuning, event.target.value, activeScale))
  }

  const handleStringsChange = (event: any) => {
    setActiveScale(event.target.value)
    setStrings(generateFretboard(standardTuning, rootNote, event.target.value))
  }

  const getFretMarkerPosition = (fret: number) => {
    const totalFrets = strings[0].length;
    return `${(fret / totalFrets) * 100}%`
  }

  return (
    <div>
      {isMobile ? <div><h1>Mobile view not supported</h1><p>Please rotate your device or use a device with larger screen</p></div> :
        <div>
          <h1>Scale Explorer</h1>
          <h2 style={{ margin: "50px 0" }}>{rootNote} {activeScale}</h2>
          <div className="fretboard">
            <div className="fretboard-indexes">
              {strings[0].map((_, noteIdx) => (
                <div
                  style={{ marginLeft: 20, position: "absolute", top: -30, left: getFretMarkerPosition(noteIdx) }}
                >{noteIdx}</div>
              ))}
            </div>
            {strings.map((string, strIdx) => (
              <div style={{ display: "flex" }} key={strIdx}>
                {string.map((note, noteIdx) => (
                  <Fret
                    style={{ borderLeft: noteIdx === 0 ? "none" : "1px solid white" }}
                    className={rootNote === note ? "rootnote" : ""}
                    fretIndex={noteIdx}
                    key={noteIdx}
                    note={note} />
                ))}
              </div>
            ))
            }
            {/* Fret markers (dots) */}
            <div className="fret-markers">
              {[3, 5, 7, 9, 15, 17, 19, 21].map((fret) => (
                fret <= strings[0].length - 1 ?
                  <div
                    key={fret}
                    className="fret-marker"
                    style={{ left: getFretMarkerPosition(fret) }} // Position based on fret number
                  ></div> : ""
              ))}
              {
                strings[0].length >= 13 ?
                  <div className="fret-marker-double"
                    style={{ left: getFretMarkerPosition(12) }}></div> : ""
              }
            </div>
          </div >
          <FretboardOptions rootNote={rootNote} activeScale={activeScale} handleNoteChange={handleNoteChange} handleStringsChange={handleStringsChange} />
        </div>
      }
    </div >
  )
}
