import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Routes, Route, Link} from 'react-router-dom'
import BlogComp from "../components/BlogComp";

const Blog = () => { 
    return (
        <>
            <Navbar /> 

            <BlogComp />

            <Footer /> 
        </>
    )
}

export default Blog