import React, { Fragment, useState } from 'react'
import './Login.css'
import image1 from '../Assets/search 1.png'
import image2 from '../Assets/image 69.png'
import image3 from '../Assets/image 70.png'
import { Link } from 'react-router-dom'


export function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChangeLogin = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };
    return (
        <Fragment>
            <div className="main_acc_set_up12">
                <div className="app_container12">
                    <form onSubmit={handleSubmitLogin} className="form_container12">
                        <h1>Log in</h1>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChangeLogin}
                            required placeholder='Enter here'
                        />

                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChangeLogin}
                            required placeholder='Enter here'
                        />

                        <div className="social_media_logs">
                            <p>Or</p>

                            <div className="image_link_social">
                                <img src={image1} alt="" />
                                <img src={image2} alt="" />
                                <img src={image3} alt="" />
                            </div>

                        </div>

                        <div className="submit_form12">
                            <button type="submit">Login</button>
                            <p>Don’t have an account?<Link to={'/signup'}>Sign up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}
