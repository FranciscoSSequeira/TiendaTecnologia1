import Link from "next/link";

export default function Contacto() {
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
      <section className="contact">
        <h2>Contacto</h2>
        <p>Puedes contactarnos a través de nuestro correo: contacto@tiendatecnologia.com</p>
      </section>
      <footer className="footer">
        <p>© 2025 Tienda Tecnología. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}