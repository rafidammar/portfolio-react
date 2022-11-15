import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import AboutMeComp from "../components/AboutMeComp";
import PortfolioComp from "../components/PortfolioComp";
import BlogComp from "../components/BlogComp";

const Home = () => {

    return (
        <>
            <Navbar /> 

            <Hero />
            <AboutMeComp />
            <PortfolioComp />
            <BlogComp />

            <Footer /> 
        </>
    )
}

export default Home