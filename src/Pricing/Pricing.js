import React, { Fragment, useState } from 'react'
import image1 from '../Assets/New5.gif'
import './Pricing.css';

export function Pricing() {

    const [smsData, setSmsData] = useState(false);

    const handleSMSDataPop = () => {
        setSmsData(true)
    }
    const handleSMSDataPopReverse = () => {
        setSmsData(false)
    }

    const [whatsAppData, setWhatsAppData] = useState(false);

    const handleWhatsAppDataPop = () => {
        setWhatsAppData(true)
    }
    const handleWhatsAppDataPopReverse = () => {
        setWhatsAppData(false)
    }

    return (
        <Fragment>
            <div className="main_sol_page_price">
                <h1>Our Pricing Lists : Where Connectivity Begins</h1>
                <p>Welcome to Celetel's Pricing Lists, where we transform simple
                    text messages into powerful communication tools that connect
                    businesses with their audience like never before. With our suite of
                    SMS services, we provide the foundation for engaging, effective,
                    and efficient messaging strategies.</p>
                <div className="btn2_price">
                    <button>Request a demo</button>
                    <button>Explore</button>
                </div>
            </div>

            <div className="main_sms">
                <div className="sub_sms">
                    <img src={image1} alt="" />
                </div>
            </div>

            <div className="main_sol_page1">
                <h1>SMS Solutions : Where Connectivity Begins</h1>
                <p>Welcome to Celetel's SMS Solutions, where we transform simple
                    text messages into powerful communication tools that connect
                    businesses with their audience like never before.</p>
                <img src={image1} alt="" />
                <div className="btn2">
                    <button>Request a demo</button>
                    <button>Explore</button>
                </div>
            </div>


            <div className="main_pricing_a">
                <h1>Our Pricing</h1>
                <div className="sub_pricing_head">
                    <p>Billed Monthly</p>
                    <label htmlFor=""></label>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                    </label>
                    <p>Billed Yearly (save 15%)</p>
                </div>

                <div className="main_prices_according">
                    <button onClick={handleSMSDataPop}>SMS</button>
                    <button onClick={handleSMSDataPopReverse}>Voice</button>
                    <button onClick={handleWhatsAppDataPop}>WhatsApp</button>
                    <button onClick={handleWhatsAppDataPopReverse}>RCS</button>
                </div>

                {
                    smsData ? (
                        <Fragment>
                            <div className="new_pricing_pro">
                                <div className="new_price1">
                                    <h3>Free start now</h3>
                                    <h5>$0</h5>
                                    <p>Description of the tier list will go here, copy should be concise and impactful.</p>
                                    <div className="line" style={{
                                        border: '1px solid #D9D9D9',
                                        marginTop: '15px'
                                    }}></div>
                                    <div className="new_price_points">
                                        <div className="new_points12">
                                            <p>Credits do not expire</p>
                                        </div>
                                        <div className="new_points1">
                                            <p>Amazing feature one</p>
                                        </div>
                                        <div className="new_points1">
                                            <p>Wonderful feature two</p>
                                        </div>
                                        <div className="new_points1">
                                            <p>Priceless feature three</p>
                                        </div>
                                        <div className="new_points1">
                                            <p>Splended feature four</p>
                                        </div>
                                        <div className="new_points1">
                                            <p>No commitment</p>
                                        </div>

                                        <div className="btn_price">
                                            <button>Start demo now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="new_price1">
                                    <h3>Pro</h3>
                                    <h5>$99/ month</h5>
                                    <p>Description of the tier list will go here, copy should be concise and impactful.</p>
                                    <div className="line" style={{
                                        border: '1px solid #D9D9D9',
                                        marginTop: '15px'
                                    }}></div>
                                    <div className="new_price_points">
                                        <p>Everything in the Free plan, plus</p>
                                        <div className="new_points1">
                                            <p>Amazing feature one</p>
                                        </div>
                                        <div className="new_points1">
                                            <p>Wonderful feature two</p>
                                        </div>
                                        <div className="new_points1">
                                            <p>Priceless feature three</p>
                                        </div>
                                        <div className="new_points1">
                                            <p>Splended feature four</p>
                                        </div>
                                        <div className="new_points1">
                                            <p>Delightful feature five</p>
                                        </div>
                                        <div className="btn_price">
                                            <button>Start free</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="new_price1">
                                    <h5>Custom yearly billing only</h5>
                                    <p>Description of the tier list will go here, copy should be concise and impactful.</p>
                                    <div className="line" style={{
                                        border: '1px solid #D9D9D9',
                                        marginTop: '15px'
                                    }}></div>
                                    <div className="new_price_points">
                                        <p>Everything in the Free plan, plus</p>
                                        <div className="new_points1">
                                            <p>Amazing feature one</p>
                                        </div>
                                        <div className="new_points1">
                                            <p>Wonderful feature two</p>
                                        </div>
                                        <div className="new_points1">
                                            <p>Priceless feature three</p>
                                        </div>
                                        <div className="new_points1">
                                            <p>Splended feature four</p>
                                        </div>
                                        <div className="new_points1">
                                            <p>Delightful feature five</p>
                                        </div>
                                        <div className="btn_price">
                                            <button>Start free</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <div className="new_pricing_pro">
                                <div className="new_price1">
                                    <h3>Free</h3>
                                    <h5>$0</h5>
                                    <p>Description of the tier list will go here, copy should be concise and impactful.</p>
                                    <div className="line" style={{
                                        border: '1px solid #D9D9D9',
                                        marginTop: '15px'
                                    }}></div>
                                    <div className="new_price_points">
                                        <div className="new_points12">
                                            <p>Credits do not expire</p>
                                        </div>
                                        <div className="new_points1">
                                            <p>Amazing feature one</p>
                                        </div>
                                        <div className="new_points1">
                                            <p>Wonderful feature two</p>
                                        </div>
                                        <div className="new_points1">
                                            <p>Priceless feature three</p>
                                        </div>
                                        <div className="new_points1">
                                            <p>Splended feature four</p>
                                        </div>
                                        <div className="new_points1">
                                            <p>No commitment</p>
                                        </div>

                                        <div className="btn_price">
                                            <button>Start free</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="new_price1">
                                    <h3>Pro</h3>
                                    <h5>$18/ month</h5>
                                    <p>Description of the tier list will go here, copy should be concise and impactful.</p>
                                    <div className="line" style={{
                                        border: '1px solid #D9D9D9',
                                        marginTop: '15px'
                                    }}></div>
                                    <div className="new_price_points">
                                        <p>Everything in the Free plan, plus</p>
                                        <div className="new_points1">
                                            <p>Amazing feature one</p>
                                        </div>
                                        <div className="new_points1">
                                            <p>Wonderful feature two</p>
                                        </div>
                                        <div className="new_points1">
                                            <p>Priceless feature three</p>
                                        </div>
                                        <div className="new_points1">
                                            <p>Splended feature four</p>
                                        </div>
                                        <div className="new_points1">
                                            <p>Delightful feature five</p>
                                        </div>
                                        <div className="btn_price">
                                            <button>Start free</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="new_price1">
                                    <h3>Enterprise</h3>
                                    <h5>Custom yearly billing only</h5>
                                    <p>Description of the tier list will go here, copy should be concise and impactful.</p>
                                    <div className="line" style={{
                                        border: '1px solid #D9D9D9',
                                        marginTop: '15px'
                                    }}></div>
                                    <div className="new_price_points">
                                        <p>Everything in the Free plan, plus</p>
                                        <div className="new_points1">
                                            <p>Amazing feature one</p>
                                        </div>
                                        <div className="new_points1">
                                            <p>Wonderful feature two</p>
                                        </div>
                                        <div className="new_points1">
                                            <p>Priceless feature three</p>
                                        </div>
                                        <div className="new_points1">
                                            <p>Splended feature four</p>
                                        </div>
                                        <div className="new_points1">
                                            <p>Delightful feature five</p>
                                        </div>
                                        <div className="btn_price">
                                            <button>Start</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    )
                }

                {whatsAppData ? (
                    <Fragment>
                        <div className="new_pricing_pro">
                            <div className="new_price1">
                                <h3>Free</h3>
                                <h5>$0</h5>
                                <p>Description of the tier list will go here, copy should be concise and impactful.</p>
                                <div className="line" style={{
                                    border: '1px solid #D9D9D9',
                                    marginTop: '15px'
                                }}></div>
                                <div className="new_price_points">
                                    <div className="new_points12">
                                        <p>Credits do not expire</p>
                                    </div>
                                    <div className="new_points1">
                                        <p>Amazing feature one</p>
                                    </div>
                                    <div className="new_points1">
                                        <p>Wonderful feature two</p>
                                    </div>
                                    <div className="new_points1">
                                        <p>Priceless feature three</p>
                                    </div>
                                    <div className="new_points1">
                                        <p>Splended feature four</p>
                                    </div>
                                    <div className="new_points1">
                                        <p>No commitment</p>
                                    </div>

                                    <div className="btn_price">
                                        <button>Start free</button>
                                    </div>
                                </div>
                            </div>
                            <div className="new_price1">
                                <h3>Pro</h3>
                                <h5>$889/ month</h5>
                                <p>Description of the tier list will go here, copy should be concise and impactful.</p>
                                <div className="line" style={{
                                    border: '1px solid #D9D9D9',
                                    marginTop: '15px'
                                }}></div>
                                <div className="new_price_points">
                                    <p>Everything in the Free plan, plus</p>
                                    <div className="new_points1">
                                        <p>Amazing feature one</p>
                                    </div>
                                    <div className="new_points1">
                                        <p>Wonderful feature two</p>
                                    </div>
                                    <div className="new_points1">
                                        <p>Priceless feature three</p>
                                    </div>
                                    <div className="new_points1">
                                        <p>Splended feature four</p>
                                    </div>
                                    <div className="new_points1">
                                        <p>Delightful feature five</p>
                                    </div>
                                    <div className="btn_price">
                                        <button>Start free</button>
                                    </div>
                                </div>
                            </div>
                            <div className="new_price1">
                                <h3>Enterprise</h3>
                                <h5>Custom yearly billing only</h5>
                                <p>Description of the tier list will go here, copy should be concise and impactful.</p>
                                <div className="line" style={{
                                    border: '1px solid #D9D9D9',
                                    marginTop: '15px'
                                }}></div>
                                <div className="new_price_points">
                                    <p>Everything in the Free plan, plus</p>
                                    <div className="new_points1">
                                        <p>Amazing feature one</p>
                                    </div>
                                    <div className="new_points1">
                                        <p>Wonderful feature two</p>
                                    </div>
                                    <div className="new_points1">
                                        <p>Priceless feature three</p>
                                    </div>
                                    <div className="new_points1">
                                        <p>Splended feature four</p>
                                    </div>
                                    <div className="new_points1">
                                        <p>Delightful feature five</p>
                                    </div>
                                    <div className="btn_price">
                                        <button>Start</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                ) : (
                    <Fragment>
                        <div className="new_pricing_pro">
                            <div className="new_price1">
                                <h3>Free</h3>
                                <h5>$0</h5>
                                <p>Description of the tier list will go here, copy should be concise and impactful.</p>
                                <div className="line" style={{
                                    border: '1px solid #D9D9D9',
                                    marginTop: '15px'
                                }}></div>
                                <div className="new_price_points">
                                    <div className="new_points12">
                                        <p>Credits do not expire</p>
                                    </div>
                                    <div className="new_points1">
                                        <p>Amazing feature one</p>
                                    </div>
                                    <div className="new_points1">
                                        <p>Wonderful feature two</p>
                                    </div>
                                    <div className="new_points1">
                                        <p>Priceless feature three</p>
                                    </div>
                                    <div className="new_points1">
                                        <p>Splended feature four</p>
                                    </div>
                                    <div className="new_points1">
                                        <p>No commitment</p>
                                    </div>

                                    <div className="btn_price">
                                        <button>Start free</button>
                                    </div>
                                </div>
                            </div>
                            <div className="new_price1">
                                <h3>Pro</h3>
                                <h5>$56/ month</h5>
                                <p>Description of the tier list will go here, copy should be concise and impactful.</p>
                                <div className="line" style={{
                                    border: '1px solid #D9D9D9',
                                    marginTop: '15px'
                                }}></div>
                                <div className="new_price_points">
                                    <p>Everything in the Free plan, plus</p>
                                    <div className="new_points1">
                                        <p>Amazing feature one</p>
                                    </div>
                                    <div className="new_points1">
                                        <p>Wonderful feature two</p>
                                    </div>
                                    <div className="new_points1">
                                        <p>Priceless feature three</p>
                                    </div>
                                    <div className="new_points1">
                                        <p>Splended feature four</p>
                                    </div>
                                    <div className="new_points1">
                                        <p>Delightful feature five</p>
                                    </div>
                                    <div className="btn_price">
                                        <button>Start free</button>
                                    </div>
                                </div>
                            </div>
                            <div className="new_price1">
                                <h5>Custom yearly billing</h5>
                                <p>Description of the tier list will go here, copy should be concise and impactful.</p>
                                <div className="line" style={{
                                    border: '1px solid #D9D9D9',
                                    marginTop: '15px'
                                }}></div>
                                <div className="new_price_points">
                                    <p>Everything in the Free plan, plus</p>
                                    <div className="new_points1">
                                        <p>Amazing feature one</p>
                                    </div>
                                    <div className="new_points1">
                                        <p>Wonderful feature two</p>
                                    </div>
                                    <div className="new_points1">
                                        <p>Priceless feature three</p>
                                    </div>
                                    <div className="new_points1">
                                        <p>Splended feature four</p>
                                    </div>
                                    <div className="new_points1">
                                        <p>Delightful feature five</p>
                                    </div>
                                    <div className="btn_price">
                                        <button>Start now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                )
                }
            </div>
        </Fragment>
    )
}
