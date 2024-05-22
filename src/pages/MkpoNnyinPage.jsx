import { Link } from 'react-router-dom';

import './styles/MkpoNnyinPage.css';

import backgroundImage from '../assets/img/mkpo-nnyin-bg.jpg';
import mkpoNyin1 from '../assets/img/mkpo-nnyin-img-1.png';
import mkpoNyin2 from '../assets/img/mkpo-nnyin-img-2.png';
import mkpoNyin3 from '../assets/img/mkpo-nnyin-img-3.jpg';
import mkpoNyin4 from '../assets/img/mkpo-nnyin-img-4.png';

const MkpoNnyinPage = () => {

    return (
        <>
            <div className="container-fluid mkpo-nnyin-bg" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="center-header">
                    <h2 className="pb-2 text-center">Mkpo Nnyin </h2>
                    <p className="text-center">Our Culture & Pride</p>
                </div>
            </div >

            <section className="mkpo-nnyin-1">
                <div className="container">
                    <div className="row justify-content-center gy-3 ">
                        <div className="col-5 col-md-5 ">
                            <Link to="/events"> <img src={mkpoNyin1} alt=""
                                className="img-fluid  mkpo-nnyin-img" />
                            </Link>
                        </div>
                        <div className="col-5 col-md-5">
                            <Link to="/services"> <img src={mkpoNyin2} alt=""
                                className="img-fluid mkpo-nnyin-img" />
                            </Link>
                        </div>
                        <div className="col-5 col-md-5">
                            <Link to="/jobs"> <img src={mkpoNyin3} alt=""
                                className="img-fluid mkpo-nnyin-img" />
                            </Link>
                        </div>
                        <div className="col-5 col-md-5">
                            <Link to="/partners"> <img src={mkpoNyin4} alt=""
                                className="img-fluid mkpo-nnyin-img" />
                            </Link>
                        </div>
                        <div className="centered-div"></div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default MkpoNnyinPage;
