import Image1 from './../assets/img/Team mate  Ima.jpeg';
import Image2 from './../assets/img/Team mate Vicky.jpg';
import Image3 from './../assets/img/Team mate  Ima.jpeg';

import './styles/CtscTeamPage.css';

const CtscTeamPage = () => {
    return (
        <>
            <section>
                <div className="container-fluid">
                    <div className="container pt-10 text-center">
                        <h1 className="text-center ctsc-team-header mt-1">Meet Our Team</h1>
                        <br />
                        <h1>(CTSC ENGINES)</h1>
                    </div>
                </div>
                <br /><br /><br />
                <div className="container container row row-cols-1 row-cols-md-3 g-4 cards">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Ima Sefanang</h5>
                                <p className="card-text"> A key strength of mine is maintaining consistency in writing
                                    style and tone, ensuring a cohesive and professional feel
                                    throughout the magazine. This contributes to a strong and
                                    unified brand image.
                                </p>
                            </div>
                            <div>
                                <img src={Image1} className="card-img-to" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Vicky Jonah</h5>
                                <p className="card-text"> Being proficient in multiple languages, I can contribute to
                                    expanding the magazine's reach by creating content that
                                    resonates with a broader and more diverse audience.
                                </p>
                            </div>
                            <div>
                                <img src={Image2} className="card-img-to" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Andiyangha Udosen</h5>
                                <p className="card-text"> I bring a strong passion for creating compelling and diverse
                                    content, including articles, interviews, and reviews. My goal is
                                    to contribute to the magazine's success by producing engaging
                                    and informative pieces.
                                </p>
                            </div>

                            <div>
                                <img src={Image3} className="card-img-to" alt="..." />
                            </div>
                        </div>
                    </div>

                </div>


                <br /><br /><br /><br />
                <figure className="container">
                    <blockquote className="blockquote">
                        <p className="blockquote-text">
                            “Two are better than one because they have a good return for their
                            labor: If either of them falls down, one can help the other up. But
                            pity anyone who falls and has no one to help them up.”
                        </p>
                    </blockquote>
                    <br /><br />
                    <figcaption className="blockquote-footer">
                        BIBLE <cite title="source-title"></cite>
                    </figcaption>
                </figure>
            </section >
            <br /><br />
        </>
    )
}

export default CtscTeamPage;
