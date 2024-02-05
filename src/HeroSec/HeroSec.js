import React, { Fragment } from 'react'
import './HeroSec.css'
import homepage from '../Assets/Group 1000001747.svg'
import homepage1 from '../Assets/Frame.png'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export function HeroSec() {
    return (
        <Fragment>
            <div className="main_herosec">
                <div className="sub_hero">
                    <h1>Reach billions in a single click . connect millions in a moment</h1>
                    <div className="border"></div>
                    <p>The world's most innovative companies build communication solutions using Celetel applications and APIs. Get started today and talk to your customers over any channel.</p>
                    <div className="hero_butn">
                        <div className="phone_inputs_country_wise">
                            <PhoneInput
                                country={'in'}
                                name="phone"
                                id="phone"
                                // containerStyle={{
                                //     padding: "12px"
                                // }}
                                className="custom-phone-input"
                                inputProps={{
                                    placeholder: 'Search for a country',
                                    autoFocus: true,
                                    padding: "12px"
                                }}
                                enableSearch
                            />

                        </div>
                        <button>Test delivery speed</button>
                    </div>
                </div>
                <div className="sub_image">
                    <img src={homepage} alt="" />
                </div>
                <div className="image_frames">
                    <img src={homepage1} alt="" />
                </div>
            </div>

            <div className="main_hero1">
                <div className="sub_hero1">
                    <h1>Reach billions in a single click . connect millions in a moment</h1>
                    <div className="border1"></div>
                    <img src={homepage} alt="" />
                    <p>The world's most innovative companies build communication solutions using Celetel applications and APIs. Get started today and talk to your customers over any channel.</p>
                    <button>Test delivery speed</button>
                </div>
            </div>
        </Fragment>
    )
}
