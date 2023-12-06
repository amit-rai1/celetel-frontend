import React, { Fragment } from 'react'
import './SignUpExplore.css';
import img1 from '../Assets/image 54.png'
import img2 from '../Assets/image 55.png'
import img3 from '../Assets/image 56.png'
import img4 from '../Assets/image 57.png'

export function SignUpExplore() {
    return (
        <Fragment>
            <div className="main_explore_signup">
                <h1>Explore services</h1>

                <div className="sub_explore_media">
                    <div className="new1_media">
                        <div className="text_al_media">
                            <img src={img1} alt="" />
                            <div className="t1">
                                <h5>Whatsapp</h5>
                                <p>Rates starting from Rs.2,999 </p>
                            </div>
                        </div>
                        <button>Explore</button>
                    </div>
                    <div className="new1_media">
                        <div className="text_al_media">
                            <img src={img3} alt="" />
                            <div className="t1">
                                <h5>RCS</h5>
                                <p>Rates starting from Rs.3,889</p>
                            </div>
                        </div>
                        <button>Explore</button>
                    </div>
                </div>

                <div className="sub_explore_media">
                    <div className="new1_media">
                        <div className="text_al_media">
                            <img src={img4} alt="" />
                            <div className="t1">
                                <h5>Voice</h5>
                                <p>Rates starting from Rs.1,499 </p>
                            </div>
                        </div>
                        <button>Explore</button>
                    </div>
                    <div className="new1_media">
                        <div className="text_al_media">
                            <img src={img2} alt="" />
                            <div className="t1">
                                <h5>SMS</h5>
                                <p>Rates starting from Rs.999 </p>
                            </div>
                        </div>
                        <button>Explore</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
