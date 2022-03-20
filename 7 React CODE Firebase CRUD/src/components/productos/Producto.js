import './Producto.css';
import FechaProducto from './FechaProducto';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function Producto(props) {

    const nombre = props.nombre;
    const precio = props.precio;
    const fecha = props.fecha;
    const id = props.id;

    const navega = useNavigate();

    const borrarProducto = () => {
        axios.delete('https://my-demoblog.firebaseio.com/productos/' + id + '.json')
            .then(response => {
                //console.log(response);
                alert('Producto borrado');
                navega('/productos');
            });
    }

    return (
        <div className='producto'>
            <FechaProducto fecha={fecha} />
            <div className='producto__descripcion'>
                <h2>{nombre} - <Link to={`/productos/${props.id}`}>VER DETALLE</Link> - <Button variant="danger" onClick={borrarProducto}>BORRAR</Button></h2>
                <div className='producto__precio'>{precio}</div>
            </div>
        </div>
    )
}

export default Producto;