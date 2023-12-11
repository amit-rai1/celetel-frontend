import React, { Fragment } from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

import './SignUp.css'
import image1 from '../Assets/Group 1000001796.png'
import { useNavigate } from 'react-router-dom';

export function SignUp() {

    const [selectedCountry, setSelectedCountry] = useState('');

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get('https://restcountries.com/v3.1/all');
                setCountries(response.data);
            } catch (error) {
                console.error('Error fetching country data:', error);
            }
        };

        fetchCountries();
    }, []);
    const navigateToNextStep = useNavigate();

    function handleCountrySelection(event) {
        const selectedCountry = event.target.value;
        console.log('Selected Country:', selectedCountry); // Log the selected country
        setSelectedCountry(selectedCountry);
    }
    
    function handleClickNextStep() {
        console.log('Selected Country on Next Click:', selectedCountry); // Log the selected country
        navigateToNextStep('/nextstep', { state: { selectedCountry } });
    }

    // async function handleClick() {
    //     const url = 'https://geography4.p.rapidapi.com/apis/geography/v1/country/name/america?sortBy=name&sortOrder=asc&limit=10';
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //             'X-RapidAPI-Key': 'd7c820d940mshc8b4dcb0357c3dcp1fa59cjsn24f2aed3c50f',
    //             'X-RapidAPI-Host': 'geography4.p.rapidapi.com'
    //         }
    //     };

    //     try {
    //         const response = await fetch(url, options);
    //         const result = await response.json();
    //         console.log(result);
    //     }
    //     catch (error) {
    //         console.error(error);
    //     }
    // }

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
                        {/* <select name="Enter here" id="Enter here" >
                            <option value="" disabled selected hidden>Enter here</option>
                            <option value="option1">Option 1</option>
                        </select> */}
                        <select name="country" id="country" onChange={handleCountrySelection}>
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
                        <p className='para_23'>Already have an account ? <a href="#12">Login</a></p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
