import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PrimerComponente } from './components/PrimerComponente.jsx'
import { ContadorComponent } from './components/ContadorComponent.jsx'
import './styles.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContadorComponent value={0} />
  </StrictMode>,
)
