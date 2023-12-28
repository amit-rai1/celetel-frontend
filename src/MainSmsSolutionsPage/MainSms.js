import React, { Fragment } from 'react'
import './MainSms.css'
import image1 from '../Assets/New5.gif'
import sms from '../Assets/sms-notification 1.png'
import { GrSubtractCircle } from "react-icons/gr";
import { MdAddCircleOutline } from "react-icons/md";
import work from '../Assets/worky-receiving-a-message-on-a-smartphone.png'
import icon1 from '../Assets/Icon-2.png'
import icon2 from '../Assets/Icon.png'
import icon3 from '../Assets/Icon-1.png'
import icon4 from '../Assets/align-vertically.png'
import icon5 from '../Assets/Icon-4.png'
import icon6 from '../Assets/Icon-3.png'
import { IoIosArrowDown } from "react-icons/io";

export function MainSms() {
    return (
        <Fragment>
            <div className="main_sol_page">
                <h1>SMS Solutions : Where Connectivity Begins</h1>
                <p>Welcome to Celetel's SMS Solutions, where we transform simple
                    text messages into powerful communication tools that connect
                    businesses with their audience like never before. With our suite of
                    SMS services, we provide the foundation for engaging, effective,
                    and efficient messaging strategies.</p>
                <div className="btn2">
                    <button>Request a demo</button>
                    <button>Explore</button>
                </div>
            </div>

            <div className="main_sms">
                <div className="sub_sms">
                    <img src={image1} alt="" />
                </div>
            </div>

            <div className="main_sol_page1">
                <h1>SMS Solutions : Where Connectivity Begins</h1>
                <p>Welcome to Celetel's SMS Solutions, where we transform simple
                    text messages into powerful communication tools that connect
                    businesses with their audience like never before.</p>
                <img src={image1} alt="" />
                <div className="btn2">
                    <button>Request a demo</button>
                    <button>Explore</button>
                </div>
            </div>

            <div className="why_to_all">
                <h2>Why Celetel SMS : Empower Your Reach</h2>
                <p>Celetel SMS is not just about sending messages; it's about unlocking the full potential of your communication strategy. With Celetel as your SMS partner, you empower your reach in ways that go beyond boundaries.</p>

                <p>Celetel SMS is not just about sending messages; it's about unlocking the full potential of your communication strategy.</p>
            </div>

            <div className="speciality_sms">
                <div className="cards">
                    <img src={icon1} alt="" />
                    <h5>Reliability</h5>
                    <p>Count on Celetel for reliable message delivery, every time.</p>
                </div>
                <div className="cards">
                    <img src={icon2} alt="" />
                    <h5>Global Network</h5>
                    <p>Reach audiences worldwide with our expansive network.</p>
                </div>
                <div className="cards">
                    <img src={icon3} alt="" />
                    <h5>Innovation</h5>
                    <p>Stay ahead with cutting-edge SMS solutions.</p>
                </div>
                <div className="cards1">
                    <img src={icon4} alt="" />
                    <h5>Tailored Solutions</h5>
                    <p> We tailor our services to meet
                        your unique needs.</p>
                </div>
                <div className="cards">
                    <img src={icon5} alt="" />
                    <h5>Security</h5>
                    <p>Trust in our secure messaging
                        environment.</p>
                </div>
                <div className="cards">
                    <img src={icon6} alt="" />
                    <h5>Quality Assurance</h5>
                    <p>Expect nothing less than quality and excellence.</p>
                </div>
            </div>

            <div className="security_sms">
                <div className="para_seq">
                    <h1>Elevate Security with Verification</h1>
                    <p style={{ marginTop: '20px', color: '#8A8A8A', fontWeight: '500' }}>Celetel's Verification service ensures seamless and secure
                        authentication. We deliver one-time passwords (OTPs) globally,
                        backed by our extensive network, and offer flexible Multi-Factor
                        Authentication options tailored to your needs. Partner with us to
                        fortify your security effortlessly.</p>
                </div>
                <img src={work} alt="" />
            </div>

            <div className="sms_inte">
                <img src={sms} alt="" />
                <div className="inte_sms_inner">
                    <h1>Seamless SMS Integration in a Snap</h1>
                    <p style={{
                        marginTop: '20px'
                    }}>Join us and effortlessly integrate SMS with our user-friendly API.
                        No credit card needed - sign up, get a test number, and start
                        free testing today. Comprehensive documentation available for
                        Java, PHP, Node, .NET Core, and REST API. Boost your business
                        confidently with us.</p>

                    <button>Request a demo</button>
                </div>
            </div>

            <div className="faq_s">
                <h1>Frequently Asked Questions</h1>
                <p style={{ marginTop: '20px' }}>Everything you need to know about the product and billing </p>
                <div className="faq_s_ques">
                    <div className="faq_q_0">
                        <h5>Is there a free trial available</h5>
                        <p><GrSubtractCircle /></p>
                    </div>
                    <div className="faq_p">
                        <p>Yes , you can try us for free for 30 days. If you want we will provide you with a free
                            personalized 30 minute onboarding call to get you up and running as soon as possible
                        </p>
                    </div>
                    <div className="faq_q_1">
                        <h5>Can I change my plan later?</h5>
                        <p><MdAddCircleOutline /></p>

                    </div>
                    <div className="faq_q_1">
                        <h5>What is your cancellation policy?</h5>
                        <p><MdAddCircleOutline /></p>

                    </div>
                    <div className="faq_q_1">
                        <h5>Can other info be added to an invoice?</h5>
                        <p><MdAddCircleOutline /></p>

                    </div>
                    <div className="faq_q_1">
                        <h5>How does billing work?</h5>
                        <p><MdAddCircleOutline /></p>

                    </div>
                    <div className="faq_q_1">
                        <h5>How do I change my account email?</h5>
                        <p><MdAddCircleOutline /></p>
                    </div>
                </div>
            </div>



            <div className="faq_mob_head">
                <h1>Frequently Asked Questions</h1>
                <p>Everything you need to know about the product and billing </p>
            </div>


            <div className="faq_mob_resp">
                <div className="faq_queries">
                    <div className="faq_quer_s">
                        <p>Is there a free trial available?</p>
                        <p><IoIosArrowDown /></p>
                    </div>
                    <div className="faq_quer_s">
                        <p>In tempor pretium lectus consectetur</p>
                        <p><IoIosArrowDown /></p>
                    </div>
                    <div className="faq_quer_s">
                        <p>How does billing work?</p>
                        <p><IoIosArrowDown /></p>
                    </div>
                    <div className="faq_quer_s">
                        <p>How do I change my account email?</p>
                        <p><IoIosArrowDown /></p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
