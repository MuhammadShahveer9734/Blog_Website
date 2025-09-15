import React from 'react';

const Poster = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      {/* Poster Container with 3D effect */}
      <div className="relative max-w-md mx-auto rounded-lg overflow-hidden shadow-lg group perspective">
        {/* Image Background */}
        <img
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
          alt="Poster Background"
          className="w-full h-64 object-cover transition-all duration-500  group-hover:rotate-3d"
        />
        
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-all duration-300 group-hover:from-black/90 group-hover:to-transparent" />
        
        {/* Content */}
        <div className="absolute bottom-0 p-6 text-white z-10 bg-gradient-to-t from-black/90 w-full">
          <h2 className="text-3xl font-bold mb-4 text-center group-hover:text-[#00a9a0] transition-colors duration-300">
            Amazing Adventure Awaits
          </h2>
          <p className="text-sm text-center text-gray-200 mb-6">
            Embark on a journey of a lifetime. Discover new worlds and create memories that will last forever.
          </p>
          
          {/* Button */}
          <div className="flex justify-center">
            <button className="px-8 py-3 bg-[#00a9a0] text-white font-semibold rounded-full shadow-lg hover:bg-[#f8931f] transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster;
