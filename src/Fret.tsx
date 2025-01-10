export function Fret({ note }: { note?: string }) {
  return (
    <div className="fret">
      {note ? <span className="fret-text">{note}</span> : null}
    </div>)
}

