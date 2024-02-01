import React, { Fragment } from 'react'
import './AllPricing.css'
import { Footer } from '../Footer/Footer'

export function AllPricing() {
    return (
        <Fragment>
            <div className="main_new_all_pricing">
                <div className="heading_all_pricing">
                    <h1>Ready to Choose Plan for Your Business?</h1>
                    <p>Choose the package that best suit you. Our services has friendly packages</p>
                    <div className="sub_all_pricing">
                        <p> Monthly</p>
                        <label htmlFor=""></label>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider"></span>
                        </label>
                        <p> Yearly</p>
                    </div>
                </div>

                <div className="new_pricing_list">
                    <div className="new_pricing_cards_all">
                        <div className="name_of_price">
                            <div className="prices_new">
                                <h3>Pricing</h3>
                                <h4>RCS</h4>
                            </div>
                            <div className="sub_all_pricing">
                                <p> Monthly</p>
                                <label htmlFor=""></label>
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider"></span>
                                </label>
                                <p> Yearly</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </Fragment>
    )
}
