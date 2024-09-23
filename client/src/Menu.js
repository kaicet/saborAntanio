import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.css';

function Menu() {
  const navigate = useNavigate(); // Para redirigir a la vista de creación de reserva

  const menuItems = [
    {
      id: 1,
      name: 'Pizza Margherita',
      image: '/img/pizza-margarita.jpg',
      price: '12.99',
      description: 'Clásica pizza italiana con tomates frescos, mozzarella y albahaca.',
    },
    {
      id: 2,
      name: 'Ensalada César',
      image: '/img/Ensalada-cesar-con-pollo-y-su-salsa-casera.-Receta-e-ingredientes.jpg',
      price: '8.99',
      description: 'Ensalada fresca con lechuga romana, crutones y aderezo César.',
    },
    {
      id: 3,
      name: 'Hamburguesa Clásica',
      image: '/img/SIMON-PARRILLA-COMIDAS-RAPIDAS-HAMBURGUESA-CLASICA.jpg',
      price: '10.99',
      description: 'Hamburguesa con queso, lechuga, tomate y cebolla caramelizada.',
    },
  ];

  return (
    <div className="menu-container">
      <h1>Menú</h1>
      <div className="menu-items">
        {menuItems.map((item) => (
          <div className="menu-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p className="price">${item.price}</p>
            <button onClick={() => navigate('/reserva')}>Reservar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
