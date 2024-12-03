import React from 'react';

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
  onAddToCart: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, price, image, onAddToCart }) => (
  <div className="bg-white border rounded-lg shadow-md hover:shadow-lg transition p-4 flex flex-col">
    <img src={image} alt={title} className="w-full h-48 object-cover rounded" />
    <div className="mt-4 flex-grow">
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      <p className="text-green-600 mt-2 text-lg">${price.toFixed(2)}</p>
    </div>
    <button
      onClick={() => onAddToCart(id)}
      className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
    >
      Add to Cart
    </button>
  </div>
);

export default ProductCard;
