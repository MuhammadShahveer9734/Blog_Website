import React from "react";

const news = [
  {
    title: "WordPress Full-Site Editing A Deep Dive",
    category: "TECHNOLOGY",
    date: "27 AUG, 2024",
    summary: "Explore WordPress Full-Site Editing and its key capabilities.",
    image: "./assets/11.jpg",
  },
  {
    title: "Effective Communication For Everyday Meetings",
    category: "NEWS",
    date: "27 AUG, 2024",
    summary: "Tips on improving communication in routine work meetings.",
    image: "./assets/22.jpg",
  },
  {
    title: "A Roadmap For Building A Business Chatbot",
    category: "GADGET",
    date: "27 AUG, 2024",
    summary: "Learn how to build an effective chatbot for your business.",
    image: "./assets/33.jpg",
  },
  {
    title: "The Future of AI in Everyday Applications",
    category: "TECHNOLOGY",
    date: "26 AUG, 2024",
    summary: "Discover how AI is transforming our daily digital experiences.",
    image: "./assets/44.jpg",
  },
  {
    title: "Sustainable Tech: Green Computing Initiatives",
    category: "ENVIRONMENT",
    date: "25 AUG, 2024",
    summary: "An overview of eco-friendly computing and tech innovations.",
    image: "./assets/55.jpg",
  },
  {
    title: "Cybersecurity Trends to Watch in 2024",
    category: "SECURITY",
    date: "24 AUG, 2024",
    summary: "Stay ahead with these important cybersecurity trends.",
    image: "./assets/66.jpg",
  },
  {
    title: "Remote Work Tools That Boost Productivity",
    category: "PRODUCTIVITY",
    date: "23 AUG, 2024",
    summary: "Explore top tools to make remote work more efficient.",
    image: "./assets/77.jpg",
  },
  {
    title: "The Rise of No-Code Development Platforms",
    category: "DEVELOPMENT",
    date: "22 AUG, 2024",
    summary: "No-code tools are making development easier for everyone.",
    image: "./assets/88.jpg",
  },
  {
    title: "The Rise of No-Code Development Platforms",
    category: "DEVELOPMENT",
    date: "22 AUG, 2024",
    summary: "More teams are adopting no-code for rapid prototyping.",
    image: "./assets/99.jpg",
  },
];

const WeeklyBestNews = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
        <div>
          <span className="inline-block mb-2 text-sm font-semibold text-teal-600 bg-teal-100 px-3 py-1 rounded-full">
            WEEKLY HIGHLIGHTS
          </span>
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
            Weekly Best News
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Curated selection of this week's top stories
          </p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-50 transition-all duration-200 group">
          <span className="text-gray-700 group-hover:text-teal-600 font-medium">
            View All Articles
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-400 group-hover:text-teal-600 transition-all"
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

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.slice(0, 9).map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-32 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {/* Hover summary */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <p className="text-xs text-white line-clamp-3">{item.summary}</p>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-white/90 text-teal-600">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <span className="text-xs text-gray-500">{item.date}</span>
                <h3 className="mt-1 text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#01a89e] group-hover:to-[#e86d00] group-hover:bg-clip-text transition-colors">
                  {item.title}
                </h3>
                <button className="mt-3 inline-flex items-center text-sm font-medium text-teal-600  transition-colors group-hover:underline">
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right side - 2 vertical posts */}
        <div className="lg:w-1/3 space-y-6">
          {news.slice(6, 8).map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {/* Hover summary */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-sm text-white line-clamp-3">{item.summary}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-white/90 text-teal-600">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm text-gray-500">{item.date}</span>
                <h3 className="mt-2 text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#01a89e] group-hover:to-[#e86d00] group-hover:bg-clip-text transition-colors">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600 line-clamp-3">
                  {item.summary}
                </p>
                <button className="mt-4 inline-flex items-center text-sm font-medium text-teal-600  transition-colors group-hover:underline">
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeeklyBestNews;
