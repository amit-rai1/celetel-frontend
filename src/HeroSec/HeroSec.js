import React, { Fragment } from 'react'
import './HeroSec.css'
import homepage from '../Assets/Group 1000001747.png'

export function HeroSec() {
    return (
        <Fragment>
            <div className="main_herosec">
                <div className="sub_hero">
                    <h1>Reach billions in a single click . connect millions in a moment</h1>
                    <div className="border"></div>
                    <p>The world's most innovative companies build communication solutions using Celetel applications and APIs. Get started today and talk to your customers over any channel.</p>
                    <div className="hero_butn">
                        <input type="number" placeholder='Enter mobile number'/>
                        <button>Get started today</button>
                    </div>
                </div>
                <div className="sub_image">
                    <img src={homepage} alt="" />
                </div>
            </div>

            <div className="main_hero1">
                <div className="sub_hero1">
                    <h1>Reach billions in a single click . connect millions in a moment</h1>
                    <div className="border1"></div>
                    <img src={homepage} alt="" />
                    <p>The world's most innovative companies build communication solutions using Celetel applications and APIs. Get started today and talk to your customers over any channel.</p>
                    <button>Get started today</button>
                </div>
            </div>
        </Fragment>
    )
}
