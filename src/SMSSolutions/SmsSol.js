import React, { Fragment } from 'react'
import './SmsSol.css'
import logo from '../Assets/New1.gif'
import woman from '../Assets/unsplash_L9U5UUScnHY.png'
import mobile from '../Assets/Frame 427319187 1.png'
import { Link } from 'react-router-dom'
import image1 from '../Assets/New10.jpg'

export function SmsSol() {
    return (
        <Fragment>
            <div className="main_sms_sol">
                <div className="sub_sms_sol">
                    <img src={logo} alt="" />
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
                        <img src={mobile} alt="" />
                        <img src={woman} alt="" />
                        <img src={image1} alt="" />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
