import React, { Fragment } from 'react'
import './MainSms.css'
import image1 from '../Assets/Frame 427319252.svg'
import image2 from '../Assets/HELLU.svg'
import image3 from '../Assets/Bell.svg'
import image4 from '../Assets/mess.svg'
import image5 from '../Assets/Time Circle.svg'
import image6 from '../Assets/Chat Bubble.svg'
import image7 from '../Assets/Chart.svg'
import sms from '../Assets/sms-notification 1.svg'
import { GrSubtractCircle } from "react-icons/gr";
import { MdAddCircleOutline } from "react-icons/md";
import work from '../Assets/worky-receiving-a-message-on-a-smartphone.png'
import icon1 from '../Assets/Icon-2.png'
import icon2 from '../Assets/Icon.png'
import icon3 from '../Assets/Icon-1.png'
import icon4 from '../Assets/align-vertically.svg'
import icon5 from '../Assets/Icon-4.png'
import icon6 from '../Assets/Icon-3.png'
import { IoIosArrowDown } from "react-icons/io";
import { Footer } from '../Footer/Footer'


export function MainSms() {
    return (
        <Fragment>
            <div className="main_sol_page">
                <div className="new_h1_and_svg">
                    <h1>SMS Solutions : Where Connectivity Begins</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="149" height="250" viewBox="0 0 149 250" fill="none">
                        <path d="M161.102 1.30099C182.417 35.0728 193.905 76.4117 158.712 127.497C139.921 154.774 100.177 181.043 73.5403 166.58C55.3989 156.73 40.3229 130.542 66.9465 106.287C96.3464 79.5028 87.6042 140.768 84.8867 147.801C72.1678 180.719 50.02 208.914 19.7692 240.693C8.43741 252.597 18.3017 248.275 28.4118 241.699C37.1839 235.994 47.0473 229.391 54.3601 222.762C56.5905 220.741 39.9239 232.459 37.3685 234.365C26.4103 242.542 13.4829 251.793 7.37309 243.322C6.39161 241.961 -0.643535 228.101 2.77271 225.694C4.55024 224.441 17.9258 228.25 20.1543 228.374C34.6281 229.178 44.8447 226.426 59.9218 217.211" stroke="black" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </div>
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
                <div className="sub_sms_img">
                    <div className="small_imgs">
                        <img src={image2} alt="" />
                        <img src={image3} alt="" />
                        <img src={image4} alt="" />
                    </div>
                    <img src={image1} alt="" />
                </div>
                <div className="sub_sms_message">
                    <div className="cards_interaction">
                        <img src={image5} alt="" />
                        <p>Peerless Audience Interaction</p>
                    </div>
                    <div className="cards_interaction">
                        <img src={image6} alt="" />
                        <p>Superior SMS Delivery Excellence</p>
                    </div>
                    <div className="cards_interaction">
                        <img src={image7} alt="" />
                        <p>Endless Worldwide Growth Potential</p>
                    </div>
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
                <div className="cards">
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
            <Footer />
        </Fragment>
    )
}
