import React, { Fragment, useState } from 'react'
import './Login.css'
import image1 from '../Assets/search 1.png'
import image2 from '../Assets/image 69.png'
import image3 from '../Assets/image 70.png'
import { Link } from 'react-router-dom';
import { LoginClient } from '../Service/auth.service'
// import { login } from '../Service/auth.service';


export function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            // Call the login service passing email and password
            const result = await LoginClient(email, password);

            if (result.success) {
                // Handle successful login (redirect, show a success message, etc.)
                alert('Login successful');
                // Redirect to a new page after successful login
                // Use history.push or your preferred method to redirect
            } else {
                // Handle unsuccessful login (show an error message, etc.)
                alert(result.error);
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('An unexpected error occurred. Please try again.');
        }
    };


    return (
        <Fragment>
            <div className="main_acc_set_up12">
                <div className="app_container12">
                    <form

                        className="form_container12">
                        <h1>Log in</h1>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required placeholder='Enter here'
                        />

                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
                            <button type="submit" onClick={handleLogin} disabled={!email || !password}>Login</button>
                            <p>Don’t have an account?<Link to={'/signup'}>Sign up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}
