import React, { useEffect, useState } from "react";
import Link from "next/link";
'use client';

export default function Productos() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  const categories = [
    "Todas",
    ...Array.from(
      new Set(
        products
          .map((p) => p.category && p.category.name)
          .filter(Boolean)
      )
    ),
  ];

  const filteredProducts =
    selectedCategory === "Todas"
      ? products
      : products.filter(
          (p) => p.category && p.category.name === selectedCategory
        );

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
      <section style={{ margin: "20px 0" }}>
        <label htmlFor="category-select">Filtrar por categoría: </label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </section>
      <section className="products">
        {loading ? (
          <p>Cargando productos...</p>
        ) : filteredProducts.length === 0 ? (
          <p>No hay productos disponibles.</p>
        ) : (
          filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.imgUrl || "https://via.placeholder.com/150"}
                alt={product.name}
              />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <p className="category">
                {product.category?.name ? product.category.name : ""}
              </p>
              <button>Agregar al carrito</button>
            </div>
          ))
        )}
      </section>
      <footer className="footer">
        <p>© 2025 Tienda Tecnología. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}