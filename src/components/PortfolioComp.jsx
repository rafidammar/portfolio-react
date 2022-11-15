import React from "react";
import {Routes, Route, Link} from 'react-router-dom'

const PortfolioComp = () => { 
    return (
        <>
            <div className="porto" id="porto">
                <h6><Link className="link" to={"/portfolio"}>PORTFOLIO</Link></h6>
                <h1>My Best Collection</h1>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <img
                                className="img-fluid shadow rounded mb-4"
                                src="/images01.jpg"
                                alt="photo-1"
                            />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <img
                                className="img-fluid shadow rounded mb-4"
                                src="/images02.jpg"
                                alt="photo-2"
                            />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <img
                                className="img-fluid shadow rounded mb-4"
                                src="/images03.jpg"
                                alt="photo-3"
                            />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <img
                                className="img-fluid shadow rounded mb-4"
                                src="/images04.jpg"
                                alt="photo-4"
                            />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <img
                                className="img-fluid shadow rounded mb-4"
                                src="/images05.jpg"
                                alt="photo-5"
                            />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <img
                                className="img-fluid shadow rounded mb-4"
                                src="/images06.jpg"
                                alt="photo-6"
                            />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <img
                                className="img-fluid shadow rounded mb-4"
                                src="/images07.jpg"
                                alt="photo-7"
                            />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <img
                                className="img-fluid shadow rounded mb-4"
                                src="/images08.jpg"
                                alt="photo-8"
                            />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <img
                                className="img-fluid shadow rounded mb-4"
                                src="/images09.jpg"
                                alt="photo-9"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default PortfolioComp