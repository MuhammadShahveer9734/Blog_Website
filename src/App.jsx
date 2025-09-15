import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BlogFooter from "./components/blog_footer";
import Home from "./components/Home";
import Blogs from "./Pages/Blogs";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import BlogPost from "./Pages/Single_Post";
import ScrollToTop from "./components/Top"; // Import the ScrollToTop component
import "./App.css";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop /> {/* Add ScrollToTop here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Single Post" element={<BlogPost />} />
        </Routes>
        <BlogFooter />
      </BrowserRouter>
    </div>
  );
};

export default App;
