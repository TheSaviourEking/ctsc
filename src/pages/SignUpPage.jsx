import logo from './../assets/img/ctsc-logo.png';
import google from './../assets/img/google-icon.png';

import './styles/SignUpPage.css';

const SignUpPage = () => {

    return (
        <>
            <div className="container-fluid sign-up-hd">
                <div className="text-center ">
                    <h1 className="text-center ">
                        Let's Get You On board
                    </h1>
                </div>
            </div>

            <div className="container sign-up-bg">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-7 sign-up-card">
                        <div className="ctsc-signup-logo mb-3">
                            <img src={logo} className="img-fluid" />
                        </div>
                        <h3 className="text-center mb-4"> Create an account</h3>

                        {/* <!-- CREATE ACCOUNT WITH GOOGLE --> */}
                        <div className="text-center mb-4 google-account">
                            <p>create account with Google</p>
                            <div>
                                {/* <img src={google} width="25px" /> */}
                                <img src={google} className='img-fluid' />
                            </div>
                        </div>

                        {/* <!-- demacation line --> */}
                        <div className="line mb-4"> <span></span> Or <span></span></div>

                        {/* <!-- FORM CONTAINER --> */}
                        <div className="form-container">
                            <div className="form-input">
                                <label htmlFor="emailAddress" className="mb-2">Email Address</label>
                                <input type="email" id="emailAddress" required className="form-control mb-4"
                                    placeholder="Enter your email address" />
                            </div>

                            <div className="form-input">
                                <label htmlFor="fullName" className="mb-2">Full Name</label>
                                <input type="text" id="fullName" required className="form-control mb-4"
                                    placeholder="Enter your full name" />
                            </div>

                            <div className="form-input">
                                <label htmlFor="password" className="mb-2">Password</label>
                                <input type="password" id="password" required className="form-control mb-4"
                                    placeholder="create your password" />
                            </div>

                            <a href="#" className="btn btn-primary text-center"> create an account</a>
                            <p className="text-center mt-3 mb-4"> Already have an account? <span>
                                <a href="../login.html">Login</a></span></p>
                            <div className="text-center">
                                <span><a href="#"><i className="fa-brands fa-facebook"></i></a></span>
                                <span><a href="#"><i className="fa-brands fa-twitter"></i></a></span>
                                <span><a href="#"><i className="fa-brands fa-instagram"></i></a></span>
                                <span><a href="#"><i className="fa-brands fa-linkedin"></i></a></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container-fluid end-bg">
            </div>
        </>
    )
}

export default SignUpPage;
