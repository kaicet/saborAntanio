import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.css';

function Menu() {
  const navigate = useNavigate();

  const menuItems = [
    {
      id: 1,
      name: 'Pizza Margherita',
      image: '/img/pizza-margarita.jpg',
      price: '30.000',
      description: 'Clásica pizza italiana con tomates frescos, mozzarella y albahaca.',
    },
    {
      id: 2,
      name: 'Ensalada César',
      image: '/img/Ensalada-cesar-con-pollo-y-su-salsa-casera.-Receta-e-ingredientes.jpg',
      price: '20.000',
      description: 'Ensalada fresca con lechuga romana, crutones y aderezo César.',
    },
    {
      id: 3,
      name: 'Hamburguesa Clásica',
      image: '/img/SIMON-PARRILLA-COMIDAS-RAPIDAS-HAMBURGUESA-CLASICA.jpg',
      price: '15.000',
      description: 'Hamburguesa con queso, lechuga, tomate y cebolla caramelizada.',
    },
  ];

  return (
    <div>
      {/* Header */}
      <header className="header">
        <nav className="navbar">
          <ul>
            <li><a href="#menu">Menú</a></li>
            <li><a href="#eventos">Eventos</a></li>
            <li><a href="reserva" onClick={() => navigate('/reserva')}>Reservas</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </nav>
      </header>

      {/* Menu Section */}
      <div className="menu-container" id="menu">
        <h1 className="menu-title">Nuestro Menú</h1>
        <div className="menu-items">
          {menuItems.map((item) => (
            <div className="menu-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p className="description">{item.description}</p>
              <p className="price">${item.price}</p>
            </div>
          ))}
        </div>
        {/* Single reservation button */}
        <div className="reservation-button">
          <button onClick={() => navigate('/reserva')}>Reservar</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>Horarios de Atención:</p>
          <p>Lunes a Viernes: 12:00 PM - 10:00 PM</p>
          <p>Sábados y Domingos: 12:00 PM - 11:00 PM</p>
        </div>
      </footer>
    </div>
  );
}

export default Menu;
