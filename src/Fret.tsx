import "./Fret.css"

export function Fret({ note, style, className, fretIndex }: { note?: string, style: any, className: string, fretIndex: number }) {
  return (
    <div style={{ ...style }} className="fret" data-fret={fretIndex}>
      {note ? <span className={`fret-text ${className}`} >{note}</span> : null
      }
    </div >)
}

