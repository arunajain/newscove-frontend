import React, { useEffect, useState } from "react";
import Header from "../components/Header"; // ✅ use Header instead of Navbar
import ArticleCard from "../components/ArticleCard";

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Function to fetch articles (filtered or all)
  const fetchArticles = (categoryId = null) => {
    setLoading(true);
    const url = categoryId
      ? `http://localhost:3000/api/news?category_id=${categoryId}`
      : `http://localhost:3000/api/news`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching articles:", err);
        setLoading(false);
      });
  };

  // ✅ Initial fetch (all articles)
  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ✅ Pass fetchArticles as a prop to Header for category selection */}
      <Header onCategorySelect={fetchArticles} />

      <div className="py-10 px-4 md:px-16">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Latest News</h1>

        {loading ? (
          <div className="text-center text-gray-500">Loading articles...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-6">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsList;
