import './Footer.css'
import React, { Fragment } from 'react'
import logo1 from '../Assets/main_logo.svg';
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

export function Footer() {
    return (
        <Fragment>
            <div className="main_footer">
                <div className="sub_footer">
                    <div className="logo_clas_f">
                        <img src={logo1} alt="" />
                        <p>123 Main Street</p>
                        <p>London , UK</p>
                        <p>SW1A 1AA</p>
                        <span>+91- 9708110811</span>
                        <p>hey@celetel.com</p>
                    </div>

                    <div className='sub_foot'>
                        <div className='sub_2_foot'>
                            <a href="#12">Product</a>
                            <a href="#12">Messaging</a>
                            <a href="#12">Voice</a>
                        </div>
                        <div className='sub_20_foot'>
                            <a href="#12">Product</a>
                            <a href="#12">Message</a>
                            <a href="#12">RCS</a>
                            <a href="#12">Whatsapp</a>
                            <a href="#12">SMS</a>
                        </div>
                        <div className='sub_2_foot'>
                            <a href="#12">Company</a>
                            <a href="#12">About us</a>
                            <a href="#12">Product</a>
                            <a href="#12">Pricing</a>
                            <a href="#12">Contact us</a>
                        </div>
                        <div className='sub_20_foot'>
                            <a href="#12">Company</a>
                            <a href="#12">Product</a>
                            <a href="#12">Pricing</a>
                            <a href="#12">Contact us</a>
                        </div>
                        <div className='sub_2_foot'>
                            <a href="#12">Social</a>
                            <a href="#12">Twitter</a>
                            <a href="https://www.linkedin.com/company/celetelasia/" target='blank'>LinkedIn</a>
                            <a href="#12">Facebook</a>
                        </div>
                    </div>
                    <div className="new_foot">
                        <div className='sub_3_foot'>
                            <a href="#12">Legal</a>
                            <a href="#12">Terms</a>
                            <a href="#12">Privacy </a>
                            <a href="#12">Cookies</a>
                            <a href="#12">Licenses</a>
                            <a href="#12">Settings</a>
                            <a href="#12">Contact</a>
                        </div>

                        <div className='sub_20_foot'>
                            <a href="#12">Legal</a>
                            <a href="#12">Terms&Conditions</a>
                            <a href="#12">Privacy </a>
                            <a href="#12">Cookies</a>
                        </div>
                        <div className='sub_2_foot1'>
                            <span>GET IN TOUCH</span>
                            <p><FaTwitter /></p>
                            <p><FaLinkedin /></p>
                            <p><FaFacebook /></p>
                        </div>
                    </div>


                </div>
                <div className="last_foot">
                    &copy;2023 Celetel, All right reserved.
                    <div className="icons_ref">
                        <p><FaTwitter /></p>
                        <p><FaLinkedin /></p>
                        <p><FaFacebook /></p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
