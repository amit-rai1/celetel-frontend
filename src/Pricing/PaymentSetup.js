import React, { useState } from 'react'
import { Fragment } from 'react'
import './Pricing.css';

export function PaymentSetup() {
    const [selectedAmount, setSelectedAmount] = useState(0);
    const [formValid, setFormValid] = useState(true);


    const handleSelectChange = (event) => {
        const amount = parseInt(event.target.value);
        setSelectedAmount(amount);
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const name = event.target.elements.name.value.trim();
        const email = event.target.elements.email.value.trim();
        const password = event.target.elements.password.value.trim();
        const phoneNumber = event.target.elements.phoneNumber.value.trim();

        if (!name || !email || !password || !phoneNumber || !selectedAmount) {
            setFormValid(false);
        }
        else {
            setFormValid(true);
        }
    }

    return (
        <Fragment>
            <div className="main_payment_setup">
                <div className="sub_payment_form">
                    <form onSubmit={handleFormSubmit}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder='Enter name' />
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' name="email" placeholder='Enter email' />
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="number" id='phoneNumber' name='phoneNumber' placeholder='Enter number' />

                        <label htmlFor="">SMS Packs</label>
                        <select name="" id="packSelect" onChange={handleSelectChange}>
                            <option value="0">Select an option</option>
                            <option value="1">Testing purpose</option>
                            <option value="40120">1,00,000 Voice OTP Credits ( ₹0.34 + Tax)</option>
                            <option value="4012">10,000 Voice OTP Credits  ( ₹0.34 + Tax )</option>
                            <option value="499">1,000 Voice OTP Credits *** Trial Pack ***</option>
                            <option value="20060">50,000 Voice OTP Credits ( ₹0.34 + Tax)</option>
                        </select>

                        <div className="amount_pay_setup">
                            <p>Amount</p>
                            <span>{`₹${selectedAmount}`}</span>
                        </div>
                        {!formValid && <p style={{ color: 'red' }}>Please fill in all the required fields.</p>}

                        <button>Proceed for payment</button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}
