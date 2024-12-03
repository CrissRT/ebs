import { jsx as _jsx } from "react/jsx-runtime";
import ProductCard from './ProductCard';
const ProductGrid = ({ products, onAddToCart }) => {
    return (_jsx("section", { className: "py-16 bg-gray-100", children: _jsx("div", { className: "max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8", children: products.map((product) => (_jsx(ProductCard, { id: product.id, title: product.title, price: product.price, image: product.image, onAddToCart: onAddToCart }, product.id))) }) }));
};
export default ProductGrid;
