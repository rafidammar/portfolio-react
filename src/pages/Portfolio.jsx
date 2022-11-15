import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Routes, Route, Link} from 'react-router-dom'
import PortfolioComp from "../components/PortfolioComp";

const Portfolio = () => { 
    return (
        <>
            <Navbar /> 

            <PortfolioComp />

            <Footer /> 
        </>
    )
}

export default Portfolio