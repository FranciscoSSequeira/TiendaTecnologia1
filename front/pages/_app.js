import { useState, useEffect } from 'react';
import '../styles/globals.css';
import { CartProvider } from '../context/CartContext';

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "true");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  return (
    <CartProvider>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <button
          style={{
            position: 'fixed',
            top: 10,
            right: 10,
            zIndex: 1000,
            padding: '8px 16px',
            borderRadius: '6px',
            border: 'none',
            background: darkMode ? '#333' : '#eee',
            color: darkMode ? '#fff' : '#333',
            cursor: 'pointer',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
          }}
          onClick={() => setDarkMode((prev) => !prev)}
        >
          {darkMode ? 'Modo White' : 'Modo Dark'}
        </button>
        <Component {...pageProps} />
      </div>
    </CartProvider>
  );
}