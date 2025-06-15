import React, { useEffect, useState } from "react";

const Navbar = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  return (
    <nav className="bg-white shadow-md px-4 py-3">
      <div className="flex items-center space-x-4 overflow-x-auto scrollbar-hide">
        <button
          onClick={() => onCategorySelect(null)}
          className="text-sm font-medium text-gray-700 hover:text-blue-600"
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onCategorySelect(cat.id)}
            className="text-sm font-medium text-gray-700 hover:text-blue-600 whitespace-nowrap"
          >
            {cat.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
