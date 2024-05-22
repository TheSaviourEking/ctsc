import './styles/IbomPartners.css';

import Image1 from '../assets/img/ibom-partners-1.png';
import Image2 from '../assets/img/ibom-partners-2.png';
import Image3 from '../assets/img/ibom-partners-3.png';
import Image4 from '../assets/img/ibom-partners-4.png';

const IbomPartnersPage = () => {
    return (
        <>
            <div className="container mb-8">
                <div className="text-center ibom-partners-hd">
                    <h2 className="text-center ">
                        Ibom Partners
                    </h2>
                </div>

                <div className="row justify-content-center gy-4 ">
                    <div className="col-10 col-md-10 col-lg-5 about-partners mt-5">
                        <p className="mb-md-5 mb-3">These are the partners whose services we trust. These are Businesses owned
                            by good
                            Akwa Ibomites operating within Akwa Abasi Ibom who are serving the people of our great state
                            without trying to be greedy and unkind to others in need.</p>

                        <p className="mb-md-5 mb-3">CTSC Partners will offer honest and professional services to you at your
                            doorstep or
                            your point
                            of need without scamming you or putting your life and property at risk.</p>
                        <p className="mb-md-5 mb-3">We understand that things are hard in the country, but we cannot make them
                            harder by
                            distrusting even the good guys who just want to help.
                            If you want to become a partner, contact us.</p>

                        {/* <a href="#" className="btn btn-primary mt-md-5 md-3">Join Our List Of <br /> Partners</a> */}
                    </div>
                    <div className="col-10 col-md-6 col-lg-3 mt-md-5 ">
                        <img src={Image1} className="img-fluid mb-4" />
                        <img src={Image2} className="img-fluid" />
                    </div>

                    <div className="col-10 col-md-6 col-lg-3 ">
                        <img src={Image3} className="img-fluid mb-4" />
                        <img src={Image4} className="img-fluid" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default IbomPartnersPage;
