import { FaFacebook, FaTwitter, FaLinkedin, FaBookmark, FaCalendarAlt, FaUser } from 'react-icons/fa';
import BlogPostSlider from '../components/blog_post_slider';

const BlogPost = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Post Header */}
      <header className="mb-8">
        <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4 gap-2">
          <span className="flex items-center">
            <FaCalendarAlt className="mr-1" />
            May 12, 2025
          </span>
          <span className="flex items-center">
            <FaUser className="mr-1" />
            By Sarah Johnson
          </span>
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
            Web Development
          </span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Building Modern Web Apps with React and Tailwind CSS
        </h2>
        
      </header>
      
      {/* Featured Image */}
      <div className="mb-8 rounded-lg overflow-hidden shadow-md">
        <img 
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
          alt="React and Tailwind CSS code on a laptop"
          className="w-full h-auto max-h-96 object-cover"
          loading="lazy"
        />
      </div>
      
      {/* Post Content */}
      <article className="prose prose-sm sm:prose-base lg:prose-lg max-w-none mb-12">
        <p className="text-lg sm:text-xl text-gray-700 mb-6">
          In today's fast-paced web development landscape, combining React with Tailwind CSS 
          offers developers an incredibly efficient way to build beautiful, responsive 
          applications. This guide will walk you through the best practices for integrating 
          these two powerful tools.
        </p>
        
        <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4 text-gray-800">Why This Combination Works</h2>
        
        <p>
          React's component-based architecture pairs perfectly with Tailwind's utility-first 
          approach. Instead of wrestling with CSS naming conventions or maintaining separate 
          stylesheets, you can style your components directly in your JSX with Tailwind's 
          comprehensive set of utility classes.
        </p>
        
        <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4 text-gray-800">Getting Started</h2>
        
        <p>
          Setting up a new project with React and Tailwind is straightforward with tools like 
          Create React App or Vite. Here's a quick example of a styled component:
        </p>
         
        <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4 text-gray-800">Performance Considerations</h2>
        
        <p>
          One concern developers often have is about bundle size. However, Tailwind's 
          purging feature ensures only the classes you actually use are included in 
          production builds. Combined with React's code splitting capabilities, you 
          can achieve excellent performance metrics.
        </p>
        
        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-6">
          "The combination of React and Tailwind has cut our development time in half while 
          maintaining a consistent design system across our applications." - Senior Developer at TechCorp
        </blockquote>
      </article>
      
      {/* Author Bio */}
      <div className="bg-gray-50 p-6 rounded-lg mb-12 shadow-sm">
        <div className="flex items-center mb-4">
          <img 
            src="https://randomuser.me/api/portraits/women/44.jpg" 
            alt="Sarah Johnson"
            className="w-12 h-12 rounded-full mr-4"
            loading="lazy"
          />
          <div>
            <h3 className="font-bold text-gray-900">Sarah Johnson</h3>
            <p className="text-sm text-gray-600">Senior Frontend Developer</p>
          </div>
        </div>
        <p className="text-gray-700">
          Sarah has been building web applications for over 8 years. She specializes in React 
          performance optimization and design systems. When not coding, she enjoys hiking and 
          photography.
        </p>
      </div>
      
      {/* Related Posts */}
     <BlogPostSlider Heading="Related Blogs"/>
    </div>
  );
};

export default BlogPost;