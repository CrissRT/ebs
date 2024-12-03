import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import ProductGrid from '../components/ProductGrid';
import { useCart } from '../context/CartContext';
import { useCategory } from '../context/CategoryContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from 'react-spinners';
const Home = () => {
    const [products, setProducts] = useState([]);
    const [sortedProducts, setSortedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useCart();
    const { selectedCategory } = useCategory();
    const [sortOrder, setSortOrder] = useState(''); // State for sorting order
    // Fetch products based on category
    useEffect(() => {
        setLoading(true);
        const endpoint = selectedCategory
            ? `https://fakestoreapi.com/products/category/${selectedCategory}`
            : 'https://fakestoreapi.com/products';
        fetch(endpoint)
            .then((res) => res.json())
            .then((data) => {
            setProducts(data); // Update products
            setSortedProducts(data); // Initialize sorted products
            setLoading(false);
        })
            .catch(() => {
            toast.error('Failed to load products. Please try again.');
            setLoading(false);
        });
    }, [selectedCategory]);
    // Handle sorting
    useEffect(() => {
        let sorted = [...products];
        if (sortOrder === 'asc') {
            sorted = sorted.sort((a, b) => a.price - b.price);
        }
        else if (sortOrder === 'desc') {
            sorted = sorted.sort((a, b) => b.price - a.price);
        }
        setSortedProducts(sorted);
    }, [sortOrder, products]);
    const handleAddToCart = (id) => {
        const product = sortedProducts.find((p) => p.id === id);
        if (product) {
            addToCart({ ...product, quantity: 1, image: product.image });
            toast.success(`${product.title} added to cart!`);
        }
    };
    return (_jsxs("div", { children: [_jsxs("div", { className: "flex justify-between items-center mb-6", children: [_jsx("h1", { className: "text-2xl font-bold", children: "Products" }), _jsx("div", { className: "flex space-x-4", children: _jsxs("select", { onChange: (e) => setSortOrder(e.target.value), value: sortOrder, className: "border border-gray-300 bg-primary rounded px-4 py-2 text-white", children: [_jsx("option", { value: "", hidden: true, children: "Sort by Price" }), _jsx("option", { value: "asc", children: "Low to High" }), _jsx("option", { value: "desc", children: "High to Low" })] }) })] }), loading ? (_jsx("div", { className: 'flex justify-center items-center min-h-[80vh]', children: _jsx(ClipLoader, { color: "#059669", size: 60 }) })) : (_jsx(ProductGrid, { products: sortedProducts, onAddToCart: handleAddToCart }))] }));
};
export default Home;
