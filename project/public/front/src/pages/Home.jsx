import React from 'react';
import HeroSection from '../components/Home/HeroSection'
import SliderSection from '../components/Home/SliderSection'
import CategorieItems from '../components/Home/CategorieItems'
import SectionProducts from '../components/Home/SectionProducts'
import SliderSection from '../components/Home/SliderSection'
import SectionProducts from '../components/Home/SectionProducts'
 const Home = () => {
  return (
    <>
    <HeroSection/>
    <Slider/>
    <SliderSection/>
    <CategorieItems/>
    <SectionProducts/>
    <SliderSection/>
    <SectionProducts switchSection={true}/>
    </>
  );
}

export default Home;


