import React from 'react';

function BlogListWithCards() {
  const blogData = [
    {
      title: "What’s New in React 19",
      excerpt: "React 19 brings some powerful new features. Here's what you need to know...",
      category: "React",
      date: "2025-05-10",
      readTime: "4 min",
      image: "/images/react19.jpg",
      slug: "whats-new-in-react-19"
    },
    {
      title: "Top 10 VS Code Extensions for Developers",
      excerpt: "Boost your productivity with these must-have extensions...",
      category: "Tools",
      date: "2025-05-12",
      readTime: "3 min",
      image: "/images/vscode.jpg",
      slug: "top-10-vscode-extensions"
    },
    {
      title: "Understanding JavaScript Closures",
      excerpt: "Closures are a key concept in JavaScript. Learn how they work with real examples.",
      category: "JavaScript",
      date: "2025-05-08",
      readTime: "5 min",
      image: "/images/js-closures.jpg",
      slug: "understanding-js-closures"
    }
  ];

  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogData.map((blog, index) => (
        <article
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1"
        >
          <a href={`/blog/${blog.slug}`} className="block relative pb-[56.25%]" aria-label={`Read blog: ${blog.title}`}>
            <img
              src={blog.image}
              alt={blog.title || "Blog image"}
              loading="lazy"
              className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <span className="absolute top-3 left-3 bg-teal-600 text-white text-xs font-medium px-2 py-1 rounded">
              {blog.category}
            </span>
          </a>

          <div className="p-6">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <time dateTime={new Date(blog.date).toISOString()}>{blog.date}</time>
              <span>{blog.readTime} read</span>
            </div>

            <h3 className="text-xl font-semibold mb-2">
              <a href={`/blog/${blog.slug}`} className="text-gray-900 hover:text-blue-900">
                {blog.title}
              </a>
            </h3>

            <p className="text-gray-600 text-sm mb-4 line-clamp-3">{blog.excerpt}</p>

            <a
              href={`/blog/${blog.slug}`}
              className="inline-flex items-center text-blue-900 font-medium hover:text-blue-700"
            >
              Read more
              <span className="ml-2">→</span>
            </a>
          </div>
        </article>
      ))}
    </section>
  );
}

export default BlogListWithCards;
