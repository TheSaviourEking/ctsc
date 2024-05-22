import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        /* <!-- This is for the Hero header with the background image --> */
        <div className="container-fluid background-img flex align-items-center" >
            <div className="container " >
                <h1 className="text-center first-header" >Ndito Eka</h1>
                <div className="ctsc-text-box text-center " >
                    <h2 className="second-header text-center" >Witness Our Evolution</h2>
                    <p className="ctsc-text-description" > Inspiring Lives, Defining Standards </p>
                    <Link to='/' className=" btn btn-secondary" >Our Highlights</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero;
