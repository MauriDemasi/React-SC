import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PrimerComponente } from './components/PrimerComponente.jsx'
import { ContadorComponent } from './components/ContadorComponent.jsx'
import { ListadoComponent } from './components/ListadoComponent.jsx'
import './styles.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <PrimerComponente titulo="Titulo" subtitulo="Subtitulo" numero={10} /> */}
    {/* <ContadorComponent value={0} /> */}
    <ListadoComponent />
  </StrictMode>,
)
