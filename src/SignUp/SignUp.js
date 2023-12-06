import React, { Fragment } from 'react'
import './SignUp.css'
import image1 from '../Assets/Group 1000001796.png'
import { useNavigate } from 'react-router-dom';

export function SignUp() {
    const navigateToNextStep = useNavigate();

    function handleClickNextStep() {
        navigateToNextStep('/nextstep');
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
                        <select name="Enter here" id="Enter here" >
                            <option value="" disabled selected hidden>Enter here</option>
                            <option value="option1">Option 1</option>
                        </select>
                        <div className="btn15">
                            <button onClick={handleClickNextStep}>Next</button>
                        </div>
                        <p className='para_23'>Already have an account ? <a href="#12">Login</a></p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
