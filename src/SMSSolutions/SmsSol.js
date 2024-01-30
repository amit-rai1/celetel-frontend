import React, { Fragment } from 'react'
import './SmsSol.css'
import logo from '../Assets/Mobile sms prototype.svg'
import logo1 from '../Assets/Mobilenew.svg'
import { Link } from 'react-router-dom'
import image1 from '../Assets/New10.jpg'
import womanMobile from '../Assets/New1113.gif';

export function SmsSol() {
    return (
        <Fragment>
            <div className="main_sms_sol">
                <div className="sub_sms_sol">
                    <img src={logo} alt="" />
                    <div className="message-box">
                        <p>Celetel.app has got you covered. Say goodbye to scattered communication tools and hello to simplicity, efficiency, and unparalleled customer engagement. Try Celetel.app today and unlock the true potential of your business communications.</p>
                    </div>
                    <div className="para_sol">
                        <h1>SMS Solutions : Where Connectivity Begins</h1>
                        <p>Welcome to Celetel's SMS Solutions, where we transform simple
                            text messages into powerful communication tools that connect
                            businesses with their audience like never before. With our suite of
                            SMS services, we provide the foundation for engaging, effective,
                            and efficient messaging strategies.</p>
                        <Link to={'/smssolutions'}><button>Explore</button></Link>
                    </div>
                </div>

                <div className="sub_sms_sol_mobile">
                    <img src={logo1} alt="" />
                    <div className="para_sol_mobile">
                        <h1>SMS Solutions : Where Connectivity Begins</h1>
                        <p>Welcome to Celetel's SMS Solutions, where we transform simple
                            text messages into powerful communication tools that connect
                            businesses with their audience like never before. With our suite of
                            SMS services, we provide the foundation for engaging, effective,
                            and efficient messaging strategies.</p>
                        <Link to={'/smssolutions'}><button>Explore</button></Link>
                    </div>
                </div>


                <div className="sub_sms_sol1">
                    <div className="para_sol1">
                        <h1>A complete voice solution from a single provider</h1>
                        <p>Implementing IVR solutions is indispensable for enterprises
                            aspiring to augment their customer service capabilities.
                            These sophisticated systems enable streamlined and
                            seamless customer interactions through voice and touch-
                            tone inputs.</p>
                        <Link to={'/voicesolutions'}><button>Explore</button></Link>
                    </div>
                    <div className="sub_image_sol_1">
                        <img src={womanMobile} alt="" />
                        <img src={image1} alt="" />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
