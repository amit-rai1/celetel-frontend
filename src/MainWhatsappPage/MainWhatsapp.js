import React, { Fragment } from 'react'
import './MainWhatsapp.css'
import logo1 from '../Assets/New7.gif'
import { MdGamepad } from "react-icons/md";
import { FaInfo } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import logo12 from '../Assets/New9.gif'
import { FaWandMagicSparkles } from "react-icons/fa6";
import { BsCursorFill } from "react-icons/bs";
import { BiBrain } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import logo45 from '../Assets/Group 1000001671.png'
import { FaRegCheckCircle } from "react-icons/fa";
import logo4552 from '../Assets/New8.png'
import { PiUsersThreeBold } from "react-icons/pi";
import { CiGlobe } from "react-icons/ci";
import { AiOutlineMessage } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import image3 from '../Assets/New10 (1).jpg'

export function MainWhatsapp() {
    return (
        <Fragment>
            <div className="main_sol_page">
                <h1>Harness the world's most popular messaging app</h1>
                <p>Bring conversations into your entire customer journey by scaling with WhatsApp Business -
                    get ready to start a conversation with your customers around the world!</p>
                <div className="btn2">
                    <button>Request a demo</button>
                    <button>Explore</button>
                </div>
            </div>

            <div className="main_head_whats">
                <div className="new_img_gif">
                    <img src={logo1} alt="" />
                </div>
            </div>

            <div className="main_sol_page10">
                <h1>Harness the world's most popular messaging app</h1>
                <p>Bring conversations into your entire customer journey by scaling with WhatsApp Business -
                    get ready to start a conversation with your customers around the world!</p>
                <img src={image3} alt="" />
                <div className="btn2">
                    <button>Request a demo</button>
                    <button>Explore</button>
                </div>
            </div>

            <div className="content_s">
                <div className="cards_row_tes1">
                    <div className="cards_para1">
                        <p><MdGamepad /></p>
                        <div className="cards_det1">
                            <h5>Cut operational costs</h5>
                            <span>With whatsapp pricing per conversation,not message its the perfect place for every one in the Business to chat with customers</span>
                        </div>
                    </div>
                    <div className="cards_para2">
                        <p><FaInfo /></p>
                        <div className="cards_det1">
                            <h5>Hassle-free integration</h5>
                            <span>Our quick and easy onboarding process will have you up and running in no time. start the process as quick as possible</span>
                        </div>
                    </div>
                    <div className="cards_para3">
                        <p><FaShareAlt /></p>
                        <div className="cards_det1">
                            <h5>Improve analytics</h5>
                            <span>Boosts campaign performance using powerful whatsapp business metrics to hlp you better understand with your customers</span>
                        </div>
                    </div>

                </div>
            </div>

            <div className="cus_conv">
                <div className="text_parag">
                    <h1>Easily create and manage customer conversations on WhatsApp</h1>
                    <p style={{ marginTop: '25px', fontSize: '18px' }}>Modernize your customer interactions with personalized conversations, new behavioral insights, and rich messaging capabilities.</p>

                    <h3 style={{ marginTop: '100px', fontSize: '30px' }}>Tap into WhatsApp's 2 billion global users and start quality conversations</h3>
                    <div className="new_text_drop">
                        <div className="text_pic_done">
                            <div className="drop_pic">
                                <p><FaWandMagicSparkles /></p>
                                <h6>Global reach</h6>
                            </div>
                            <div className="arrow">
                                <p><IoIosArrowDown /></p>
                            </div>
                        </div>
                        <div className="text_pic_done">
                            <div className="drop_pic">
                                <p><BsCursorFill /></p>
                                <h6>Increase campaign conversions</h6>
                            </div>
                            <div className="arrow">
                                <p><IoIosArrowDown /></p>
                            </div>
                        </div>
                        <div className="text_pic_done">
                            <div className="drop_pic">
                                <p><BiBrain /></p>
                                <h6>Build loyalty with timely notifications</h6>
                            </div>
                            <div className="arrow">
                                <p><IoIosArrowDown /></p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="text_img">
                    <img src={logo12} alt="" />
                </div>
            </div>

            <div className="main_img">
                <div className="new_img_1">
                    <img src={logo45} alt="" />
                </div>
                <div className="text_img_2_d">
                    <h2>Analyse your data with our team to get satisfy your customer</h2>
                    <p>The average android whatsApp user spends around 19 hours on the app per month. WhatsApp Marketing as part of a well-rounded, compliant marketing strategy. So, why not give it a try and see how it can work for you?</p>
                    <div className="btn5">
                        <button> <FaRegCheckCircle />Define your Target Audience </button>
                        <button><FaRegCheckCircle />Use Visuals</button>
                    </div>
                </div>
            </div>

            <div className="solutions_bussi">
                <div className="sol_s">
                    <h1>Perfect Solution For Your Business</h1>
                    <p style={{ marginTop: '20px' }}>Providing cutting-edge strategies to help businesses thrive in the digital landscape <br /> and achieve growth objectives.
                    </p>
                </div>

                <div className="solutions_ment">
                    <div className="solutions_ment10">
                        <p><PiUsersThreeBold /></p>
                        <div className="text_ment1">
                            <h4>Higher user engagement</h4>
                            <span>Do you know what's great about WhatsApp? People love spending time on it! That means if you're a business, you have a fantastic chance to connect with your customers and create a stronger bond with them.</span>
                        </div>
                    </div>
                    <div className="solutions_ment11">
                        <p><CiGlobe /></p>
                        <div className="text_ment1">
                            <h4>Global Reach</h4>
                            <span>With over 2 billion users worldwide, WhatsApp is one big party! And for businesses, that means you have the chance to reach people from all corners of the earth. It's like having a global megaphone at your fingertips.
                            </span>
                        </div>
                    </div>
                </div>


                <div className="solutions_ment12">
                    <div className="solutions_ment13">
                        <p><AiOutlineMessage /></p>
                        <div className="text_ment1">
                            <h4>More Conversation</h4>
                            <span>Do you know what's great about WhatsApp? People love spending time on it! That means if you're a business, you have a fantastic chance to connect with your customers and create a stronger bond with them.</span>
                        </div>
                    </div>
                    <div className="solutions_ment14">
                        <p><BsGraphUp /></p>
                        <div className="text_ment1">
                            <h4>Increased Customer satisfaction</h4>
                            <span>It's been proven to make your customers happy! When you communicate with them in a more personal and direct way, they're more likely to stick around and keep coming back.
                            </span>
                        </div>
                    </div>
                </div>
            </div>


            <div className="main_img1">
                <div className="new_img_12">
                    <img src={logo4552} alt="" />
                </div>
                <div className="text_img_2_d12">
                    <h2>Boost Your E-Commerce Success with WhatsApp Marketing Reach, Engage, and Convert Your Customers Seamlessly</h2>

                    <h2>Boost Your E-Commerce Success with WhatsApp Marketing
                        <br /> <br />
                        Reach, Engage, and Convert Your Customers Seamlessly</h2>
                </div>
            </div>
        </Fragment>
    )
}
