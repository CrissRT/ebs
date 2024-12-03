import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from 'react';
const CartContext = createContext(undefined);
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addToCart = (item) => {
        setCart((prev) => {
            const existingItem = prev.find((cartItem) => cartItem.id === item.id);
            if (existingItem) {
                return prev.map((cartItem) => cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem);
            }
            return [...prev, { ...item, quantity: 1 }];
        });
    };
    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };
    const clearCart = () => {
        setCart([]);
    };
    return (_jsx(CartContext.Provider, { value: { cart, addToCart, removeFromCart, clearCart }, children: children }));
};
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context)
        throw new Error('useCart must be used within a CartProvider');
    return context;
};
