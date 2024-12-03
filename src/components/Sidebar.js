import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useCategory } from '../context/CategoryContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';
const Sidebar = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const { selectedCategory, setSelectedCategory } = useCategory();
    const navigate = useNavigate();
    const handleCategorySelect = (category) => {
        setSelectedCategory(category); // Update the global category state
        navigate('/'); // Redirect to the home page
    };
    useEffect(() => {
        setLoading(true);
        fetch('https://fakestoreapi.com/products/categories')
            .then((res) => {
            if (!res.ok) {
                throw new Error('Failed to fetch categories');
            }
            return res.json();
        })
            .then((data) => {
            setCategories(data);
            setLoading(false);
        })
            .catch(() => {
            toast.error('Failed to load categories. Please try again.');
            setLoading(false);
        });
    }, []);
    return (_jsxs("aside", { className: "w-64 bg-white border-r min-h-full shadow-md p-4", children: [_jsx("h2", { className: "text-lg font-bold text-gray-800", children: "Categories" }), loading ? (_jsx("div", { className: "flex justify-center items-center h-32", children: _jsx(ClipLoader, { "data-testid": "spinner", color: "#059669", size: 40 }) })) : (_jsxs("ul", { className: "mt-4 space-y-2", children: [_jsx("li", { children: _jsx("button", { onClick: () => handleCategorySelect(''), className: `w-full text-left focus:outline-none focus:ring-0 focus-visible:outline-none ${selectedCategory === '' ? 'text-green-600 font-bold' : 'text-gray-700'}`, children: "All Products" }) }), categories.map((category) => (_jsx("li", { children: _jsx("button", { onClick: () => handleCategorySelect(category), className: `w-full text-left focus:outline-none focus:ring-0 focus-visible:outline-none ${selectedCategory === category ? 'text-green-600 font-bold' : 'text-gray-700'}`, children: category.charAt(0).toUpperCase() + category.slice(1) }) }, category)))] }))] }));
};
export default Sidebar;
