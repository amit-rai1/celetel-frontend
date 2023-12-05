import React, { Fragment } from 'react'
import './Navbar.css';
import logo1 from '../Assets/logo1.png'
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export function Navbar() {
    return (
        <Fragment>
            <div className="main_nav">
                <div className="sub_nav">
                    <img src={logo1} alt="" />
                    <ul>
                        <Link to={'/'}><li>Home</li></Link>
                        <li>Products <FaAngleDown /></li>
                        <li>Pricing</li>
                    </ul>
                </div>

                <div className="btn1">
                    <button>Log in</button>
                    <button>Sign up</button>
                </div>
                
            </div>
        </Fragment>
    )
}
