import Link from "next/link";
import Carrusel from "../components/Carrusel/Carrusel";

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="logo">Tienda Tecnología</h1>
        <nav className="nav">
          <Link href="/">Inicio</Link>
          <Link href="/productos">Productos</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>
      </header>
      <Carrusel />
      <section className="hero">
        <h2>Bienvenidos a nuestra tienda</h2>
        <p>Encuentra los mejores productos al mejor precio.</p>
      </section>
      <footer className="footer">
        <p>© 2025 Tienda Tecnología. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}