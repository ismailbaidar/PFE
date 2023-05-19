import React, { useRef } from 'react';
import {Swiper,SwiperSlide} from 'swiper/react'
import i1 from '../../images/logitech-G502-hero.jpg'
import i2 from '../../images/CONFIGUREZ-LE-PC-SETUP-GAME.jpg'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.min.css'
const Slider = () => {
    const prev=useRef()
    const next=useRef()
  return (
    <div  className='sliderBanner' >

      <Swiper
      modules={[Navigation]}
    slidesPerView={1}
    navigation={{
        prevEl: prev.current,
        nextEl: next.current,
    }}
    loop={true}
    centeredSlides={true}
    autoplay={{
        delay: 500,
    }}
    effect="coverflow"
      >

      <SwiperSlide>
      <img src={i1} />
      </SwiperSlide>
      <SwiperSlide>
      <img src={i2} />
      </SwiperSlide>
      <button  className='prev' ref={prev} >{'<'}</button>
      <button className="next" ref={next} >{'>'}</button>
      </Swiper>

    </div>
  );
}

export default Slider;
