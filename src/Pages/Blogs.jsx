import React, { useState } from "react";

const posts = [
  {
    id: 1,
    title: "Exploring React 18 Features",
    category: "Technology",
    description: "A deep dive into React 18’s concurrent rendering and more.",
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Top UI Design Trends 2025",
    category: "Design",
    description: "What’s hot in the world of UI/UX design this year?",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "10 Must-Visit Cities in Europe",
    category: "Travel",
    description: "Your guide to exploring Europe’s best cities.",
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "AI in Everyday Life",
    category: "Technology",
    description: "From smart assistants to personalized ads — AI is everywhere.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    title: "Mastering Minimalist Design",
    category: "Design",
    description: "Simplicity meets functionality in modern web design.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  },
];
/////

const categories = ["All", "Technology", "Design", "Travel"];

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-center mb-10">Our Blog</h2>

      {/* Nav Tabs */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#00a9a0] ${
              selectedCategory === category
                ? "bg-[#00a9a0] text-white border-[#00a9a0]"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="group bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 overflow-hidden flex flex-col"
          >
            <div className="overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-t-2xl"
              />
            </div>
            <div className="p-5 flex flex-col flex-grow justify-between">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-white bg-[#00a9a0] px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">5 min read</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#00a9a0] transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {post.description}
                </p>
              </div>
              <div className="mt-4 text-sm text-gray-400 border-t pt-3">
                📅 {new Date().toLocaleDateString("en-GB")}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <p className="text-center mt-12 text-gray-500">No posts found.</p>
      )}
    </div>
  );
};

export default Blogs;
