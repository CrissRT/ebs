import React from 'react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <section className="max-w-7xl mx-auto py-16">
      <h1 className="text-2xl font-bold text-gray-800">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="mt-4 text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="mt-8 space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-white shadow-md p-4 rounded"
            >
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded" />
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">
                    ${item.price.toFixed(2)} x {item.quantity}
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex justify-between items-center mt-8">
            <h3 className="text-xl font-bold text-gray-800">Total: ${totalPrice.toFixed(2)}</h3>
            <button
              onClick={clearCart}
              className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
