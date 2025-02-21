import React from 'react'
import { useState } from 'react'


export const ContadorComponent = ({value}) => {

  //Hook useState
  const  [contador, setContador] = useState(value)

  const handleClick = ()=> {
    setContador(contador + 1)
  }
  
  return (
    <>
      <h1>Contador: <span>{contador}</span> </h1>
      <button onClick={handleClick}>
        Aumentar
      </button>
    </>
  )
}
