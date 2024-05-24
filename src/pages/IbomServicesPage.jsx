import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// import API_BASE_URL from "../config/config";

import './styles/IbomServicesPage.css';

const IbomservicesPage = () => {
    const { serviceId } = useParams();

    const [service, setService] = useState({});

    useEffect(() => {
        const API_BASE_URL = import.meta.env.VITE_API_URL;
        const getService = async () => {
            const response = await fetch(`${API_BASE_URL}/service/${parseFloat(serviceId)}/`);
            const fetchedService = await response.json();

            setService(() => fetchedService);
        }
        getService();
    }, []);

    return (
        service ? (
            <section>
                <div className="container-fluid background-color">
                    <div className="container">
                        <h1 className="text-center Plumber-header-">{service.service_name} SERVICE</h1>

                    </div>
                </div>


                {/* <!-- <div className="container-fluid"> --> */}
                <div className="container">

                    <div className="service-container">
                        <div className="row justify-content-center">
                            {service.talent_profiles && service.talent_profiles.length > 0 ? (
                                service.talent_profiles.map(talent_profile => {
                                    return (
                                        <div key={talent_profile.user.id} className="col-10 col-md-12 service-card">
                                            <div className="service-img">
                                                <img src={talent_profile.profile_picture} className="img-fliud card-img" />
                                            </div>
                                            <div className="details">
                                                <div className="service-details">
                                                    <h3 className="card-title">{talent_profile.user.firstname} {talent_profile.user.lastname}</h3>
                                                    <p className="card-text">{talent_profile.address}. <br /> {talent_profile.phone_number}</p>
                                                    <Link href="#" className="btn btn-primary ">Message {talent_profile.user.firstname}</Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            ) : (
                                <h3>Sorry, no talent is offering this service at this moment</h3>
                            )}

                        </div>
                    </div>



                </div>
            </section>
        ) : (
            <h2>Service not available</h2>
        )
    )
}

export default IbomservicesPage;
