import React from "react";
import {Routes, Route, Link} from 'react-router-dom'

const AboutMeComp = () => { 
    return (
        <div className="aboutMe" id="aboutMe">
            <h6><Link className="link" to={"/about"}>ABOUT ME</Link></h6>
            <h1>Who Am I ?</h1>
            <div className="container-aboutMe" >
                <img className="rafid-kamera" src="/rafid-megang-kamera.jpg" alt="rafid-megang-kamera" />
                <p>Hi, I'm Rafid! I'm 21 y/o and I'm from Jakarta. I'm very passionate about photography and filmmaking. I've been a freelance photographer and videographer for 2 years and done varies of projects such as company profiles, weddings, live music, and variety of documented events.</p>
            </div>
        </div>
    )
}

export default AboutMeComp