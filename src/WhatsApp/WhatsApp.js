import React, { Fragment } from 'react'
import './WhatsApp.css'
import mobile1 from '../Assets/mobile-1.png'
import { Link } from 'react-router-dom'
import logo12 from '../Assets/New2.gif'
import logo13 from '../Assets/New3.gif'
import logo14 from '../Assets/A1.jpg'
import logo15 from '../Assets/New4.gif'
import logo16 from '../Assets/Privacy.png'
import logo17 from '../Assets/smiling-confident-businesswoman-posing-with-arms-folded.jpg'
import logo18 from '../Assets/v-all.png'

export function WhatsApp() {
    return (
        <Fragment>
            <div className="main_whatsapp">
                <div className="sub_whatsapp">
                    <h1>Easily create and manage customer conversations on WhatsApp</h1>
                    <img src={logo12} alt="" />
                </div>
                <div className="para_sol2">
                    <h1>Reach, Engage, and  Convert with Seamless WhatsApp Messaging Strategies"</h1>
                    <p>Discover a revolutionary way to connect with your
                        audience through WhatsApp marketing</p>
                    <Link to={'/connectwhatsapp'}><button>Explore</button></Link>
                </div>
            </div>


            <div className="main_whatsapp1">
                <div className="para_sol2">
                    <h1>Elevate Engagement with
                        RCS Messaging: The Future  of Interactive  Communication</h1>
                    <p>Redefine how you engage with your audience using RCS  messaging, the next-generation of interactive  communication</p>
                    <Link to={'/connectrcs'}><button>Explore</button></Link>
                </div>
                <div className="sub_whatsapp1">
                    <h1>The Future of Enhanced Communications : RCS</h1>
                    <img src={logo13} alt="" />
                    <img src={mobile1} alt="" />
                </div>
            </div>

            <div className="potential_tech">
                <div className="p_potential">
                    <h1>Unlocking Potential with Celetel</h1>
                    <p style={{ marginTop: "20px" }}>Explore the limitless possibilities of effective communication with Celetel as
                        your trusted partner. Let's unlock your business's full potential, together.</p>
                    <img src={logo14} alt="" />
                </div>

                <div className="technical_p_1">
                    <div className="new_tech">
                        <div className="tech_1">
                            <h1>01</h1>
                            <h3>Innovators by Nature</h3>
                            <p>We empower businesses with the
                                versatile Communication Platform as
                                a Service (CPaas) model, enabling
                                seamless integration of multiple
                                communication channels. From SMS
                                to Voice</p>
                        </div>

                        <div className="tech_1">
                            <h1>02</h1>
                            <h3>Global Reach, Local Impact</h3>
                            <p>Our telecom signalling expertise
                                ensures messages are routed
                                efficiently, optimising delivery for
                                every interaction.</p>
                        </div>
                        <div className="tech_1">
                            <h1>03</h1>
                            <h3>Customer-Centric</h3>
                            <p>Whether you're looking to leverage
                                the impact of A2P SMS, harness the
                                engagement potential of IVR, or
                                explore the rich media experience of
                                RCS Celetel equips you with
                                solutions that resonate with your
                                audience.
                                02</p>
                        </div>
                        <div className="tech_1">
                            <h1>04</h1>
                            <h3>Unleashing Value-
                                Added Services</h3>
                            <p>Enhance customer engagement and
                                satisfaction through our Value-Added
                                Services, adding an extra layer of
                                value to your offerings and
                                interactions.</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="api_sdk">
                <div className="api_sdk_para">
                    <h1>Build with confidence and boost your
                        business - with just a few lines of
                        code</h1>
                    <p>Our SDKS and APIs are tried and true! Choose your
                        preferred code language - we'll adapt. Whatever it is
                        you want to build, we're here to make it as easy as
                        possible. Get started in no time with our extensive
                        developer documentation and intuitive tutorials!</p>
                    <div className="btn3">
                        <button>Learn More</button>
                        <button>Explore</button>
                    </div>
                </div>

                <div className="api_sdk_im">
                    <div className="api_1">
                        <ul style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                            <li style={{ backgroundColor: '#E2DDFF', padding: '8px 15px' }}>Java</li>
                            <li>Node</li>
                            <li>PHP</li>
                        </ul>
                        <p style={{ backgroundColor: '#E2DDFF', padding: '8px 15px' }}>Copy</p>
                    </div>
                    <p style={{ marginTop: '20px' }}>package example;
                        <br /> <br />
                        <p>import com.Celetel.xms.  <span style={{ color: 'blue' }} > ApiConnection;</span> </p>
                        <p> import com.Celetel.xms. <span style={{ color: 'blue' }} > CeletelSMSApi;;</span></p>
                        <p>import com.Celetel.xms.api. <span style={{ color: 'blue' }}> GroupResult;</span></p>
                        <p>import com.Celetel.xms.api. <span style={{ color: 'blue' }} > MtBatchTextSmsResult;</span></p>
                    </p>

                    <p style={{ marginTop: '20px' }}>public class Example</p>
                    <p style={{ marginTop: '20px' }}><span style={{ color: 'blue' }} > private static</span> final String SERVICE_PLAN_ID =
                        "SERVICE_PLAN_ID";</p>
                    <p><span style={{ color: 'blue' }} > private static</span> ffinal String TOKEN="SERVICE_TOKEN";</p>
                    <p><span style={{ color: 'blue' }} > private static</span> private static final String[] RECIPIENTS =
                        "1232323131", "3213123";</p>
                    <p><span style={{ color: 'blue' }} > private static</span> final String SENDER = "SENDER";</p>
                </div>
            </div>



            <div className="new_status_conf">
                <div className="new_img_conf">
                    <img src={logo15} alt="" />
                </div>
                <div className="new_para_conf">
                    <h1>One step solution with
                        Celetel app</h1>
                    <p style={{ marginTop: '20px' }}>Welcome to Celetel's SMS Solutions, where we transform simple
                        text messages into powerful communication tools that connect
                        businesses with their audience like never before. With our suite of
                        SMS services, we provide the foundation for engaging, effective,
                        and efficient messaging strategies.</p>
                </div>
            </div>

            <div className="care_and_share">
                <div className="care_1">
                    <img src={logo16} alt="" />
                </div>
                <div className="new_care1">
                    <h1 style={{ fontSize: '42px' }}>We don't share because we care</h1>
                    <p style={{ marginTop: '20px', paddingRight: '45px' }}>We know that data privacy and security is the prime concern . Data is the seed for growth , and that's why we don't share our cloud</p>
                </div>
            </div>

            <div className="care_and_share2">
                <div className="new_care2">
                    <h1>We don't share because we care</h1>
                    <img src={logo16} alt="" />
                    <p style={{ marginTop: '20px' }}>We know that data privacy and security is the prime concern . Data is the seed for growth , and that's why we don't share our cloud</p>
                </div>
            </div>


            <div className="testimony_review">
                <h1> Trusted by Thousands of Happy
                    Customer</h1>
                <p>These are the stories of our customers who have joined us with great
                    pleasure when using this crazy feature.</p>

                <div className="cards_row_tes">
                    <div className="cards_para">
                        <p>"In purus at morbi magna in in
                            maecenas. Nunc nulla magna elit,
                            varius phasellus blandit convallis."</p>
                        <div className="cards_det">
                            <img src={logo17} alt="" />
                            <p>Maria Alberquequ</p>
                        </div>
                    </div>
                    <div className="cards_para">
                        <p>"In purus at morbi magna in in
                            maecenas. Nunc nulla magna elit,
                            varius phasellus blandit convallis."</p>
                        <div className="cards_det">
                            <img src={logo17} alt="" />
                            <p>Maria Alberquequ</p>
                        </div>
                    </div>
                    <div className="cards_para">
                        <p>"In purus at morbi magna in in
                            maecenas. Nunc nulla magna elit,
                            varius phasellus blandit convallis."</p>
                        <div className="cards_det">
                            <img src={logo17} alt="" />
                            <p>Maria Alberquequ</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="used_by">
                <h1>Proud to Be Used By</h1>
                <p>Professional cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-levelling customer service for state of the art customer service </p>
                <img src={logo18} alt="" />
            </div>
        </Fragment>
    )
}
