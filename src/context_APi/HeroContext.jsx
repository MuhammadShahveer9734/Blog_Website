import React, { createContext, useContext, useState } from 'react';

const HeroContext = createContext();

export const HeroProvider = ({ children }) => {
  const [activePost, setActivePost] = useState(null);

  return (
    <HeroContext.Provider value={{ activePost, setActivePost }}>
      {children}
    </HeroContext.Provider>
  );
};

export const useHeroContext = () => useContext(HeroContext);
