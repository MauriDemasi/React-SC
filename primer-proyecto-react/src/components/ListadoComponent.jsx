const Items = ({nombre, visto}) => {
    return (
        <li>
            {nombre} 
            {/* {visto ? '✅' : '⛔'} */}
            {visto && '✅'}
        </li>
    )
}


export const ListadoComponent = () => {
  return (
    <>
      <h1>Listado de Temas del curso</h1>
      <ol>
        <Items nombre="Instalaciiones necesarias " visto = {true} />
        <Items nombre="Uso de vite " visto = {true} />
        <Items nombre="Componentes " visto = {true} />
        <Items nombre="Variables en JSX " visto = {true} />
        <Items nombre="Props " visto = {true} />
        <Items nombre="Eventos " visto = {true} />
        <Items nombre="UseState " visto = {true} />
        <Items nombre="Redux " visto = {false} />
        <Items nombre="CustomHooks " visto = {false} />
      </ol>
    </>
  )
}
