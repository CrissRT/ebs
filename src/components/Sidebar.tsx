import React, { useEffect, useState } from 'react';
import { useCategory } from '../context/CategoryContext';
import { useNavigate } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const { selectedCategory, setSelectedCategory } = useCategory();
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category); // Update the global category state
    navigate('/'); // Redirect to the home page
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <aside className="w-64 bg-white border-r shadow-md p-4">
      <h2 className="text-lg font-bold text-gray-800">Categories</h2>
      <ul className="mt-4 space-y-2">
        <li>
          <button
            onClick={() => handleCategorySelect('')}
            className={`w-full text-left ${
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
              className={`w-full text-left ${
                selectedCategory === category ? 'text-green-600 font-bold' : 'text-gray-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
