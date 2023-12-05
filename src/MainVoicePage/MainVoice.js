import './MainVoice.css'
import React, { Fragment } from 'react'
import image1 from '../Assets/Untitled design.gif'
import image2 from '../Assets/communication _ voice, message, memo, record, microphone, conversation 1.png'
import { BiMessageDetail } from "react-icons/bi";
import { SlGraph } from "react-icons/sl";
import { LuUsers } from "react-icons/lu";
import { FaPencil } from "react-icons/fa6";
import { PiDropboxLogo } from "react-icons/pi";
import { IoIosSettings } from "react-icons/io";
import image3 from '../Assets/OBJECT (1).png'
import image4 from '../Assets/New6.jpg'


export function MainVoice() {
    return (
        <Fragment>
            <div className="main_sol_page10">
                <h1>A complete voice solution from a single provider</h1>
                <p>Implementing IVR solutions is indispensable for enterprises
                    aspiring to augment their customer service capabilities.
                    These sophisticated systems enable streamlined and
                    seamless customer interactions through voice and touch-
                    tone inputs.</p>
                <div className="btn2">
                    <button>Request a demo</button>
                    <button>Explore</button>
                </div>
            </div>
            <div className="main_sms1">
                <div className="sub_sms1">
                    <img src={image1} alt="" />
                </div>
            </div>


            <div className="main_sol_page12">
                <h1>The Future of Enhanced Communication</h1>
                <p>Welcome to Celetel's RCS (Rich Communication  Services) page, where we explore the exciting world of modern communication. RCS is a game-changer in the realm of mobile messaging.</p>
                <img src={image1} alt="" />
                <div className="btn2">
                    <button>Request a demo</button>
                    <button>Explore</button>
                </div>
            </div>

            <div className="our_goal">
                <div className="goal_para">
                    <h1>We Are Focus On Your Ultimate Goal</h1>
                    <p>An enim nullam tempor sapien gravida donec enim ipsum
                        porta justo congue magna at pretium</p>
                    <div className="new_1_goal_fea">
                        <div className="goal_new_fea">
                            <h4>Automatic Time Tracking</h4>
                            <p style={{ marginTop: '10px' }}>Time Tracking is never been easier</p>
                        </div>
                        <div className="goal_new_fea">
                            <h4>Customizable Dashboard</h4>
                            <p style={{ marginTop: '10px' }}>Time Tracking is never been easier</p>
                        </div>
                        <div className="goal_new_fea">
                            <h4>Statistics Retroactively</h4>
                            <p style={{ marginTop: '10px' }}>Time Tracking is never been easier</p>
                        </div>
                    </div>
                </div>
                <div className="sub_goal">
                    <img src={image2} alt="" />
                </div>
            </div>

            <div className="head_transform_img">
                <h1>Transform Your Business with Voice Solutions</h1>
                <p style={{ marginTop: '15px' }}>Experience the power of voice solutions and revolutionize your business. enhance customer <br /> experience, and strengthen your brand image with our cutting-edge voice solutions.</p>
            </div>
            <div className="speciality_sms">
                <div className="cards">
                    <p style={{ backgroundColor: '#E9EDFF', padding: '15px 15px' }}><BiMessageDetail style={{ color: '#5093FB' }} /></p>
                    <h5>Enhanced Customer</h5>
                    <p>Personalized interactions, seamless navigation, and 24/7 accessibility.
                    </p>
                </div>
                <div className="cards">
                    <p style={{ backgroundColor: '#E9EDFF', padding: '15px 15px' }}><SlGraph style={{ color: '#5093FB' }} /></p>
                    <h5>Cost Savings</h5>
                    <p>Automation, streamlined processes, and reduced manual intervention.
                    </p>
                </div>
                <div className="cards">
                    <p style={{ backgroundColor: '#E9EDFF', padding: '15px 15px' }}><LuUsers style={{ color: '#5093FB' }} /></p>
                    <h5>Scalability & Flexibility
                    </h5>
                    <p>Easy adaptation to business growth and peak call volumes.
                    </p>
                </div>
                <div className="cards">
                    <p style={{ backgroundColor: '#E9EDFF', padding: '15px 15px' }}><FaPencil style={{ color: '#5093FB' }} /></p>
                    <h5>Increased Productivity
                    </h5>
                    <p>Efficient call management, reduced handling time, and real-time customer information.</p>
                </div>
                <div className="cards">
                    <p style={{ backgroundColor: '#E9EDFF', padding: '15px 15px' }}><PiDropboxLogo style={{ color: '#5093FB' }} /></p>
                    <h5>Data-Driven Insights</h5>
                    <p>Valuable analytics for decision- making and business growth opportunities</p>
                </div>
                <div className="cards">
                    <p style={{ backgroundColor: '#E9EDFF', padding: '15px 15px' }}><IoIosSettings style={{ color: '#5093FB' }} /></p>
                    <h5>build Brand Image
                    </h5>
                    <p>Consistent branding, professional voice prompts, and improved customer recognition</p>
                </div>
            </div>

            <div className="image_p">
                <img src={image3} alt="" />
            </div>

            <div className="text_area_s">
                <div className="text_1">
                    <h2>How IVR solutions help your business grow?
                    </h2>
                    <p style={{ marginTop: '15px' }}>Implementing IVR solutions is indispensable for enterprises aspiring to augment their customer service capabilities. These sophisticated systems enable streamlined and seamless customer interactions through voice and touch-tone inputs, leading to reduced wait times and automated handling of repetitive tasks.
                    </p>
                </div>
                <div className="text_1">
                    <h2>How OBD solutions help your business grow? </h2>
                    <p style={{ marginTop: '15px' }}>Our proactive communication tool that allows us to reach out to customers efficiently. With OBD, we deliver important messages, gather feedback, and offer personalized support. Stay connected and informed with our automated outbound calls.Experience the power of OBD as we deliver timely updates and valuable information right to your phone.
                    </p>
                </div>
            </div>
            <div className="max_bus">
                <div className="img_bus_max">
                    <img src={image4} alt="" />
                </div>
                <div className="text_para">
                    <h2>Maximize Your Business Reach Customer Interaction with IVR Calling Enhance , Connect, and Convert Your Audience Effortlessly</h2>
                </div>
            </div>
        </Fragment>
    )
}
