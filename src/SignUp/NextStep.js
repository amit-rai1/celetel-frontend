import React, { Fragment, useState, useEffect } from 'react'
import './NextStep.css'
import image2 from '../Assets/Group 1000001796.png'
import image3 from '../Assets/image 67.png'
import { useNavigate } from 'react-router-dom'
// import axios from 'axios'

export function NextStep() {

    const navigateToExploreSignup = useNavigate();

    // const [signupData, setSignupData] = useState({
    //     fullName: "",
    //     email: "",
    //     country: "",
    //     phone: 7991238765,
    //     role: "client"
    // });

    const [timer, setTimer] = useState(300);

    useEffect(() => {
        const countdown = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer > 0) {
                    return prevTimer - 1;
                } else {
                    clearInterval(countdown);
                    return 0;
                }
            });
        }, 1000);

        return () => {
            clearInterval(countdown);
        };
    }, []);


    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const handleResendOTP = () => {
        setTimer(300);
    };

    const [showVerifySection, setShowVerifySection] = useState(false);

    const handleVerify = () => {
        setShowVerifySection(true);

        // Show the verify section when the "Verify" button is clicked
    };

    // const handleSignup = async () => {
    //     try {
    //         const response = await axios.post('http://localhost:8600/api/client/signup', signupData);
    //         console.log('Signup successful:', response.data);
    //     } catch (error) {
    //         console.error('Error during signup:', error);
    //     }
    //     
    // };

    const handleClickExplorePage = () => {
        navigateToExploreSignup('/nextstepexplore');
    }

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
                                <input type="text" name="" id="" placeholder='Enter here' required />
                            </div>
                            <div className="input1">
                                <label htmlFor="">Mobile number(optional)</label>
                                <input type="text" name="" id="" placeholder='Enter here' required />
                            </div>
                        </div>
                        <div className="input2">
                            <label htmlFor="">Email address</label>
                            <div className="inputs_new">
                                <input type="email" name="" id="" placeholder='Enter here' required />
                                <button onClick={handleVerify}>Verify</button>
                            </div>
                            {
                                showVerifySection && (
                                    <div className="new_verify">
                                        <div className="verify_now_otp">
                                            <h1>Check your mail</h1>
                                            <img src={image3} alt="" />
                                        </div>
                                        <div className="para_verify">
                                            <p>Please enter the 4 digit verification that we sent to your mail.the code will be valid for next 30 minutes</p>
                                        </div>

                                        <div className="verify_butn">
                                            <input type="text" placeholder='0000' />
                                            <button>Submit</button>
                                        </div>
                                        <div className="verify_butn12">
                                            <p>{formatTime(timer)}</p>
                                            <button onClick={handleResendOTP}>Resend OTP</button>
                                        </div>
                                    </div>
                                )
                            }


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
                            <button onClick={handleClickExplorePage}>Sign up</button>
                            <p>Already have an account?  <a href='12'>Log in</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
