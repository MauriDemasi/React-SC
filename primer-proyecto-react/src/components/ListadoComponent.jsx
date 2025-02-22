import { useState } from 'react'
import '../styles/ListadoComponent.css'
import { FormTaskComponent } from './FormTaskComponent'

const Items = ({ nombre, visto }) => {

    return (
        <li className='item'>
            <span>
                {nombre} {visto ? '✅' : '❌'}
            </span>
        </li>
    )
}


export const ListadoComponent = () => {

    let listadoSecciones = [
        { id: 1 ,nombre: 'Instalaciones necesarias ', visto: true },
        { id: 2 ,nombre: 'Uso de vite ', visto: true },
        { id: 3 ,nombre: 'Componentes ', visto: true },
        { id: 4 ,nombre: 'Variables en JSX ', visto: true },
        { id: 5 ,nombre: 'Props ', visto: true },
        { id: 6 ,nombre: 'Eventos ', visto: true },
        { id: 7 ,nombre: 'UseState ', visto: true },
        { id: 8 ,nombre: 'Redux ', visto: false },
        { id: 9 ,nombre: 'CustomHooks ', visto: false },
    ]

    const [arreglo, setarreglo] = useState(listadoSecciones);

    const onAgregarTarea = (val) => {
        let valor = val.trim();
        if (valor < 1) return
        const envio = {
            id: arreglo.length + 1,
            nombre: valor,
            visto: false
        }
        setarreglo([...arreglo, envio])
    }

    return (
        <>
            <h1>Listado de Temas del curso</h1>
            <FormTaskComponent agregarTarea={onAgregarTarea} />
            <ol>
                {arreglo.map(item =>
                    <Items key={item.id} nombre={item.nombre} visto={item.visto} />
                )}
            </ol>

            {/* <button onClick={() => setarreglo(
                [...arreglo, { nombre: 'Nuevo Tema', visto: false }]
            )}>
                Agregar Tema
            </button> */}
        </>
    )
}
