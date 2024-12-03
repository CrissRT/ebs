import React, { useEffect, useState } from 'react';
import { useCategory } from '../context/CategoryContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';

const Sidebar: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { selectedCategory, setSelectedCategory } = useCategory();
  const navigate = useNavigate();

  const handleCategorySelect = (category: string) => {
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

  return (
    <aside className="w-64 bg-white border-r min-h-full shadow-md p-4">
      <h2 className="text-lg font-bold text-gray-800">Categories</h2>
      {loading ? (
        <div className="flex justify-center items-center h-32">
          <ClipLoader data-testid="spinner" color="#059669" size={40} />
        </div>
      ) : (
        <ul className="mt-4 space-y-2">
          <li>
            <button
              onClick={() => handleCategorySelect('')}
              className={`w-full text-left focus:outline-none focus:ring-0 focus-visible:outline-none ${
                selectedCategory === '' ? 'text-green-600 font-bold' : 'text-gray-700'
              }`}
            >
              All Products
            </button>
          </li>
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => handleCategorySelect(category)}
                className={`w-full text-left focus:outline-none focus:ring-0 focus-visible:outline-none ${
                  selectedCategory === category ? 'text-green-600 font-bold' : 'text-gray-700'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
};

export default Sidebar;
