import {useSearchParams} from 'react-router-dom';

function Contact() {

    let [searchParams, setSearchParams] = useSearchParams();
    const p1 = searchParams.get("p1");
    const p2 = searchParams.get("p2");

    return (
        <>
            <h2>INFORMACIÓN DE CONTACTO</h2>
            <p>Esta es nuestra idea.</p>
            <p>El parámetro p1 es {p1}</p>
            <p>El parámetro p2 es {p2}</p>
        </>
    )
}

export default Contact;