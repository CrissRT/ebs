import React, { useEffect, useState } from 'react';
import ProductGrid from '../components/ProductGrid';
import { useCart } from '../context/CartContext';
import { useCategory } from '../context/CategoryContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from 'react-spinners';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [sortedProducts, setSortedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const { selectedCategory } = useCategory();

  const [sortOrder, setSortOrder] = useState<string>(''); // State for sorting order

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
    } else if (sortOrder === 'desc') {
      sorted = sorted.sort((a, b) => b.price - a.price);
    }
    setSortedProducts(sorted);
  }, [sortOrder, products]);

  const handleAddToCart = (id: number) => {
    const product = sortedProducts.find((p) => p.id === id);
    if (product) {
      addToCart({ ...product, quantity: 1, image: product.image });
      toast.success(`${product.title} added to cart!`);
    }
  };

  return (
    <div>
      {/* Filter and Sort Controls */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <div className="flex space-x-4">
          <select
            onChange={(e) => setSortOrder(e.target.value)}
            value={sortOrder}
            className="border border-gray-300 bg-primary rounded px-4 py-2 text-white"
          >
            <option value="" hidden>Sort by Price</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      {loading ? (
        <div className='flex justify-center items-center min-h-[80vh]'>
          <ClipLoader color="#059669" size={60}/>
        </div>
      ) : (
        <ProductGrid products={sortedProducts} onAddToCart={handleAddToCart} />
      )}
    </div>
  );
};

export default Home;
