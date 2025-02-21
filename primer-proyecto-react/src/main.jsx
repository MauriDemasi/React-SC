import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PrimerComponente } from './components/primerComponente.jsx'
import './styles.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimerComponente/>
  </StrictMode>,
)
