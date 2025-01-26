export function Fret({ note, style, className }: { note?: string, style: any, className: string }) {
  return (
    <div style={{ ...style }} className="fret">
      {note ? <span className={`fret-text ${className}`} >{note}</span> : null
      }
    </div >)
}

