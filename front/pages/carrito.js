import Link from "next/link";
import Cart from "../components/Cart/Cart";
import React from 'react';

export default function Carrito() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="logo">Tienda Tecnología</h1>
        <nav className="nav">
          <Link href="/">Inicio</Link>
          <Link href="/productos">Productos</Link>
          <Link href="/carrito">Carrito</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>
      </header>
      <section className="hero">
        <h2>Tu carrito</h2>
        <p>Revisa y gestiona los productos que deseas comprar.</p>
      </section>
      <main>
        <Cart />
      </main>
      <footer className="footer">
        <p>© 2026 Tienda Tecnología. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}