import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css'; // Tailwind styles
import { CategoryProvider } from './context/CategoryContext';
import { CartProvider } from './context/CartContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
      <CategoryProvider>
        <App />
      </CategoryProvider>
    </CartProvider>
  </React.StrictMode>
);
