import './App.css';
import Productos from './components/productos/Productos';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import NuevoProducto from './components/nuevoProducto/NuevoProducto';
import { useState } from 'react';

function App() {

  const [productos, setProductos] = useState(
    [
      {
        id: 1,
        nombre: 'Ratón óptico 1',
        precio: 15.50,
        fecha: new Date(2022, 2, 2)
      },
      {
        id: 2,
        nombre: 'Ratón óptico 2',
        precio: 25.50,
        fecha: new Date(2022, 2, 2)
      },
      {
        id: 3,
        nombre: 'Ratón óptico 3',
        precio: 9.50,
        fecha: new Date(2022, 2, 2)
      },
    ]);

  const addProducto = (producto) => {
    setProductos([producto, ...productos]);
  };

  return (
    <div>
      <Header />
      <NuevoProducto addProducto={addProducto} />
      <Productos productos={productos} />
      <Footer />
    </div>
  );
}

export default App;
