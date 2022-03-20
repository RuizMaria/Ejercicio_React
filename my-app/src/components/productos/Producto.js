import './Producto.css';
import FechaProducto from './FechaProducto';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Producto(props) {

    const nombre = props.nombre;
    const precio = props.precio;
    const fecha = props.fecha;

    return (
        <div className='producto'>
            <FechaProducto fecha={fecha} />
            <div className='producto__descripcion'>
                <h2>{nombre} -  <Button variant="light"><Link to={`/productos/${props.id}`}>Ver detalle ID = {props.id}</Link></Button></h2>
                <div className='producto__precio'>{precio}</div>
            </div>
        </div>
    )
}

export default Producto;