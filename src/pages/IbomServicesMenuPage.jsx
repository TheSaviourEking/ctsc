import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import API_BASE_URL from "../config/config";

import './styles/IbomServicesMenuPage.css';

const IbomServicesMenuPage = () => {

    const [services, setServices] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const getServices = async (page) => {
            let response = await fetch(`${API_BASE_URL}/service/`);
            if (page > 1) {
                response = await fetch(`${API_BASE_URL}/service/?page=${page}`);
            }
            const fetchedServices = await response.json();
            setServices(fetchedServices); // Update state with fetched data
            console.log(fetchedServices, "fetchedServices");
        };
        getServices(currentPage);
    }, [currentPage]);

    const handleNextClick = async () => {
        if (services.next) {
            const nextPage = currentPage + 1;
            setCurrentPage(() => nextPage);
        }
    };

    const handlePreviousClick = async () => {
        if (services.previous) {
            const prevPage = currentPage - 1;
            setCurrentPage(() => prevPage);
        }
    };

    return (
        <>
            <section className="ibom-services">

                <div className="container-fluid background-color">
                    <div className="container ">
                        <h1 className="text-center">IBOM SERVICES</h1>
                        <p className="text-center">Find Services Near You</p>
                    </div>
                </div>


                {/* <!-- <div className="container-fluid"> --> */}
                <div className="container">
                    {services && services.count > 0 ?
                        <div className="service-menu">
                            <div className="row justify-content-center services-container">
                                {services.results.map((service) => {
                                    return <Link key={service.service_id} to={`/services/${service.service_id}`} className="col-10 col-md-12 service-card align-items-center justify-content-center">{service.service_name}</Link>
                                })}
                            </div>
                            <div className="container-sm" id="btns">
                                {services.previous && <Link to='#' onClick={handlePreviousClick}>Prev</Link>}
                                {services.next && < Link to='#' onClick={handleNextClick}>Next</Link>}
                            </div>
                        </div> : <h1>No services available at this moment</h1>
                    }
                </div>
            </section >
        </>
    )
}

export default IbomServicesMenuPage;
