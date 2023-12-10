import React, { Fragment } from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

import './SignUp.css'
import image1 from '../Assets/Group 1000001796.png'
import { Link, useNavigate } from 'react-router-dom';

export function SignUp() {


    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get('https://api.countrystatecity.in/v1/countries');
                setCountries(response.data);
            } catch (error) {
                console.error('Error fetching country data:', error);
            }
        };

        fetchCountries();
    }, []);
    const navigateToNextStep = useNavigate();

    function handleClickNextStep() {
        navigateToNextStep('/nextstep');
    }

    return (
        <Fragment>
            <div className="main_signup">
                <div className="sub_side_signup">
                    <h3>Manage your Digital Identify</h3>
                    <p>Tell us more about your workspace so we can provide you a personalised experience tailored to your needs and preferences</p>
                    <img src={image1} alt="" />
                </div>

                <div className="sub_signup_form">
                    <div className="input_fields">
                        <p>Select country</p>
                        <select name="country" id="country">
                            <option value="" disabled selected hidden>
                                Select a country
                            </option>
                            {countries.map((country) => (
                                <option key={country.cca2} value={country.name.common}>
                                    {country.name.common}
                                </option>
                            ))}
                        </select>
                        <div className="btn15_steps">
                            <button onClick={handleClickNextStep}>Next</button>
                        </div>
                        <p className='para_23'>Already have an account ? <Link to={'/login'}>Login</Link></p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
