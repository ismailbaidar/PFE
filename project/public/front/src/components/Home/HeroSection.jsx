import React from 'react';
import ListCategories from './ListCategories';
import SliderAndContent from './SliderAndContent';

const HeroSection = () => {
  return (
    <div className='hero' >
      <ListCategories  />
      <SliderAndContent/>
    </div>
  );
}

export default HeroSection;
