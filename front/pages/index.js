import React from 'react';
import Link from "next/link";
import Carrusel from "../components/Carrusel/Carrusel";

export default function Home() {
  const [darkMode, setDarkMode] = React.useState(false);
  React.useEffect(() => {
    // Leer preferencia al cargar
    const savedMode = typeof window !== 'undefined' ? localStorage.getItem('darkMode') : null;
    if (savedMode) {
      setDarkMode(savedMode === 'true');
    }
  }, []);
  React.useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', darkMode);
    }
  }, [darkMode]);
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
        {/* <button style={{marginLeft: '20px'}} onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? 'Modo White' : 'Modo Dark'}
        </button> */}
      </header>
      <Carrusel />
      <section className="hero">
        <h2>Bienvenidos a nuestra tienda</h2>
        <p>Encuentra los mejores productos al mejor precio.</p>
      </section>
      <footer className="footer">
        <p>© 2026 Tienda Tecnología. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}