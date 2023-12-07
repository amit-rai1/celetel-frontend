import React from 'react'
import { Fragment, useState } from 'react'
import './AccountSetUp.css'

export function AccountSetUp() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };
    return (
        <Fragment>
            <div className="main_acc_set_up">
                <div className="app_container">
                    <form onSubmit={handleSubmit} className="form_container">
                        <h1>Account set up</h1>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required placeholder='Enter here'
                        />

                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required placeholder='Enter here'
                        />

                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            placeholder='Enter here'
                        />
                        <div className="submit_form">
                            <button type="submit">Create</button>
                            <p>Already have an account? <a href="12">Log in</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}
