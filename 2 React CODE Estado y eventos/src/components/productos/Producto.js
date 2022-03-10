import './Producto.css';
import FechaProducto from './FechaProducto';
import {useState} from 'react';

function Producto(props) {

    const [nombre, setNombre] = useState(props.nombre);

    //let nombre = props.nombre;
    const precio = props.precio;
    const fecha = props.fecha;
    // const ano = props.fecha.getFullYear();
    // const mes = props.fecha.toLocaleString('es-ES', { month: 'long' });
    // const dia = props.fecha.toLocaleString('es-ES', { day: '2-digit' });

    const clickHandler = () => {
        //nombre = '¡¡Cambiado!!';
        //cambiar nombre del estado
        setNombre('¡¡Cambiado!!');
        //console.log(nombre);
    }

    return (
        <div className='producto'>
            <FechaProducto fecha={fecha} />
            <div className='producto__descripcion'>
                <h2>{nombre}</h2>
                <div className='producto__precio'>{precio}</div>
            </div>
            <button onClick={clickHandler}>Cambiar título</button>
        </div>
    )
}

export default Producto;