import Image1 from './../assets/img/plumbing-services-2.png';
import Image2 from './../assets/img/plumbing-services-3.png';

const AboutUsPage = () => {
    return (
        <>
            <section className='about-us' style={{marginTop: '10rem'}}>
                <div className="container-fluid ">
                    <div className="container-fluid first-about-container">
                        {/* <!-- <div className="first-about-header align-middle"> --> */}
                        <h3 className="text-center mt-1">About Us</h3>
                        <h2 className="text-center first-about-header">
                            Welcome to Our Quirky World
                        </h2>
                        {/* <!-- </div> --> */}
                    </div>

                    <br /><br />
                    <div className="container text-center">
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-11 col-lg-6 mb-4">
                                <div className="about-left-side-box">
                                    <img src={Image1} alt="" className="img-fluid" />
                                </div>
                            </div>

                            <div className="col-md-8 col-11 col-lg-6 mb-4 text-center">
                                <p className="about-text-description-1 text-start">
                                    CTSC is a Digital Magazine that is ripe for this age. It is
                                    birthed out of necessity to get the truth across, avoiding those
                                    with selfish interests alone. Cracking The Style Code aka CTSC
                                    aka CTSCode is a Digital Magazine and Lifeline of information
                                    for the ordinary people of Akwa Ibom state, in southern Nigeria.
                                </p>
                                <p className="about-text-description-2 text-start">
                                    This magazine is owned by the children of ordinary Akwa Ibom men
                                    and women. We watched our parents be fed lies about how our
                                    society and state should function. Today, those piles of lies
                                    have continued to devastate the standard of living for the
                                    average Akwa Ibomite. With CTSCode, we aim to bring the
                                    discussions to what we can all relate.
                                </p>

                                <p className="about-text-description-3 text-start">
                                    The daily struggle of trying to escape the trenches. If you are
                                    not lucky enough to japa, then you are left to fend off the
                                    crumbs of those with access to resources. Cracking The Style
                                    Code is here to shine a light on the strengths of Akwa Ibomites.
                                </p>
                                <p className="about-text-description-4 text-start">
                                    We are here to show ndito eka nyin that together we truly can
                                    lift ourselves out of this hovering darkness of fear, lies,
                                    laziness, and poverty. CTSC may choose to share your story and
                                    talk about your contribution to our society and people. You
                                    might talk about your origin story, and your team, highlight
                                    awards or recognitions, etc. The way you tell your story online
                                    can make all the difference in encouraging a yearning soul.
                                </p>

                                <div className="about-right-side-box">
                                    <img src={Image2} alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br /><br /><br />
        </>
    )
}

export default AboutUsPage;
