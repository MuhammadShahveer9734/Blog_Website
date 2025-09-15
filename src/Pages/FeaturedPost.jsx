import React from 'react';

function FeaturedPost({ title, excerpt, category, date, readTime, image, slug }) {
  return (
    <section className="bg-white rounded-lg shadow-md overflow-hidden mb-16 grid grid-cols-1 lg:grid-cols-12">
      <div className="lg:col-span-7 relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="lg:col-span-5 p-8 flex flex-col">
        <span className="text-sm font-semibold text-blue-900 uppercase tracking-wider mb-2">
          Featured Post
        </span>
        
        <span className="inline-block bg-teal-600 text-white text-xs font-medium px-2 py-1 rounded mb-4">
          {category}
        </span>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          <a href={`/blog/${slug}`} className="hover:text-blue-900">
            {title}
          </a>
        </h2>
        
        <p className="text-gray-600 mb-6 flex-grow">{excerpt}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="text-sm text-gray-500">
            <time dateTime={new Date(date).toISOString()}>{date}</time>
            <span className="mx-2">•</span>
            <span>{readTime} read</span>
          </div>
          
          <a 
            href={`/blog/${slug}`}
            className="inline-block bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors"
          >
            Read Article
          </a>
        </div>
      </div>
    </section>
  );
}

export default FeaturedPost;