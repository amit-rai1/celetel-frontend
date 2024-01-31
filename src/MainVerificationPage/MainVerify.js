import { Fragment } from 'react'
import './MainVerify.css'
import React from 'react'
import img1 from '../Assets/iPhone 13.svg'
import { IoIosArrowRoundForward } from "react-icons/io";
import image43 from '../Assets/Group 1000001721.svg'
import work1 from '../Assets/Traditional Indian Diwali Folded Card in Cream Blue and Green Elegant Style-2 1.svg'
import work2 from '../Assets/Traditional Indian Diwali Folded Card in Cream Blue and Green Elegant Style (1) 1.png'
import { FaGroupArrowsRotate } from "react-icons/fa6";
import image445 from '../Assets/Frame 427319109.png'
import { BsGlobeAmericas } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { IoPieChartOutline } from "react-icons/io5";
import { GrSubtractCircle } from "react-icons/gr";
import { MdAddCircleOutline } from "react-icons/md";
import { Footer } from '../Footer/Footer'



export function Mainverify() {
    return (
        <Fragment>
            <div className="main_sol_page8">
                <h1>The Future of Enhanced Communication</h1>
                <p>Welcome to Celetel's RCS (Rich Communication Services) page, where we explore the exciting world of modern communication. RCS is a game-changer in the realm of mobile messaging.</p>
                <div className="btn2_5">
                    <button>Request a demo</button>
                    <button>Explore</button>
                </div>
            </div>

            <div className="main_sms2">
                <div className="sub_sms2">
                    <img src={img1} alt="" />
                </div>
            </div>

            <div className="main_sol_page9">
                <h1>The Future of Enhanced Communication</h1>
                <p>Welcome to Celetel's RCS (Rich Communication Services) page, where we explore the exciting world of modern communication. RCS is a game-changer in the realm of mobile messaging.</p>
                <img src={img1} alt="" />
                <div className="btn2">
                    <button>Request a demo</button>
                    <button>Explore</button>
                </div>
            </div>


            <div className="build_trus_t">
                <div className="build_in_text">
                    <h1>Building Trust Through Authentication</h1>
                    <p>Elevate security with one-time passwords (OTPs)
                        that provide an additional layer of authentication.
                        Whether you're verifying user identities, authorising
                        transactions, or safeguarding data, Celetel's OTPs
                        are your trusty companions.</p>
                    <button>Learn more <IoIosArrowRoundForward /></button>
                </div>
                <img src={image43} alt="" />
            </div>

            <div className="security_sms12">
                <img src={work1} alt="" />
                <div className="new_para_seq_12">
                    <div className="main_sec_verify">
                        <div className="para_seq12">
                            <h1>Why Choose Celetel for Verification?</h1>
                            <p style={{ marginTop: '20px', color: '#8A8A8A', fontWeight: '500' }}>Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit. Aenean commodo ligula
                                eget dolor. Aenean massa. Cum sociis
                                natoque penatibus et magnis dis parturient
                                montes, nascetur ridiculus.</p>
                        </div>
                        <div className="sub_ver">
                            <p><FaGroupArrowsRotate /></p>
                            <h1>Global Reach</h1>
                            <span>Our services are accessible worldwide, enabling you to verify users and transactions on a global scale.</span>
                        </div>
                        <div className="sub_ver">
                            <p><FaGroupArrowsRotate /></p>
                            <h1>Customization</h1>
                            <span>We understand that every business is unique.
                                Celetel's verification solutions are customisable to
                                align with your specific requirements.
                            </span>
                        </div>
                        <div className="sub_ver">
                            <p><FaGroupArrowsRotate /></p>
                            <h1>Support</h1>
                            <span>Celetel offers dedicated support to ensure your
                                verification processes run smoothly. We're here to
                                assist you at every step.
                            </span>
                        </div>
                        <div className="sub_ver">
                            <p><FaGroupArrowsRotate /></p>
                            <h1>Scalability</h1>
                            <span> Whether you're a startup or an enterprise, Celetel's verification services can scale with your growing business needs.</span>
                        </div>
                    </div>
                </div>
            </div>




            <div className="security_sms13">
                <img src={work2} alt="" />
                <div className="para_seq13">
                    <h1>Looking for more? Our Conversation</h1>
                    <p style={{ marginTop: '20px', color: '#8A8A8A', fontWeight: '500' }}>API extends
                        engagement to the next level!
                        Connect with customers on the most widely used
                        messaging channels using a unified interface! SMS,
                        WhatsApp, Facebook Messenger, Viber, and more -
                        our Conversation API covers it all.</p>
                    <button>Request a demo</button>
                </div>
            </div>

            <div className="main_achieve">
                <img src={image445} alt="" />
                <div className="new_para_ver">
                    <h1>Achieve The Highest Delivery Success Rate Through Phone Call Verification </h1>
                    <p>An enim nullam tempor sapien gravida donec enim
                        ipsum porta justo congue magna at pretium</p>
                </div>
            </div>

            <div className="main_new_comm">
                <div className="new_comm1">
                    <p><BsGlobeAmericas /></p>
                    <h3>Global Reach On Any Device</h3>
                    <span>Accessible on all devices, call verification delivers OTPS</span>
                </div>
                <div className="new_comm2">
                    <p><AiOutlineMessage /></p>
                    <h3>Powerful Communication</h3>
                    <span>Boost security with an extra layer for user identification</span>
                </div>
                <div className="new_comm3">
                    <p><IoPieChartOutline /></p>
                    <h3>Effortless Compliance</h3>
                    <span>Verify any number inclusively</span>
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
            <Footer />
        </Fragment>
    )
}



