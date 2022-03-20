import './NuevoProducto.css';
import { useNavigate } from "react-router-dom";

const NuevoProducto = (props) => {

    let navega = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();
        //navega('/productos');
        setTimeout(() => navega('/productos'), 2000);
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <div className='nuevoproducto__controls'>
                    <div className='nuevoproducto__control'>
                        <label>Nombre</label>
                        <input type='text' />
                    </div>
                    <div className='nuevoproducto__control'>
                        <label>Precio</label>
                        <input type='number' min='0.01' step='0.01' />
                    </div>
                    <div className='nuevoproducto__control'>
                        <label>Fecha</label>
                        <input type='date' min='2019-01-01' max='2022-12-31' />
                    </div>
                </div>
                <div className='nuevoproducto__actions'>
                    <button type='submit'>Añadir producto</button>
                </div>
            </form>
        </>
    )
}

export default NuevoProducto;