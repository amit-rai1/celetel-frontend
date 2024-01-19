import { Fragment } from 'react'
import './Contact.css'
import React from 'react'
import { BiMessageDetail } from "react-icons/bi";
import { Footer } from '../Footer/Footer'


export function Contact() {
    return (
        <Fragment>
            <div className="main_con"></div>
            <div className="sub_cont_form">
                <div className="para_new_c">
                    <p><BiMessageDetail /></p>
                    <span>Write us a few words about your project and well prepare proposal for you</span>
                </div>

                <div className="form_con">
                    <form action="">
                        <label htmlFor="">Name</label>
                        <input type="text" name="" id="" />

                        <label htmlFor="">Email</label>
                        <input type="email" name="" id="" />

                        <label htmlFor="">What service are you interested in</label>
                        <select name="" id="">
                            <option value="">Select project type</option>
                        </select>

                        <label htmlFor="">Budget</label>
                        <select name="" id="">
                            <option value="">Select project budget</option>
                        </select>

                        <label htmlFor="">Message</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>

                        <button>Submit</button>
                    </form>
                </div>
            </div>

            <div className="next_step_1">
                <h1>What will be next step?</h1>
                <p>You are one step closer to grow your business with our best team.</p>
            </div>

            <div className="next_step_steps">
                <div className="next_step_steps10">
                    <p>01</p>
                </div>
                <div className="text_ment20">
                    <h4>We'll prepare a proposal</h4>
                    <span>Lorem ipsum dolor sit amet consectetur. Curabitur nec in tristique dignissim. Consectetur morbi tristique etiam molestie lobortis sagittis massa.</span>
                </div>
                <div className="next_step_steps10">
                    <p>02</p>
                </div>
                <div className="text_ment20">
                    <h4>Together we discuss it</h4>
                    <span>Lorem ipsum dolor sit amet consectetur. Curabitur nec in tristique dignissim. Consectetur morbi tristique etiam molestie lobortis sagittis mas.</span>
                </div>
                <div className="next_step_steps10">
                    <p>03</p>
                </div>
                <div className="text_ment20">
                    <h4>Lets start growing</h4>
                    <span>Lorem ipsum dolor sit amet consectetur. Curabitur nec in tristique dignissim. Consectetur morbi tristique etiam molestie lobortis sagittis massa.</span>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}
