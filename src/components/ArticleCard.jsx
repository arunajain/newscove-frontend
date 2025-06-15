import React from "react";

const ArticleCard = ({ article }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden flex">
      {/* Image Section */}
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-28 h-28 flex-shrink-0"
      >
        <img
          src={article.url_to_image}
          alt={article.title}
          className="object-cover rounded-md"
          style={{ width: "96px", height: "96px" }}
        />
      </a>

      {/* Content Section */}
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold mb-2 line-clamp-2">
            {article.title}
          </h2>
          <p className="text-sm text-gray-700 mb-2 line-clamp-2">
            {article.description}
          </p>
          <p className="text-sm text-gray-600 line-clamp-2">
            {article.content}
          </p>
        </div>
        <div className="text-xs text-gray-500 mt-2">
          <span>{article.source}</span> •{" "}
          <span>{new Date(article.published_at).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
