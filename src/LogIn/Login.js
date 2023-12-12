import React, { Fragment, useState } from 'react';
import './Login.css';
import image1 from '../Assets/search 1.png';
import image2 from '../Assets/image 69.png';
import image3 from '../Assets/image 70.png';
import { Link } from 'react-router-dom';
import { loginClient } from '../Service/auth.service';
import { Toaster, toast } from 'react-hot-toast';


export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const result = await loginClient(email, password);


            console.log(result,"resulr124570")

            if (result.success) {
                // Handle successful login
                toast.success(result.msg);
                // Redirect or perform necessary actions after successful login
            } else {
                // Handle unsuccessful login
                toast.error(result.msg);
            }
        } catch (error) {
            console.error('Error during login:', error);
            toast.error('An unexpected error occurred. Please try again.');

        }
    };

    return (
        <Fragment>
            <div className="main_acc_set_up12">
                <div className="app_container12">
                    <form className="form_container12" onSubmit={handleLogin}>
                        <h1>Log in</h1>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Enter here"
                        />

                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Enter here"
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
                            <Toaster />

                            <p>
                                Don’t have an account?
                                <Link to={'/signup'}>Sign up</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}


export default Login;
