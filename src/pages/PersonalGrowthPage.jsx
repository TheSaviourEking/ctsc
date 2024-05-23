import './styles/PersonalGrowthPage.css';

const PersonalGrowthPage = () => {
    return (
        <section className='PersonalGrowthPage'>
            <section>
                <div className="container-fluid section-container">

                    <div className="row justify-content-center gy-5">
                        <div className="col-11 col-md-6">
                            <div className="quote ">
                                <span className="mb-4"> Jim Rohn</span>
                                <p>"Your life does not get better by <br /> chance, it gets better by change."</p>
                            </div>
                        </div>

                        <div className="col-11 col-md-6 growth">
                            <div>
                                <h1 className="mb-3">PERSONAL </h1><span>GROWTH AND DEVELOPMENT</span>
                                {/* <img src="../assets/img/news-and-stories-img/personal-growth/personal-growth-img-1.jpg" className="img-fluid translate" /> */}
                                <img src="src/assets/personal-growth/personal-growth-img-1.jpg" className="img-fluid translate" />
                            </div>
                        </div>
                    </div>
                    <hr className="mb-5" />
                    <hr />

                </div>
            </section>

            <section>
                <div className="container-fluid" id="personalGrowthWrapper">
                    <div className="row justify-content-around gy-5 ">

                        <div className="col-11 col-md-5 col-lg-4  blog-img">
                            <a href="#"><img src="src/assets/news-and-stories/news-and-stories-img-3.jpg" className="img-fluid" /></a>
                        </div>
                        <div className=" col-11 col-md-5 col-lg-7 blog-detail">
                            <span>4/10/2024 <span className="dot"></span> Udeme E</span>
                            <a href="#">
                                <h3 className="mt-4 mb-5">Digital Detox: How to Reduce Screen Time & Improve Your Well-Being</h3>

                            </a>
                            <p>Dear readers, <br /><br />

                                As you know, one of our major life codes at CTSC is personal growth. We are passionate about our
                                collective
                                growth as a society. <br /><br />

                                However, to achieve this level of growth, we must want the growth for ourselves first.</p>
                            <a href="#" className="read-more">Read More</a>
                        </div>


                        <div className="col-11 col-md-5 col-lg-4  blog-img">
                            <a href="#"><img src="src/assets/news-and-stories/news-and-stories-img-7.jpg" className="img-fluid" /></a>
                        </div>
                        <div className=" col-11 col-md-5 col-lg-7 blog-detail">
                            <span>3/13/24 <span className="dot"></span>Amazing Oty</span>
                            <a href="#">
                                <h3 className="mt-4 mb-4">How to Properly Deal with Negative Reviews as a Business and Brand</h3>
                            </a>
                            <p>Akwa-Ibom business owners have mastered professionalism when dealing with unsatisfied customers. Avoid
                                becoming defensive or engaging in arguments. Respond calmly and professionally, focusing on finding a
                                resolution rather than finding fault and escalating the situation.</p>
                            <a href="#" className="read-more">Read More</a>
                        </div>


                        <div className="col-11 col-md-5 col-lg-4  blog-img">
                            <a href="#"><img src="src/assets/news-and-stories/news-and-stories-img-11.jpg" className="img-fluid"
                                style={{ height: '70%' }} /></a>
                        </div>
                        <div className=" col-11 col-md-5 col-lg-7 blog-detail">
                            <span>3/6/24 <span className="dot"></span>Saviour U</span>
                            <a href="#">
                                <h3 className="mt-4 mb-5">Sink or Swim - Strategies for Navigating the 2024 Harsh Economic Realities</h3>

                            </a>
                            <p>As unbelievable as this may sound to you, there is ALWAYS a group of people who do not feel the same
                                hardship as you probably do. READ THAT AGAIN. No matter how bad the economy gets, they never Sink - they
                                Swim.</p>
                            <a href="#" className="read-more">Read More</a>
                        </div>


                        <div className="col-11 col-md-5 col-lg-4  blog-img">
                            <a href="#"><img src="src/assets/personal-growth/personal-growth-img-2.jpg"
                                className="img-fluid" /></a>
                        </div>
                        <div className=" col-11 col-md-5 col-lg-7 blog-detail">
                            <span>2/28/24 <span className="dot"></span>Saviour U</span>
                            <a href="#">
                                <h3 className="mt-4 mb-5">Financial Freedom: Books to Read and Take Action</h3>

                            </a>
                            <p>We are afraid because we feel ill-prepared financially. If you feel like money doesn’t seem to stay when
                                you have access to it, then you are a financial illiterate. <br /><br />

                                Financial illiteracy has nothing to do with being a graduate or not. It does not care if you completed
                                secondary school or dropped out of primary school. </p>
                            <a href="#" className="read-more">Read More</a>
                        </div>


                        <div className="col-11 col-md-5 col-lg-4  blog-img">
                            <a href="#"><img src="src/assets/personal-growth/personal-growth-img-3.jpg"
                                className="img-fluid" /></a>
                        </div>
                        <div className=" col-11 col-md-5 col-lg-7 blog-detail">
                            <span>2/23/24<span className="dot"></span> Delight P</span>
                            <a href="#">
                                <h3 className="mt-4 mb-5">How to do Minimalist Living in Akwa Ibom</h3>

                            </a>
                            <p>As a minimalist and daughter of the soil, if my answer is 'No' to any of these questions, then I <b> Let It
                                Go</b> and <b>let GOD</b>. I always ask myself these three (3) questions to guide my decision-making as a
                                minimalist. </p>
                            <a href="#" className="read-more">Read More</a>
                        </div>

                        <div className="col-11 col-md-5 col-lg-4  blog-img">
                            <a href="#"><img src="src/assets/personal-growth/personal-growth-img-4.jpg"
                                className="img-fluid" /></a>
                        </div>
                        <div className=" col-11 col-md-5 col-lg-7 blog-detail">
                            <span>2/21/24 <span className="dot"></span>Delight P</span>
                            <a href="#">
                                <h3 className="mt-4 mb-5">Easy Self-Care Routines in Akwa Ibom</h3>

                            </a>
                            <p>In today’s article, allow us to open your eyes to the sweet sweet benefits and explore the self-care
                                routines practiced by our Akwa Ibom brothers and sisters that continue to define better standards of living.
                            </p>
                            <a href="#" className="read-more">Read More</a>
                        </div>


                        <div className="col-11 col-md-5 col-lg-4  blog-img">
                            <a href="#"><img src="src/assets/personal-growth/personal-growth-img-5.jpg"
                                className="img-fluid" /></a>
                        </div>
                        <div className=" col-11 col-md-5 col-lg-7 blog-detail">
                            <span>2/18/24<span className="dot"></span>Star-X</span>
                            <a href="#">
                                <h3 className="mt-4 mb-5">3 Tips To Survive The Heatwave in Akwa Ibom</h3>

                            </a>
                            <p>Ndito Eka, mbok you should exercise caution in this harmattan-induced heatwave due to the heightened risk
                                of dehydration, heat-related illnesses, and discomfort. <br /><br />

                                Practice staying well-hydrated, seeking shade…</p>
                            <a href="#" className="read-more">Read More</a>
                        </div>


                        <div className="col-11 col-md-5 col-lg-4  blog-img">
                            <a href="#"><img src="src/assets/personal-growth/personal-growth-img-6.jpg"
                                className="img-fluid" /></a>
                        </div>
                        <div className=" col-11 col-md-5 col-lg-7 blog-detail">
                            <span>2/16/24<span className="dot"></span>Amazing Oty</span>
                            <a href="#">
                                <h3 className="mt-4 mb-5">Relationship Drama: 10 Ways to Heal (Ado-OK) From Heartbreak</h3>

                            </a>
                            <p>Are you feeling loved and pampered this week? Or are you sad from a recent heartbreak that affected the
                                Valentine’s Day plans in your head? Break ups are tough but what is tougher is your choice of healing or…
                            </p>
                            <a href="#" className="read-more">Read More</a>
                        </div>


                        <div className="col-11 col-md-5 col-lg-4  blog-img">
                            <a href="#"><img src="src/assets/personal-growth/personal-growth-img-7.jpg" className="img-fluid"
                                style={{ height: '60%' }} /></a>
                        </div>
                        <div className=" col-11 col-md-5 col-lg-7 blog-detail">
                            <span>2/7/24<span className="dot"></span>Amazing Oty</span>
                            <a href="#">
                                <h3 className="mt-4 mb-5">Personal Growth: What it Means for us Akwa Ibom People</h3>

                            </a>
                            <p>In today’s article, we are sharing practical steps you can take today to become the person you envision in
                                your future. It is the most common goal-setting model for its simplicity and ease of application. </p>
                            <a href="#" className="read-more">Read More</a>
                        </div>



                    </div>
                </div>
            </section>
        </section>
    )
}

export default PersonalGrowthPage;
