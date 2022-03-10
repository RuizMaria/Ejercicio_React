import { useParams } from 'react-router-dom';

function DetalleProducto() {

    let params = useParams();

    return (
        <>
            <h2>PRODUCTO CON ID = {params.id}</h2>
            <p>Aquí veríamos toda la información de un producto.</p>
        </>
    )
}

export default DetalleProducto;