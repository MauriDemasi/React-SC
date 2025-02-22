import React, { useState } from 'react'
export const FormTaskComponent = () => {

    const [inputValue, setinputValue] = useState('');

    function onInputChange(e) {
        setinputValue(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        console.log(inputValue);
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
                <button>
                    Agregar Tarea
                </button>
            </form>
        </>
    )
}
