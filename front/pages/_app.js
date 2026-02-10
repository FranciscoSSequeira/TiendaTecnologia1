import '../styles/globals.css';
import { CartProvider } from '../context/CartContext';

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = React.useState(false);
  React.useEffect(() => {
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
    <CartProvider>
      <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        <div style={{position: 'fixed', top: 10, right: 10, zIndex: 1000}}>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? 'Modo White' : 'Modo Dark'}
          </button>
        </div>
        <Component {...pageProps} />
      </div>
    </CartProvider>
  );
}