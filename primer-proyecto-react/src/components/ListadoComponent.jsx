import { useState } from 'react'

const Items = ({ nombre, visto }) => {
    return (
        <li>
            {nombre}
            {/* {visto ? '✅' : '⛔'} */}
            {visto && '✅'}
        </li>
    )
}


export const ListadoComponent = () => {

    let listadoSecciones = [
        { nombre: 'Instalaciiones necesarias ', visto: true },
        { nombre: 'Uso de vite ', visto: true },
        { nombre: 'Componentes ', visto: true },
        { nombre: 'Variables en JSX ', visto: true },
        { nombre: 'Props ', visto: true },
        { nombre: 'Eventos ', visto: true },
        { nombre: 'UseState ', visto: true },
        { nombre: 'Redux ', visto: false },
        { nombre: 'CustomHooks ', visto: false },
    ]

    const [arreglo, setarreglo] = useState(listadoSecciones);

    return (
        <>
            <h1>Listado de Temas del curso</h1>
            <ol>
                {arreglo.map(item =>
                    <Items key={item.nombre} nombre={item.nombre} visto={item.visto} />
                )}
            </ol>
            <button onClick={() => setarreglo(
                [...arreglo, { nombre: 'Nuevo Tema', visto: false }]
            )}>
                Agregar Tema
            </button>
        </>
    )
}
