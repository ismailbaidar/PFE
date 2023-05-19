import React from 'react';
import Card from './Card';
import {Swiper,SwiperSlide,} from 'swiper/react'
import {FreeMode} from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SliderAndContent = () => {
  return (
    <div className='SliderAndContent' >
      <div className='SliderAndContent1' >
      <div className={'content'} >
      <h1>Du gaming sans limites</h1>
      <p>
      Rassemblez tous les équipements indispensables pour affronter des joueurs du monde entier.
      </p>
      <button className='btn' >BON PLANS</button>
      </div>
      </div>
      <div className='SliderAndContent2' >
       <Swiper
       style={{width:'auto',padding:'40px'}}
       spaceBetween={95}
       slidesPerView={2}
       autoplay={true}
       breakpoints={{
        500:{
            slidesPerView:1
        },
        640:{
            spaceBetween:90,
            slidesPerView:1.4
        },
        800:{
            slidesPerView:1.6
        },
        1000:{
            slidesPerView:2
        },
        

       }}
       className='slider'
       >
       
       <SwiperSlide >
       <Card />
       </SwiperSlide>
       <SwiperSlide >
      <Card />
      </SwiperSlide>
      <SwiperSlide>
      <Card />
      </SwiperSlide>
      <SwiperSlide>
      <Card />
      </SwiperSlide>
      <SwiperSlide>
      <Card />
      </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
}

export default SliderAndContent;
