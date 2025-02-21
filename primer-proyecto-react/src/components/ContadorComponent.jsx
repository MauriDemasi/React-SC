import React from 'react'


export const ContadorComponent = ({value}) => {

  const handleClick = ()=> {
    value += 1
    console.log(value)
  }
  
  return (
    <>
      <h1>Contador: <span>{value}</span> </h1>
      <button onClick={handleClick}>
        Aumentar
      </button>
    </>
  )
}
