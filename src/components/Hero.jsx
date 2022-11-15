import React from "react";

const Hero = () => { 
    return (
        <>
            <div className="hero">
                <div className="detail">
                    <div className="container-1">
                        <p>Hello, I'm</p>
                        <h1><span>Rafid</span> Ammar.</h1>
                        <a href="https://www.instagram.com/rafidammarr/">Contact Me</a>
                    </div>
                    <div className="container-2">
                        <img className="hero-img" src="/src/assets/rafid formalnobg2.png" alt="rafid-img" />
                    </div>
                    <div className="container-3">
                        <p className="intro">I'm a</p>
                        <h1 className="jobdesk">Videographer, Photographer.</h1>
                        <p className="intro-desc">This is my Portofolio page where you can see all of my work.</p>
                    </div>
                </div>
            </div>
        </>
            
    )
}

export default Hero