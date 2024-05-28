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
import LatestJobsCard from '../components/LatestJobsCard';

import Spinner from '../components/Spinner';

const API_BASE_URL = import.meta.env.VITE_API_URL;

const IbomJobsPage = () => {
    const [latestJobs, setLatestJobs] = useState([]);
    const [categories, setCategories] = useState([]);
    const [categoryLoading, setCategoryLoading] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = 'Ibom Jobs - Cracking The Style Code';
    }, [])

    useEffect(() => {
        const getLatestJobs = async () => {
            try {
                const response = await fetch(API_BASE_URL + '/latest-job/');
                const fetchedLatestJobs = await response.json();

                setLatestJobs(() => fetchedLatestJobs);
                console.log(fetchedLatestJobs, '--------', latestJobs)
            } catch (error) {
                console.error('ERROR:', error);
            } finally {
                setLoading(() => false);
            }
        };
        getLatestJobs();
    }, []);

    useEffect(() => {
        const getCategories = async () => {
            try {
                const response = await fetch(API_BASE_URL + '/job-categories/');
                const fetchedCategories = await response.json();

                setCategories(() => fetchedCategories);
                console.log(fetchedCategories, '_________');
            } catch (error) {
                console.error('ERROR:', error)
            } finally {
                setCategoryLoading(() => false);
            }
        }

        getCategories();
    }, [])


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
                        <Link to="/jobs/add" className="btn btn-primary d-flex d-md-inline"
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

                        {categoryLoading ? (
                            <Spinner loading={categoryLoading} />
                        ) : (
                            categories.length > 0 ? (
                                categories.map((category, index) => (
                                    <Link key={index} to={`/jobs/${category.category}`} className="col-10 col-md-5 col-lg-3 job-card">
                                        <div className="mb-3 first-div">
                                            <h6 className="text-white ">{category.category}</h6>
                                            <div className="second-div">
                                                <span>
                                                    <FaUserGroup />
                                                    <p>{category.count} {category.count > 1 ? 'skills' : 'skill'}</p>
                                                </span>
                                                <span>
                                                    <FaStar />
                                                    <p>5/5</p>
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            <img src={designAndCreation} className="img-fluid" />
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <h1>No categories available</h1>
                            )
                        )}

                        {/* <div className="col-10 col-md-5 col-lg-3 job-card">
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
                                        <FaStar />
                                        <p>5/5</p>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <img src={designAndCreation} className="img-fluid" />
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>

            <section className="job-opportunities-section">
                <div className="container">
                    <div className="row justify-content-md-around justify-content-center gy-4">
                        <div className="job-opportunities-header">
                            <h3>Latest Job Opportunities</h3> <Link href="#"><span>See All</span></Link>
                        </div>

                        {loading ? (
                            <Spinner loading={loading} />
                        ) : (
                            <div className='container-fluid flex available-jobs'>
                                {latestJobs.length > 0 ? (
                                    latestJobs.map(latestJob => {
                                        return (
                                            <LatestJobsCard key={latestJob.id} job={latestJob} />
                                        )
                                    })
                                ) : (
                                    <h1>No available job at this time</h1>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </section >

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

                    <h3 className="text-center">Haven't signed up yet?<Link to="/signup"> Sign up</Link></h3>

                </div>
            </section>
        </>
    )
}

export default IbomJobsPage;
