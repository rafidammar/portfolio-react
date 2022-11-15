import React from "react";
import {Routes, Route, Link} from 'react-router-dom'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutMeComp from "../components/AboutMeComp";

const About = () => { 
    return (
        <>
            <Navbar /> 

            <AboutMeComp />
            <br />
            <br />

            <Footer />
        </>
    )
}

export default About