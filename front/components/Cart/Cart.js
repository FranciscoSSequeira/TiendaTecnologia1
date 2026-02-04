import { useCart } from "../../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return <div>El carrito está vacío.</div>;
  }

  return (
    <div>
      <h2>Carrito de compras</h2>
      <button onClick={clearCart}>Vaciar carrito</button>
      <ul>
        {cart.map((item) => (
          <li key={item.id} style={{ marginBottom: "20px" }}>
            <img src={item.imgUrl} alt={item.name} width={80} />
            <div>
              <strong>{item.name}</strong> - ${item.price}
            </div>
            <div>
              Cantidad: 
              <input
                type="number"
                min={1}
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.id, Number(e.target.value))
                }
                style={{ width: "50px", marginLeft: "10px" }}
              />
              <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: "10px" }}>
                Quitar
              </button>
            </div>
          </li>
        ))}
      </ul>
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}