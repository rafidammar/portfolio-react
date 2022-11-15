import React from "react";
import {Routes, Route, Link} from 'react-router-dom'
import { useState } from "react";

const Navbar = () => { 

    const [isWhite, setIsWhite] = useState(true)

    const handleClick = (name) => {
        console.log("tes click dari " + name)
    }

    return (
            <nav>
                {/**<Link className={`logo ${isWhite ? "white" : "black"}`} onClick={() => setIsWhite(!isWhite)} to={"/"}>RA</Link> */}
                <Link className={isWhite ? "white" : "black"} onClick={() => setIsWhite(!isWhite)} to={"/"}>RA</Link>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/portfolio"}>Portfolio</Link></li>
                    <li><Link to={"/blog"}>Blog</Link></li>
                </ul>
            </nav>
    )
}

export default Navbar