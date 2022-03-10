import Producto from './Producto';

function Productos(props) {
    return (
        <>
            {props.productos.map((elemento) => (
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