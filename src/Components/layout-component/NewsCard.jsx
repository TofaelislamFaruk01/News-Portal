import React from 'react';
import { FaShareAlt, FaStar, FaEye } from 'react-icons/fa';

const NewsCard = ({ news }) => {
  const {
    title,
    thumbnail_url,
    author,
    total_view,
    rating,
    others_info,
    details,
  } = news;

  const filledStars = Math.round(rating.number);
  const maxStars = 5;

  return (
    <div className="bg-white shadow-sm rounded-xl overflow-hidden max-w-2xl mx-auto mb-5">
      {/* Top: Author Info + Share */}
      <div className="flex justify-between items-center p-3">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-9 h-9 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium text-gray-800">{author.name}</p>
            <p className="text-xs text-gray-500">{author.published_date}</p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-blue-600">
          <FaShareAlt size={16} />
        </button>
      </div>

      {/* Title */}
      <div className="px-4 pb-2">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      </div>

      {/* Image */}
      <img
        src={thumbnail_url}
        alt="News Thumbnail"
        className="w-full h-56 object-cover"
      />

      {/* Content */}
      <div className="px-4 pt-3 pb-4 space-y-2">
        {/* Details */}
        <p className="text-sm text-gray-700 line-clamp-3">{details}</p>

        {/* Read More Button */}
        <button className="mt-1 px-4 py-1.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded">
          Read More
        </button>

        {/* Footer: Stars + Views */}
        <div className="flex justify-between items-center pt-2 text-sm text-gray-600">
          {/* Rating */}
          <div className="flex items-center gap-1">
            {[...Array(maxStars)].map((_, i) => (
              <FaStar
                key={i}
                size={14}
                className={i < filledStars ? 'text-yellow-400' : 'text-gray-300'}
              />
            ))}
            <span className="ml-1 font-medium text-gray-800 text-sm">{rating.number}</span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-1">
            <FaEye size={14} />
            <span>{total_view}</span>
          </div>
        </div>

        {/* Trending */}
        {others_info.is_trending && (
          <div className="pt-2">
            <span className="inline-block px-2 py-1 bg-red-100 text-red-600 text-xs font-semibold rounded">
              🔥 Trending
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
