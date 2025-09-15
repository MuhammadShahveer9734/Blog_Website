import React from 'react';
import { Link } from "react-router-dom";
const Hero = () => {
  const cards = [
    {
      id: 1,
      title: "A Pragmatist's Guide To Their Lean User Research",
      date: "April 25, 2025",
      rating: 4.2,
      reviews: 50,
      imageSrc: "./assets/1.jpg",
      category: "UX Research"
    },
    {
      id: 2,
      title: "A Pragmatist's Guide To Their Lean User Research",
      date: "April 25, 2025",
      rating: 4.3,
      reviews: 80,
      imageSrc: "./assets/2.jpg",
      category: "UX Research"
    }
  ];

  const stories = [
    { category: 'POLITICS', title: 'Lessons Learned As A Designer-Founder', date: '27 AUGUST, 2024', imge: './assets/3.jpg', id:12, },
    { category: 'MODERN', title: 'A Complete Guide To Live Validation UX', date: '27 AUGUST, 2024', imge: './assets/4.jpg', id:16 },
    { category: 'SPORTS', title: 'Building A Retro Draggable Web', date: '27 AUGUST, 2024', imge: './assets/5.jpg', id:13 },
    { category: 'FASHION', title: 'Rethinking Star Ratings For Readers', date: '27 AUGUST, 2024', imge: './assets/6.jpg', id:14 },
    { category: 'POLITICS', title: 'Lessons Learned As A Designer-Founder', date: '27 AUGUST, 2024', imge: './assets/7.jpg', id:15 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

        {/* Left Cards */}
        <div className="md:col-span-12 lg:col-span-4 flex lg:flex-col md:flex-row sm:flex-row flex-col gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-lg shadow overflow-hidden relative group"
            >
              {/* Image with fixed height */}
              <div className="relative w-full h-34">
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src={card.imageSrc}
                  alt={card.title}
                />
                <div className="absolute top-2 left-2 bg-[#00a9a0] text-white text-xs px-2 py-0.5 rounded-full">
                  {card.category}
                </div>
              </div>

              {/* Tighter Content */}
              <div className="p-3 space-y-1">
                <h3 className="text-base md:text-lg font-semibold bg-gradient-to-r from-[#00a9a0] to-[#f8931f] text-transparent bg-clip-text leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs text-gray-500">
                  Published on <span className="font-medium">{card.date}</span>
                </p>
                <div className="flex items-center gap-1 text-xs">
                  <span className="text-yellow-500 font-semibold">{card.rating}</span>
                  <span className="text-gray-400">({card.reviews} reviews)</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Center Feature */}
        <div className="md:col-span-12 lg:col-span-5 space-y-4">
            <Link to={'/BlogPost'}>
          <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="./assets/3.jpg"
              alt="Main story"
              />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-[#00a9a0] to-[#f8931f] text-transparent bg-clip-text">
              A Pragmatist's Guide To Their Lean User Research
            </h3>
            <div className="text-sm md:text-base text-gray-600">
              Published on <span className="font-bold">April 25, 2025</span> • 20 MINS
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="text-yellow-500 font-semibold">4.2</span>
              <span>(20 reviews)</span>
            </div>
            <p className="text-sm md:text-base text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quisquam deserunt deleniti culpa quo dolor. Voluptates, obcaecati? Quibusdam, aperiam eligendi.
            </p>
          </div>
            </div>
              </Link>
        </div>

        {/* Right Stories */}
        <div className="md:col-span-12 lg:col-span-3">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Top Stories</h2>
          <div className="flex flex-col gap-5">
            {stories.slice(0, 4).map((story, index) => (
              <div key={index} className="flex gap-4">
                <img
                  className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover"
                  src={story.imge}
                  alt={`Story ${index}`}
                />
                <div className="flex-1 space-y-1">
                  <span className="text-[10px] md:text-xs text-gray-500 uppercase">{story.category}</span>
                  <h3 className="text-sm md:text-base font-semibold text-gray-900 hover:text-[#00a9a0]">
                    <a href="#">{story.title}</a>
                  </h3>
                  <span className="text-[11px] text-gray-400">{story.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
