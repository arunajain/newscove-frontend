import React, { useEffect, useState } from "react";

const Header = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="relative max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex items-center space-x-2">
          <img
            src="/newscove_logo.png"
            alt="Newscove logo"
            className="h-6 w-auto max-w-[120px] object-contain"
          />
          <span className="text-lg font-semibold text-blue-700">NewsCove</span>
        </div>

        {/* Centered Menu */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 hidden:flex space-x-6 text-sm font-medium text-gray-700">
          {categories.map((cat) => (
            <span
              key={cat.id}
              onClick={() => onCategorySelect(cat.id)}
              className="cursor-pointer hover:text-blue-600 hover:underline transition whitespace-nowrap"
            >
              {cat.name}
            </span>
          ))}
        </nav>

        {/* Optional placeholder for right-side controls (future search, etc.) */}
        <div className="w-6 md:w-24" />
      </div>
    </header>
  );
};

export default Header;
