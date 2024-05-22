import './styles/OurCulturePage.css';

const OurCulturePage = () => {
    return (
        <section className="interview-cards-section">
            <div className="container">
                <div className="justify-content-center align-items-cente gy-y interview-cards" id="interviewCards">
                    <div className="interview-card">
                        <div className="img-container">
                            <img src="src/assets/news-and-stories/news-and-stories-img-5.jpg" alt="" />
                        </div>
                        <div className="text-container">
                            <div className="card-meta-data">
                                <span className="date">3/8/24</span>
                                <span>Glory J</span>
                            </div>
                            <h3>International Women's Day Exclusive Interview: Akwa-Ibom Women Inspiring Inclusion</h3>
                            <p>Join us and get to know the CEO of Amazing Pot Kitchen as she agrees to give the CTSC crew an
                                exclusive interview into her life as a public figure with a private life on this very
                                International Women’s Day 2024.</p>
                            <p>Her ability to balance business and personal life makes Ms. Francis an outstanding person in
                                society. </p>
                            <a href="#" className="btn">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurCulturePage;
