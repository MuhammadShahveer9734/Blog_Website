import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

import { FaSearch } from "react-icons/fa"; 
const Navbar = () => {
  const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const categories = ["Shop", "Portfolio", "FAQ", "Testimonials"];
  const mainLinks = ["Home", "About","Blog","Single Post", "Contact"];
  const socialLinks = ["facebook-f", "twitter", "linkedin-in", "instagram"];


  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const dummyData = ["Technology", "Design", "Travel"];

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      const filtered = dummyData.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (value) => {
    setQuery(value);
    setSuggestions([]);
  };

// Inside component:
const navigate = useNavigate(); // for programmatic navigation

  return (
    <>
      {/* Top Navbar */}
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col lg:flex-row justify-between items-center">
          {/* Logo */}
          <div className="flex justify-center lg:justify-start w-full lg:w-auto mb-4 lg:mb-0">
            <Link to="/">
              <img
                src="./assets/logo.png"
                alt="Company logo"
                className="w-48 h-auto"
              />
            </Link>
          </div>

          {/* Social Links & Sign In */}
          <div className="flex flex-col lg:flex-row items-center gap-4 text-gray-600 font-medium">
            <ul className="flex gap-4">
              {socialLinks.map((platform) => (
                <li key={platform}>
                  <Link
                    to="/"
                    className="text-lg text-black hover:text-teal-600 transition"
                  >
                    <i className={`fa-brands fa-${platform}`}></i>
                  </Link>
                </li>
              ))}
            </ul>
            <button className="text-teal-600 border border-teal-600 px-4 py-2 rounded hover:bg-[#00857a] transition-all transform hover:scale-05 shadow-sm hover:text-white ">
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Bottom Navbar */}
      <nav className="bg-white relative z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between flex-wrap">
          {/* Left - Categories */}
          <div className="flex items-center gap-4">
            {/* Mobile Hamburger */}
            <button
              onClick={() => setCategoryMenuOpen(!categoryMenuOpen)}
              className="lg:hidden text-black hover:text-teal-600 transition"
            >
              <i className="fa fa-bars text-xl"></i>
            </button>

            {/* Desktop Categories */}
            <div className="relative hidden lg:block group">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-gray-800 hover:bg-teal-50 hover:text-teal-700 transition">
                <i className="fa fa-layer-group text-lg"></i>
                <span className="font-medium">Categories</span>
                <i className="fa fa-chevron-down text-xs mt-0.5"></i>
              </button>

              <ul className="absolute left-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                {categories.map((item) => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase()}`}
                      className="block px-4 py-3 text-gray-700 hover:bg-teal-600 hover:text-white transition-all rounded-md mx-2 my-1"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Center - Main Links */}
          <ul className="hidden lg:flex gap-6 font-medium text-gray-700">
            {mainLinks.map((item) => {
              const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              return (
                <li key={item}>
                  <Link to={path} className="text-lg hover:text-teal-600 transition">
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right - Search */}
<div className="relative mt-4 lg:mt-0 w-full sm:w-auto">
  <form
    onSubmit={(e) => {
      e.preventDefault();
      if (query.trim() !== "") {
        navigate(`/search?q=${query}`);
      }
    }}
    className="flex items-center border-b-2 border-teal-600 px-4 py-2"
  >
    <FaSearch className="text-gray-400 mr-2" />
    <input
      type="text"
      placeholder="Search..."
      value={query}
      onChange={handleChange}
      className="w-full bg-transparent text-gray-700 placeholder:text-gray-400 focus:outline-none"
    />
  </form>

  {suggestions.length > 0 && (
    <ul className="absolute left-0 right-0 bg-white border border-gray-200 mt-1 rounded shadow-md z-10">
      {suggestions.map((item, index) => (
        <li
          key={index}
          onClick={() => {
            handleSelect(item);
            navigate(`/search?q=${item}`);
          }}
          className="px-4 py-2 hover:bg-teal-100 cursor-pointer"
        >
          {item}
        </li>
      ))}
    </ul>
  )}
</div>




        </div>

        {/* Mobile Offcanvas */}
        {categoryMenuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-30 z-40"
              onClick={() => setCategoryMenuOpen(false)}
            ></div>

            <div className="fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-xl transform transition-transform duration-300">
              <div className="p-6 h-full flex flex-col">
                {/* Close Button */}
                <button
                  onClick={() => setCategoryMenuOpen(false)}
                  className="absolute top-4 right-4 text-3xl text-gray-700 hover:text-red-500 transition"
                >
                  &times;
                </button>

                <ul className="mt-12 space-y-6 text-gray-800 font-medium">
                  {/* Dropdown Toggle */}
                  <li>
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="w-full flex items-center justify-between bg-gray-100 px-4 py-3 rounded-lg text-lg hover:bg-teal-100 hover:text-teal-700 transition"
                    >
                      <span className="flex items-center gap-2">
                        <i className="fa fa-bars text-md"></i> Categories
                      </span>
                      <i className={`fa fa-chevron-${dropdownOpen ? "up" : "down"} text-sm`}></i>
                    </button>

                    {dropdownOpen && (
                      <ul className="mt-2 ml-4 space-y-2 border-l-2 border-teal-500 pl-4">
                        {categories.map((item) => (
                          <li key={item}>
                            <Link
                              to={`/${item.toLowerCase()}`}
                              className="block px-2 py-2 rounded-md text-gray-700 hover:bg-teal-600 hover:text-white transition"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>

                  <hr className="border-t border-gray-300" />

                  {mainLinks.map((link) => {
                    const path = link === "Home" ? "/" : `/${link.toLowerCase()}`;
                    return (
                      <li key={link}>
                        <Link
                          to={path}
                          className="block text-lg px-4 py-2 rounded-lg hover:bg-teal-600 hover:text-white transition"
                        >
                          {link}
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-auto pt-6 text-center text-sm text-gray-400">
                  © 2025 YourCompany
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
