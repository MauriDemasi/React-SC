import proptypes from "prop-types"

export const PrimerComponente = ({titulo, subtitulo, numero}) => {

    return (
        <>
            <h1>{ titulo }</h1>
            <h2>{ subtitulo }</h2>
            <h2> { numero * 2 + (Math.pow(numero, 5)) } </h2> 
        </>

    )
}

//Hacer obligatoria la definicion de las props
PrimerComponente.propTypes = {
    titulo: proptypes.string.isRequired,
    subtitulo: proptypes.string.isRequired,
    numero: proptypes.number.isRequired
}

//Definir valores por defecto
PrimerComponente.defaultProps = {
    titulo: "Titulo por defecto",
    subtitulo: "Subtitulo por defecto",
    numero: 0
}