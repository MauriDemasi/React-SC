import React, { useMemo, useState } from 'react'


export const HeavyCalculateComponent = () => {
    
    const [listaNumeros, setListaNumeros] =  useState([5,2,3,4,5,6,7,8,9,10])
    
    const [show, setShow] = useState(true)

    const getCalculo =(listaNumeros) => useMemo(() => {
        console.log('Calculando...')
        return listaNumeros.reduce((a, b) => a * b, 1)
    }, [listaNumeros]) 

    
    const  agregarNumero = () => {
     setListaNumeros([...listaNumeros, listaNumeros[listaNumeros.length - 1] + 1])   
     console.log(listaNumeros)
    }

return (
    <div>
        <h3>Calculo pesado</h3>
        <p className='alert'> {getCalculo(listaNumeros)} </p>

        <button onClick={() => setShow(!show)} className='btn btn-primary'>
            {show ? 'Ocultar' : 'Mostrar'}
        </button>

        <button onClick={() => agregarNumero()} className=' mx-2 btn btn-info'>
            Agregar numero
        </button>
    </div>
  )
}
