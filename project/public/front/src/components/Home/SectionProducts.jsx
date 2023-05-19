import React from 'react';
import InfoSection from './InfoSection';
import Card from './Card';
import CardContainer from './CardContainer';

const SectionProducts = ({switchSection}) => {
  return (
    <div className={`SectionProducts   ${switchSection?'switch':''} `} >
      <InfoSection  />
      <CardContainer/>
    </div>
  );
}

export default SectionProducts;
