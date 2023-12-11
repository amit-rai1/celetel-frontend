import React, { Fragment, useState,useEffect } from 'react'
import './NextStep.css'
import image2 from '../Assets/Group 1000001796.png'
import { useNavigate, useLocation } from 'react-router-dom'

import { signUpClient } from '../Service/auth.service'

export function NextStep() {


    const location = useLocation();
    console.log(location,"location")
    const { selectedCountry } = location .state|| {};
    console.log(selectedCountry,"selectedCountry")
    const navigateToExploreSignup = useNavigate()

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        country:""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleClickNextStepExplore = async () => {
        try {
            console.log('Form Data:', formData);
            console.log('Selected Country:', selectedCountry);

            const response = await signUpClient({ ...formData, country: selectedCountry });
            console.log(response);
            alert("signup successfully");
            navigateToExploreSignup('/nextstepexplore');
        } catch (error) {
            console.error('Error during sign up:', error.message);
        }
    };



    // const handleClickNextStepExplore = () => {
    //     navigateToExploreSignup('/nextstepexplore')
    // }

    return (
        <Fragment>
            <div className="main_signup">
                <div className="sub_side_signup">
                    <h3>Manage your Digital Identify</h3>
                    <p>Tell us more about your workspace so we can provide you a personalised experience tailored to your needs and preferences</p>
                    <img src={image2} alt="" />
                </div>

                <div className="sub_signup_form12">
                    <div className="input_fields12">
                        <h4>Sign up now</h4>
                        <div className="main_inputs_f">
                            <div className="input1">
                                <label htmlFor="">Full name</label>
                                <input type="text" name="fullName" id="fullName" placeholder='Enter here'
                                    value={formData.fullName}
                                    onChange={handleChange}

                                />
                            </div>
                            <div className="input1">
                                <label htmlFor="">Mobile number(optional)</label>
                                <input type="text" name="phone" id="phone" placeholder='Enter here'

                                    value={formData.phone}
                                    onChange={handleChange}

                                />
                            </div>
                        </div>
                        <div className="input2">
                            <label htmlFor="">Email address</label>
                            <div className="inputs_new">
                                <input type="email" name="email" id="email" placeholder='Enter here'

                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <button>Verify</button>
                            </div>
                        </div>
                        <div className="new_terms_c">
                            <input type="checkbox" name="" id="" />
                            <p>By creating an account , i agree to our  <a href="12">Terms of use</a> and <a href="12">Privacy policy</a></p>
                        </div>
                        <div className="new_terms_c1">
                            <input type="checkbox" name="" id="" />
                            <p>By creating an account,i am also consenting to receive SMS messages and emails,including product new feature updates,events, and marketing promotions.</p>
                        </div>
                        <div className="btn_sign">
                            <button onClick={handleClickNextStepExplore}>Sign up</button>
                            <p>Already have an account?  <a href='12'>Log in</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
