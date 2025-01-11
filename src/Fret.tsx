export function Fret({ note, style }: { note?: string, style: any }) {
  return (
    <div style={{ ...style }} className="fret">
      {note ? <span className="fret-text" >{note}</span> : null
      }
    </div >)
}

