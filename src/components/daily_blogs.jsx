import React from "react";
import { Link } from "react-router-dom";

// Sample data for the blog cards
const cardData = [
  {
    id: 1,
    category: "Technology",
    title: "Why is the Tesla Cybertruck designed the way it is?",
    description:
      "An exploration of Tesla's design philosophy and how it applies to the revolutionary Cybertruck.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3",
  },
  {
    id: 2,
    category: "Travel",
    title: "Hot Air Ballooning in Nepal - A Unique Experience",
    description:
      "Discover the breathtaking views of the Himalayas from a hot air balloon with Nepal Mother House Treks.",
    image: "assets/3.jpg",
    },
  {
    id: 3,
    category: "Culture",
    title: "New York City | Layout, People, Economy & History",
    description:
    "A comprehensive guide to understanding the complex tapestry that makes up New York City.",
    image: "assets/88.jpg",
   
  },
];

const CardGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Recent Blog News
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Discover our latest and most popular articles
          </p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-teal-600 text-white border border-gray-200 rounded-full shadow-sm hover:bg-teal-700 hover:shadow-md transition-all duration-200 group">
          <span className="text-white group-hover:text-blue-100 font-medium">
            View All Blogs
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white group-hover:text-blue-100 transition-all"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>

      {/* Cards Grid */}
      <Link to={'/BlogPost'}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardData.map(({ id, category, title, description, image}) => (
          <div
            key={id}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={image}
                alt={category}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <span className="inline-block bg-teal-100 text-teal-600 rounded-full text-xs px-3 py-1 uppercase font-semibold mb-3">
                {category}
              </span>
              <h4 className="text-xl font-semibold mb-3 line-clamp-2">{title}</h4>
              <p className="text-gray-600 mb-6 line-clamp-3">{description}</p>
              
            </div>
          </div>
        ))}
      </div>
      </Link>
      
    </div>
  );
};

export default CardGrid;
