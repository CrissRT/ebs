import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css'; // Tailwind styles
import { CategoryProvider } from './context/CategoryContext';
import { CartProvider } from './context/CartContext';
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(CartProvider, { children: _jsx(CategoryProvider, { children: _jsx(App, {}) }) }) }));
