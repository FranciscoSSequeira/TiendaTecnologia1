import React from "react";

export default function Home() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1 className="logo">Ecommerce</h1>
        <nav className="nav">
          <a href="#">Inicio</a>
          <a href="#">Productos</a>
          <a href="#">Contacto</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Bienvenidos al Ecommerce</h2>
        <p>Encuentra los mejores productos al mejor precio.</p>
      </section>

      {/* Productos */}
      <section className="products">
        <div className="product-card">
          <img src="https://via.placeholder.com/150" alt="Producto 1" />
          <h3>Producto 1</h3>
          <p>$100</p>
          <button>Agregar al carrito</button>
        </div>
        <div className="product-card">
          <img src="https://via.placeholder.com/150" alt="Producto 2" />
          <h3>Producto 2</h3>
          <p>$200</p>
          <button>Agregar al carrito</button>
        </div>
        <div className="product-card">
          <img src="https://via.placeholder.com/150" alt="Producto 3" />
          <h3>Producto 3</h3>
          <p>$300</p>
          <button>Agregar al carrito</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Ecommerce. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}