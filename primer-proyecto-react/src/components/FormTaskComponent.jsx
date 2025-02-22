import React, { useState } from 'react'

export const FormTaskComponent = ({ agregarTarea}) => {

    const [inputValue, setinputValue] = useState('');

    function onInputChange(e) {
        setinputValue(e.target.value);
    }

    function onSubmit(e) {
        const envio = {
            nombre: inputValue,
            visto: false
        }
        e.preventDefault();
        agregarTarea(tareas => [...tareas, envio]);
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder='Ingrese tarea'
                    className='input'
                    onChange={onInputChange}
                    value={inputValue}
                />
            </form>
        </>
    )
}
