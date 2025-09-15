import React from 'react'
import Hero from "./Hero";
import BlogPostSlider from './blog_post_slider';
import CardGrid from './daily_blogs';
import NewsWebsite from './news';
import Poster from './Poster';
import WeeklyBestNews from './Best';

const Home = () => {
  return (
    <div>
     <Hero />
     <BlogPostSlider Heading="Featured Blogs"/>
     <NewsWebsite />
     <Poster />
     <WeeklyBestNews />
     <CardGrid />

    </div>
  )
}

export default Home;
