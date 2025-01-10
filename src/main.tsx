import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Fretboard } from './Fretboard'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Fretboard />
  </StrictMode>,
)
