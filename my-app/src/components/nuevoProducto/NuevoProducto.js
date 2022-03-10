import { useState } from 'react';
import './NuevoProducto.css';

const NuevoProducto = (props) => {

    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [fecha, setFecha] = useState('');
    // EJEMPLO DE UN SOLO ESTADO CON TODOS LOS DATOS EN UN OBJETO JSON
    // const [entradas, setEntradas] = useState({
    //     nombre: '',
    //     precio: '',
    //     fecha: ''
    // });

    const nombreHandler = (event) => {
        setNombre(event.target.value);
        // FORMA DE ACTUALIZAR MÁS EFICIENTE ESTADOS MÁS COMPLEJOS
        // setEntradas({
        //     ...entradas,
        //     nombre: event.target.value
        // });
        // setEntradas((prevState) => {
        //     return (
        //         {
        //             ...prevState,
        //             nombre: event.target.value
        //         }
        //     )
        // });
    }

    const precioHandler = (event) => {
        setPrecio(event.target.value);
    }

    const fechaHandler = (event) => {
        setFecha(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const datos = {
            id: Math.random().toString(),
            nombre: nombre,
            precio: precio,
            fecha: new Date(fecha)
        };
        console.log(datos);
        setNombre('');
        setPrecio('');
        setFecha('');
        props.addProducto(datos);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='nuevoproducto__controls'>
                <div className='nuevoproducto__control'>
                    <label>Nombre</label>
                    <input type='text' onChange={nombreHandler} value={nombre} />
                </div>
                <div className='nuevoproducto__control'>
                    <label>Precio</label>
                    <input type='number' min='0.01' step='0.01' onChange={precioHandler} value={precio} />
                </div>
                <div className='nuevoproducto__control'>
                    <label>Fecha</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' onChange={fechaHandler} value={fecha} />
                </div>
            </div>
            <div className='nuevoproducto__actions'>
                <button type='submit'>Añadir producto</button>
            </div>
        </form>
    )
}

export default NuevoProducto;