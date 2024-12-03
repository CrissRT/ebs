import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from 'react';
const CategoryContext = createContext(undefined);
export const CategoryProvider = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState(''); // Default: All Products
    return (_jsx(CategoryContext.Provider, { value: { selectedCategory, setSelectedCategory }, children: children }));
};
export const useCategory = () => {
    const context = useContext(CategoryContext);
    if (!context) {
        throw new Error('useCategory must be used within a CategoryProvider');
    }
    return context;
};
