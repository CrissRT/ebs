import React from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductGridProps {
  products: Product[];
  onAddToCart: (id: number) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onAddToCart }) => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
