import validator from 'validator';
import { useEffect, useState } from 'react';

import './NewsLetter.css';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewsLetter = () => {
    const [userDetails, setUserDetails] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    const [errors, setErrors] = useState({});
    const [safeDetails, setSafeDetails] = useState(false);

    const API_BASE_URL = import.meta.env.VITE_API_URL;
    useEffect(() => {
        if (safeDetails) {
            (async function () {
                const { firstName, lastName, email } = userDetails;
                const request = await fetch(`${API_BASE_URL}/newsletter/`, {
                    method: 'POST',
                    headers: {
                        // 'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        first_name: firstName, last_name: lastName, email_address: email
                    })
                });
                const response = await request.json();
                if (request.ok) {
                    setUserDetails((prevDetails) => ({ ...prevDetails, firstName: '', lastName: '', email: '' }));
                }
                toast(response);
            })();
        }
    }, [safeDetails]);

    const fixErrors = () => {
        const newErrors = validateInput(userDetails);
        setErrors(newErrors);
    }
    const handleFirstNameChange = (event) => {
        fixErrors();
        setUserDetails((prevDetails) => ({ ...prevDetails, firstName: event.target.value }));
    };

    const handleLastNameChange = (event) => {
        setUserDetails((prevDetails) => ({ ...prevDetails, lastName: event.target.value }));
        fixErrors();
    };

    const handleEmailChange = (event) => {
        setUserDetails((prevDetails) => ({ ...prevDetails, email: event.target.value }));
        fixErrors();
    };

    const validateInput = (inputData) => {
        const errors = {};
        if (!validator.isEmail(inputData.email)) {
            errors.email = 'Invalid email address';
        }
        if (!validator.isLength(inputData.firstName, { min: 2, max: 30 })) {
            errors.firstName = 'First name must be between 2 and 30 characters';
        }
        if (!validator.isLength(inputData.lastName, { min: 2, max: 30 })) {
            errors.firstName = 'First name must be between 2 and 30 characters';
        }
        // Add more validation rules as needed
        return errors;
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const inputData = {
            firstName: userDetails.firstName,
            lastName: userDetails.lastName,
            email: userDetails.email
        };
        const errors = validateInput(inputData);
        if (Object.keys(errors).length > 0) {
            // console.log(errors);
        } else {
            setSafeDetails(() => true);
        }
    };


    return (
        <section className="container-fluid signup-section">
            <div className="container content-section">
                <h3 className="text-center mb-1">We Do This For Us</h3>
                <p className="text-center mb-2">Sign up with your email address to receive a summary of <br /> all weekly publications
                    in one slick love letter</p>
            </div>

            <div className="row justify-content-center">
                <div className="col-10 col-md-6">

                    <form id="signupForm" className="signup" onSubmit={(e) => handleFormSubmit(e)}>
                        <div className="input-wrapper">
                            {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span>}
                            <input type="text" onChange={(e) => handleFirstNameChange(e)} value={userDetails.firstName} id="first-name" className="form-control input-style mb-4" placeholder="Enter your first name"
                                required />
                            {/* <span id="firstNameError" className="error"></span> */}

                            {errors.lastName && <div style={{ color: 'red' }}>{errors.lastName}</div>}
                            <input type="text" onChange={(e) => handleLastNameChange(e)} value={userDetails.lastName} id="last-name" className="form-control input-style mb-4" placeholder="Enter your last name"
                                required />
                            {/* <span id="lastNameError" className="error"></span> */}

                            {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                            <input type="email" onChange={(e) => handleEmailChange(e)} value={userDetails.email} id="email" className="form-control input-style mb-4" placeholder="Enter your email address"
                                required />

                            <button type="submit" className="button btn-primary signup-btn">Shine Your Light</button>
                        </div>
                    </form>

                </div>
            </div>
        </section >
    )
}

export default NewsLetter;
