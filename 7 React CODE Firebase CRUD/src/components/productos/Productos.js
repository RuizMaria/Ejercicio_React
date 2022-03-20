import { useEffect, useState } from 'react';
import Producto from './Producto';
import axios from 'axios';

function Productos(props) {

    const [productos,setProductos] = useState([]);

    useEffect(() => {
        //console.log('Se monta Productos');
        axios.get('https://my-demoblog.firebaseio.com/productos.json')
            .then(response => {
                //console.log(response.data)
                let arrayProductos = [];
                for (let key in response.data) {
                    arrayProductos.push({
                        id: key,
                        nombre: response.data[key].nombre,
                        precio: response.data[key].precio,
                        fecha: new Date(response.data[key].fecha)
                    });
                }
                //console.log(arrayProductos);
                setProductos(arrayProductos);
            }).catch(error => {
                console.log('Se ha producido un error');
            });
    }, [])

    return (
        <>
            {productos.map((elemento) => (
                <Producto
                    key={elemento.id}
                    id={elemento.id}
                    nombre={elemento.nombre}
                    precio={elemento.precio}
                    fecha={elemento.fecha}
                />
            ))}
        </>
    )
}

export default Productos;