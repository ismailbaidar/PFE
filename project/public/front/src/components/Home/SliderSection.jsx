import React from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useSelector } from "react-redux";
const SliderSection = () => {
    const products = useSelector((state) => state.productReducer.products);
    return (
        <div className="section">
            <div className="ContentE">
                <div className="ContentE-1">
                    <span className="title">DÉPÊCHEZ-VOUS</span>
                    <span className="Mtitle">Profitez de nos promos!!</span>
                </div>
                <div className="filters">
                    <span className="active">TOUS</span>
                    <span>ÉCRANS ET MONITEURS PC</span>
                    <span>PC GAMER AMD RYZEN</span>
                    <span>PC GAMER INTEL</span>
                    <span>SETUP GAMER COMPLET</span>
                </div>
            </div>
            <div className="itemSliderWrapper">
                <div className="slider">
                    {products.map((p) => {
                        return <Card {...p} />;
                    })}
                </div>
            </div>
            {/* <Swiper
    style={{width:'auto',padding:'40px'}}
    spaceBetween={10}
    autoplay={true}
    breakpoints={{640:{
        slidesPerView:2.2
    },
    740:{
        slidesPerView:2.7
    },
    998:{
        slidesPerView:4
    }
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
   <SwiperSlide>
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
   <SwiperSlide>
   <Card />
   </SwiperSlide>
</Swiper> */}
        </div>
    );
};

export default SliderSection;
