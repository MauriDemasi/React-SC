import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PrimerComponente } from './components/primerComponente.jsx'
import './styles.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimerComponente 
      titulo="Seccion donde aprendemos a pasar props"
      subtitulo="Curso de React por Sergie Code"
      numero={3} //valores number se pasan entre llaves
       
      />
  </StrictMode>,
)
