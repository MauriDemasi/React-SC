import  "../styles/primerComponente.css";

const string = 'Esto es un texto';
const number = 123456;
const array = ['Curso de React', 'Youtube', 4, 100000, 'Hola Mundo'];
const boolean = true;
const funcion = () => 1 + 1;
const objeto = { nombre: 'Curso de React', duracion: 4 };
const fecha = new Date();



export const PrimerComponente = () => {

    return (
        <>
            <h1>Variables en JSX</h1>
            <h4> Variable tipo String {string}</h4>
            <h3> Variable tipo Number {number}</h3>
            <h4> Variable tipo Array {array}</h4>
            <h3> Variable tipo Boolean {boolean}</h3>
            <h4> Variable tipo Funcion {funcion()}</h4>
            <h3> Variable tipo Objeto {objeto.nombre} {objeto.duracion}</h3>
            <h4> Variable tipo Fecha {fecha.toDateString()}</h4>
            <h3> Variable tipo Null {null}</h3>
            <h4> Variable tipo Undefined {undefined}</h4>
            <h3> Variable tipo Boolean {true ? 'Verdadero' : 'Falso'}</h3>
        </>

    )
}
