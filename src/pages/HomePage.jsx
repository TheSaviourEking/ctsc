import { Link } from "react-router-dom";
import Hero from "../components/Hero";

import FeatureStory from "../components/FeatureStory";
import NewsLetter from "../components/NewsLetter";

import Image1 from '../assets/img/ctsc-img-1.png';
import Image2 from '../assets/img/ctsc-img-2.png';

import './styles/HomePage.css';

import { useEffect, useState } from "react";

import API_BASE_URL from "../config/config";

const HomePage = () => {

    useEffect(() => {
        document.title = 'Cracking the style code - Home of Creativity'
    }, []);

    return (
        <div className="homePage">
            <Hero />
            <section>
                <div className="content-section digital-access">
                    <div className="container">
                        <h2 className="text-center">Digital Accessibility</h2>

                        <p>
                            Cracking The Style Code is accessible to everyone, ensuring a
                            user-friendly experience across various devices. <br />We believe that
                            valuable content should be easily accessible to empower a diverse
                            global audience.
                        </p>

                        <Link to="/contact-us" className=" btn-primary">Ask Anything</Link>
                    </div>
                </div>
            </section>

            <FeatureStory isHome={true} />
            <NewsLetter />

            <section className="crack-the-code">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-10 col-sm-6 left-side">
                            <p className="text-center mb-3">Cracking the style code is not just a publication <br />
                                Nnyin idoho itie uwed mop kpod;</p>

                            <div className="left-side-box">
                                <img src={Image1} className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-10 col-sm-6 right-side">
                            <div className="right-side-box">
                                <img src={Image2} className="img-fluid" />
                            </div>
                            <p>It's a movement for positive change <br /> and empowerement <br /> Ado Isang Eti Ukpogho mkpo
                                ye Isang uwam</p>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage;
