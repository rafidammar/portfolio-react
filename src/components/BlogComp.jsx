import React from "react";
import {Routes, Route, Link} from 'react-router-dom'
import EmailSubmit from "./EmailSubmit";

const BlogComp = () => { 
    return (
        <>
            <div className="blog" id="blog">
                <div className="text-center my-5">
                <h6><Link className="link" to={"/blog"}>BLOGS</Link></h6>
                    <h1>My Latest Articles</h1>
                <hr />
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card mb-5 shadow-sm">
                            <img src="/src/assets/blog1.jpg" className="img-fluid" />
        
                            <div className="card-body">
                                <div className="card-title">
                                    <h2>UFOFEST 2022 : 7 Billion Sides</h2>
                                </div>

                                <div className="card-text">
                                    <p>
                                        UPN Fotografi dan Videografi (UFO) Veteran Jakarta kembali menyelenggarakan pameran offline setelah dilanda pandemi Covid-19 sejak tahun 2020. Tema yang diangkat pada ...
                                    </p>
                                </div>
                                
                                <Link className="btn btn-outline-light rounded-2 float-end" to={"/blog"}>Read More</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card mb-5 shadow-sm">
                            <img src="/src/assets/blog2.jpg" className="img-fluid" />
                
                            <div className="card-body">
                                <div className="card-title">
                                    <h2>UFOBetter</h2>
                                </div>

                                <div className="card-text">
                                    <p>
                                        UFO Better merupakan acara gabungan dari UFO Gathering yang sempat tidak terlaksana dikarenakan adanya pandemi covid-19. Semenjak adanya pandemi covid-19 diberlakukannya PPKM yang membuat ...
                                    </p>
                                </div>

                                <Link className="btn btn-outline-light rounded-2 float-end" to={"/blog"}>Read More</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card mb-5 shadow-sm">
                            <img src="/src/assets/blog3.jpg" className="img-fluid" alt="blog-3" />
        
                            <div className="card-body">
                                <div className="card-title">
                                    <h2>UFOFEST 2021 : Cerita Kita</h2>
                                </div>

                                <div className="card-text">
                                    <p>
                                        UPN Fotografi dan Videografi “Veteran” Jakarta menyelenggarakan Pameran UFOFEST 2021 dengan tema “Cerita Kita”.  Pameran UFOFEST 2021 mengambil 4 sub tema yaitu Isu Sosial, Emosi, Budaya, dan Lingkungan Hidup. ...
                                    </p>
                                </div>

                                <Link className="btn btn-outline-light rounded-2 float-end" to={"/blog"}>Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        <EmailSubmit />
        </>
        
    )
}

export default BlogComp