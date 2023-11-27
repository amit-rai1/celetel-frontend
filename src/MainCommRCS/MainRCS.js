import React, { Fragment } from 'react'
import './MainRCS.css'
import image1 from '../Assets/iPhone 14.png'
import image2 from '../Assets/iPhone 17.png'
import image3 from '../Assets/Group 1000001745.png'
import image4 from '../Assets/Group 1000001746.png'
import { GrSubtractCircle } from "react-icons/gr";
import { MdAddCircleOutline } from "react-icons/md";

export function MainRCS() {
    return (
        //add comments //
        <Fragment>
            <div className="main_sol_page">
                <h1>The Future of Enhanced Communication</h1>
                <p>Welcome to Celetel's RCS (Rich Communication Services) page, where we explore the exciting world of modern communication. RCS is a game-changer in the realm of mobile messaging.</p>
                <div className="btn2">
                    <button>Request a demo</button>
                    <button>Explore</button>
                </div>
            </div>

            <div className="sub_rcs">
                <img src={image1} alt="" />
            </div>

            <div className="our_goal">
                <div className="goal_para">
                    <h1>Why RCS Matters?</h1>
                    <p style={{ paddingRight: '200px', marginTop: '15px' }}>An enim nullam tempor sapien gravida donec enim ipsum
                        porta justo congue magna at pretium</p>
                    <div className="new_1_goal_fea">
                        <div className="goal_new_fea">
                            <h4>Redefining Messaging</h4>
                            <p style={{ marginTop: '10px' }}>RCS isn't just about texts , its about experience</p>
                        </div>
                        <div className="goal_new_fea">
                            <h4>Engagement Beyond Words</h4>
                            <p style={{ marginTop: '10px' }}>Interactive features like suggested responses</p>
                        </div>
                        <div className="goal_new_fea">
                            <h4>Universal Accessibility</h4>
                            <p style={{ marginTop: '10px' }}>RCS is natively supported on most smartphones</p>
                        </div>
                    </div>
                </div>
                <div className="sub_goal">
                    <img src={image2} alt="" />
                </div>
            </div>

            <div className="why_celetel">
                <img src={image3} alt="" />
                <div className="text_area_1">
                    <h2>Why Choose Celetel for RCS</h2>
                    <p>
                        Celebrate richer engagement with Celetel's RCS solutions. From immersive marketing to efficient support, we empower your connections. Forge deeper relationships and captivate your audience with visually compelling
                        messages and interactive content. Experience the future of communication with Celetel</p>
                </div>
            </div>

            <div className="unlock_features">
                <h1>Unlock Next Level Messaging with Celetel's</h1>
                <p>Join over 4000+ startups already growing with Untitled</p>
                <div className="btn4">
                    <button>Learn more</button>
                    <button>Get started</button>
                </div>
            </div>

            <div className="security_sms">
                <div className="para_seq">
                    <h1>Unlock the RCS Advantage:</h1>
                    <p style={{ marginTop: '20px', color: '#8A8A8A', fontWeight: '500' }}>
                        Ready to explore the endless possibilities of RCS? Connect with us to discuss how Celetel can tailor an RCS strategy that aligns with your objectives. Together, we'll elevate your conversations, one message at a time.</p>
                    <div className="btn2">
                        <button>Get started</button>
                        <button>Explore</button>
                    </div>
                </div>
                <div className="img_new">
                    <img src={image4} alt="" />
                </div>
            </div>

            <div className="faq_s">
                <h1>Frequently asked questions</h1>
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
        </Fragment>
    )
}
