import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

const BlogFooter = () => {
  return (
    <footer
      style={{ backgroundColor: "#eeee" }}
      className="text-gray-800 pt-16 pb-10 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Newsletter */}
        <div className="mb-16 text-center">
          <h3 className="text-5xl font-lato font-bold text-[#00a9a0] mb-14">
            Join Our Community for Fresh Insights
          </h3>

          <form className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="text"
              placeholder="Your Name"
              className="flex-grow px-6 py-3 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#00a9a0] placeholder:text-gray-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="flex-grow px-6 py-3 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#00a9a0] placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-[#00a9a0] text-white font-semibold rounded-full hover:bg-[#00857a] transition-all transform hover:scale-105 shadow-md"
            >
              Subscribe
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mt-10">
            {[FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPinterest].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#00a9a0]/10 hover:bg-[#00a9a0]/20 text-[#00a9a0] hover:text-white transition-all"
                >
                  <Icon size={18} />
                </a>
              )
            )}
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
          {[
            {
              title: "About Us",
              items: [
                "About",
                "Writers",
                "Editorial Policy",
                "Join Us",
                "Testimonials",
              ],
            },
            {
              title: "Help Center",
              items: [
                "Contact",
                "FAQs",
                "Privacy Policy",
                "Terms",
                "Cookie Policy",
              ],
            },
            {
              title: "Categories",
              items: [
                "Tech",
                "Travel",
                "Food",
                "Lifestyle",
                "Business",
                "Health",
              ],
            },
            {
              title: "Explore",
              items: [
                "Popular Posts",
                "Comments",
                "Interviews",
                "Resources",
                "Guides",
              ],
            },
          ].map(({ title, items }) => (
            <div key={title} className="space-y-4">
              <h4 className="text-lg font-semibold mb-4 border-b border-[#00a9a0]/20 pb-2">
                {title}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-[#00a9a0] transition-colors flex items-center"
                    >
                      <span className="w-1 h-1 bg-[#00a9a0] rounded-full mr-2"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-[#00a9a0]/20 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} BlogName. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-600">
              <a href="#" className="hover:underline hover:text-[#00a9a0]">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline hover:text-[#00a9a0]">
                Terms of Service
              </a>
              <a href="#" className="hover:underline hover:text-[#00a9a0]">
                Site Credits
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BlogFooter;
