import React, { useEffect } from "react";
import HeroSection from "../components/Home/HeroSection";
import SliderSection from "../components/Home/SliderSection";
import CategorieItems from "../components/Home/CategorieItems";
import SectionProducts from "../components/Home/SectionProducts";
import Slider from "../components/Home/Slider";
import "../styles/Home.css";
import { useDispatch } from "react-redux";
import { getProducts } from "../features/productSlice";
import ToUpButton from "../components/Tools/ToUpButton";
const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, []);
    return (
        <>
            <HeroSection />
            <Slider />
            <SliderSection />
            <CategorieItems />
            <SectionProducts />
            <SliderSection />
            <SectionProducts switchSection={true} />
            <ToUpButton />
        </>
    );
};

export default Home;
