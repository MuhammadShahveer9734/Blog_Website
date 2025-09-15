import React from 'react';
import { ArrowRight, Heading } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const blogPosts = [
  {
    title: "The Future of Web Development",
    category: "TECHNOLOGY",
    date: "27 AUGUST, 2024",
    readTime: "15 MINS",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3",
  },
  {
    title: "Understanding Modern UX Design",
    category: "DESIGN",
    date: "26 AUGUST, 2024",
    readTime: "12 MINS",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3",
  },
  {
    title: "Mobile App Development Trends",
    category: "MOBILE",
    date: "25 AUGUST, 2024",
    readTime: "10 MINS",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3",
  },
  {
    title: "AI in Modern Technology",
    category: "TECHNOLOGY",
    date: "24 AUGUST, 2024",
    readTime: "20 MINS",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3",
  },
];

const BlogPostSlider = ({Heading}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{Heading}</h2>
        <a
          href="#"
          className="flex items-center gap-1 text-sm font-medium text-[#01a89e] hover:underline"
        >
          View all posts <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {blogPosts.map((post, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden flex flex-col h-full">
              <div className="relative w-full h-48 md:h-56 lg:h-60">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#01a89e] bg-[#01a89e]/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-800 hover:text-[#01a89e] transition-colors leading-snug">
                    <a href="#">{post.title}</a>
                  </h3>
                </div>
                <div className="mt-4 text-sm text-gray-500 flex items-center gap-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BlogPostSlider;
