import designAndCreation from '../assets/img/design-&-creation.png';
import salesAndMarketing from '../assets/img/sales-&-marketing.png';
import photography from '../assets/img/photography.png';
import developmentAndIt from '../assets/img/development-&-it.png';
import finance from '../assets/img/finance.png';
import writing from '../assets/img/writing.png';
import legal from '../assets/img/legal.png';
import repairs from '../assets/img/repairs.png';
import hrPersonnel from '../assets/img/hr-presonnel.png';
import createAccout from '../assets/img/create-account.svg';
import postAJob from '../assets/img/post-a-job.svg';
import hire from '../assets/img/hire.svg';
import feedback from '../assets/img/feedback.svg';

import { Link } from 'react-router-dom';

import './styles/IbomJobsPage.css';

// import Fa
import { FaStar, FaUser } from 'react-icons/fa';
import { FaUserGroup } from 'react-icons/fa6';

import { useEffect, useState } from 'react';
// import API_BASE_URL from '../config/config';

const IbomJobsPage = () => {
    const API_BASE_URL = import.meta.env.VITE_API_URL;
    const [latestJobs, setLatestJobs] = useState([]);
    // const [jobRequirements, setJobRequirements] = useState([]);
    const [viewAllRequirements, setViewAllRequirements] = useState(false);

    let requirements = [];

    useEffect(() => {
        document.title = 'Ibom Jobs - Cracking The Style Code';
    }, [])

    useEffect(() => {
        const getLatestJobs = async () => {
            const response = await fetch(API_BASE_URL + '/latest-job/');
            const fetchedLatestJobs = await response.json();

            setLatestJobs(() => fetchedLatestJobs);
            // setJobRequirements(()=> fetchedLatestJobs.re)
            console.log(fetchedLatestJobs, '--------', latestJobs)
        };
        getLatestJobs();
    }, []);

    useEffect(() => {
        if (!viewAllRequirements) {

        }
    }, [viewAllRequirements])

    return (
        <>
            <div className="container-fluid jobs-hero-header mb-5">
                <div className="container">
                    <div className=" user-icon-div">
                        <span className=""><FaUser /></span>
                    </div>
                    <h1 className="text-center mb-4">AKWA IBOM JOB SEEKERS</h1>
                    <p className="mb-4 text-center">Brush Up on your skills and resume, before you apply. <br />
                        Check your email constantly for Link response after the interview.</p>
                    <div className="text-center " style={{ paddingBottom: 4 + 'em' }}>
                        <Link href="#" className="btn btn-primary d-flex  d-md-inline mx-md-3 mb-3 " style={{ padding: '0.5em 2em' }}>
                            Hire</Link>
                        <Link href="#" className="btn btn-primary d-flex d-md-inline"
                            // comeback
                            style={{ padding: 'o.5em 1.5em', backgroundColor: 'transparent', color: '#253451', fontWeight: 'bold', fontSize: '1.1em', border: '1px solid #253451' }}
                        >
                            Post
                            Link Job</Link>
                    </div>
                </div>
            </div >

            <section>
                <div className="container" style={{ paddingBottom: '7em' }}>
                    <h3 className="mb-4 fw-bold">Browse By Category</h3>
                    <h4 className="jobs-sub-header"> Looking for work?</h4>

                    {/* <div className="row justify-content-md-between justify-content-center gy-5 job-cards"> */}
                    <div className="row job-cards">

                        <div className="col-10 col-md-5 col-lg-3 job-card">
                            <div className="mb-3 first-div">
                                <Link to="/jobs/1">
                                    <h6 className="text-white ">Design and Creative</h6>
                                </Link>
                                <div className="second-div">
                                    <span>
                                        <FaUserGroup />
                                        <p>457 skills</p>
                                    </span>
                                    <span>
                                        {/* <i className="fa-solid fa-star"></i> */}
                                        <FaStar />
                                        <p>5/5</p>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <img src={designAndCreation} className="img-fluid" />
                            </div>
                        </div>

                        <div className="col-10 col-md-5 col-lg-3 job-card">
                            <div className="mb-3 first-div">
                                <Link href="#">
                                    <h6 className="text-white ">Sales and Marketing</h6>
                                </Link>
                                <div className="second-div">
                                    <span>
                                        {/* <i className="fa-solid fa-user-group"></i> */}
                                        <FaUserGroup />
                                        <p>457 skills</p>
                                    </span>
                                    <span>
                                        {/* <i className="fa-solid fa-star"></i> */}
                                        <FaStar />
                                        <p>5/5</p>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <img src={salesAndMarketing} className="img-fluid" />
                            </div>
                        </div>

                        <div className="col-10 col-md-5 col-lg-3 job-card">
                            <div className="mb-3 first-div">
                                <Link href="#">
                                    <h6 className="text-white ">Photography</h6>
                                </Link>
                                <div className="second-div">
                                    <span style={{ marginRight: '2em' }}>
                                        {/* <i className="fa-solid fa-user-group"></i> */}
                                        <FaStar />
                                        <p>457 skills</p>
                                    </span>
                                    <span>
                                        <i className="fa-solid fa-star"></i>
                                        <p>5/5</p>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <img src={photography} className="img-fluid" />
                            </div>
                        </div>

                        <div className="col-10 col-md-5 col-lg-3 job-card">
                            <div className="mb-3 first-div">
                                <Link href="#">
                                    <h6 className="text-white ">Development & IT</h6>
                                </Link>
                                <div className="second-div">
                                    <span>
                                        <i className="fa-solid fa-user-group"></i>
                                        <p>344 skills</p>
                                    </span>
                                    <span>
                                        <i className="fa-solid fa-star"></i>
                                        <p>5/5</p>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <img src={developmentAndIt} className="img-fluid" style={{ paddingBottom: '0.5em' }} />
                            </div>
                        </div>

                        <div className="col-10 col-md-5 col-lg-3 job-card">
                            <div className="mb-3 first-div">
                                <Link href="#">
                                    <h6 className="text-white ">Finance & Accounting</h6>
                                </Link>
                                <div className="second-div">
                                    <span>
                                        <i className="fa-solid fa-user-group"></i>
                                        <p>344 skills</p>
                                    </span>
                                    <span>
                                        <i className="fa-solid fa-star"></i>
                                        <p>5/5</p>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <img src={finance} className="img-fluid" />
                            </div>
                        </div>

                        <div className="col-10 col-md-5 col-lg-3 job-card">
                            <div className="mb-3 first-div">
                                <Link href="#">
                                    <h6 className="text-white ">Writing and Translation</h6>
                                </Link>
                                <div className="second-div">
                                    <span>
                                        <i className="fa-solid fa-user-group"></i>
                                        <p>344 skills</p>
                                    </span>
                                    <span>
                                        <i className="fa-solid fa-star"></i>
                                        <p>5/5</p>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <img src={writing} className="img-fluid" />
                            </div>
                        </div>

                        <div className="col-10 col-md-5 col-lg-3 job-card">
                            <div className="mb-3 first-div">
                                <Link href="#">
                                    <h6 className="text-white ">Legal</h6>
                                </Link>
                                <div className="second-div">
                                    <span style={{ marginRight: '0.2em' }}>
                                        <i className="fa-solid fa-user-group"></i>
                                        <p>457 skills</p>
                                    </span>
                                    <span>
                                        <i className="fa-solid fa-star"></i>
                                        <p>5/5</p>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <img src={legal} className="img-fluid" style={{ paddingBottom: '0.5em' }} />
                            </div>
                        </div>

                        <div className="col-10 col-md-5 col-lg-3 job-card">
                            <div className="mb-3 first-div">
                                <Link href="#">
                                    <h6 className="text-white ">Repairs & Engineering</h6>
                                </Link>
                                <div className="second-div">
                                    <span>
                                        <i className="fa-solid fa-user-group"></i>
                                        <p>457 skills</p>
                                    </span>
                                    <span>
                                        <i className="fa-solid fa-star"></i>
                                        <p>5/5</p>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <img src={repairs} className="img-fluid" />
                            </div>
                        </div>

                        <div className="col-10 col-md-5 col-lg-3 job-card">
                            <div className="mb-3 first-div">
                                <Link href="#">
                                    <h6 className="text-white ">HR Personnel</h6>
                                </Link>
                                <div className="second-div">
                                    <span style={{ marginRight: '0.2em' }}>
                                        <i className="fa-solid fa-user-group"></i>
                                        <p>457 skills</p>
                                    </span>
                                    <span>
                                        <i className="fa-solid fa-star"></i>
                                        <p>5/5</p>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <img src={hrPersonnel} className="img-fluid" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="job-opportunities-section">
                <div className="container">
                    <div className="row justify-content-md-around justify-content-center gy-4">
                        <div className="job-opportunities-header">
                            <h3>Latest Job Opportunities</h3> <Link href="#"><span>See All</span></Link>
                        </div>

                        <div className='container-fluid flex available-jobs'>
                            {latestJobs.length > 0 ? (
                                latestJobs.map(latestJob => {
                                    return (
                                        <div key={latestJob.id} className="col-11 col-md-5 col-lg-4 job-opportunities">
                                            <div className="top-section mb-2">
                                                <div className="div">
                                                    <h5 className="job-title"><i className="fa-solid fa-briefcase"></i> {latestJob.title.toUpperCase()}</h5>
                                                    <p>{latestJob.hiring_company} <span className="job-status">{latestJob.tag}</span></p>
                                                </div>
                                                <div className="circle-bg"></div>
                                            </div>

                                            <div className="bottom-section">
                                                <h5 className="mb-2">Requirements & Skills</h5>
                                                {requirements = latestJob.requirements}
                                                {requirements.split(',').map((requirement, i) => {
                                                    return <h6 key={i}>{requirement}</h6>
                                                })}
                                                {/* <Link to='/'>{viewAllRequirements ? 'view less' : 'view all'}</Link> */}
                                                <Link onClick={() => setViewAllRequirements(r => !r)}>{viewAllRequirements ? 'view less' : 'view all'}</Link>
                                            </div>
                                            <div className="apply-btn">
                                                <Link to='/apply' className="btn btn-primary" style={{ padding: '0em 1em' }}>Apply</Link>
                                            </div>
                                        </div>
                                    )
                                })
                            ) : (
                                <h1>No available job at this time</h1>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="pop-up" id="pop-up">
                    <div className="create-an-account">
                        <span><i className="fa-solid fa-times close" id="close"></i></span>
                        <h3 className="text-center">Create An Account</h3>
                        <p className="text-center">create an account to enjoy all the services <br />without any ads for free!</p>

                        <input type="email" placeholder="Email Address" className="mb-3 form-control" />
                        <input type="password" placeholder="Password" className="form-control mb-2" />
                        <Link href="#" className="btn btn-primary mb-2">Create Account</Link>
                        <p>Already have an Account? <Link href="./login.html">Sign In</Link></p>

                    </div>
                </div>
            </section>

            <section className="create-account-section">
                <div className="container">
                    <h3 className="text-center mb-5">You Link Client? Find the best Talent for your Job</h3>

                    <div className="row justify-content-center mb-5">
                        <div className="col-11 col-md-6">
                            <div className="create-box" id="create-box-1">
                                <div>
                                    <img src={createAccout} className="img-fluid" />
                                </div>

                                <div>
                                    <h3>Create Link Client Account</h3>
                                    <p>You have to create an account with us</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center mb-5">
                        <div className="col-11 col-md-6">
                            <div className="create-box" id="create-box">
                                <div>
                                    <img src={postAJob} className="img-fluid" />
                                </div>

                                <div>
                                    <h3>Post Link Job</h3>
                                    <p>Make Link post of the vacancy or hire from our talent</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-11 col-md-6">
                            <div className="create-box" id="create-box">
                                <div>
                                    <img src={hire} className="img-fluid" />
                                </div>

                                <div>
                                    <h3>Hire Link talent for Work</h3>
                                    <p>Choose your best fit for the Job and and interract</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-11 col-md-4">
                            <Link href="#">
                                <div className="feedback">
                                    <div>
                                        <img src={feedback} className="img-fluid" />
                                    </div>

                                    <div>
                                        <h5>Get Instant <br /> Feedback From us</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <h3 className="text-center">Haven't signed up yet?<Link href="#"> Sign up</Link></h3>

                </div>
            </section>
        </>
    )
}


export default IbomJobsPage;
