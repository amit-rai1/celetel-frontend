import React from 'react'
import { Fragment, useState, useEffect } from 'react'
import './AccountSetUp.css'
import { Link, useNavigate } from 'react-router-dom';
import { accountSetup, getClientById } from '../Service/auth.service';

export function AccountSetUp() {
    const navigateToLogin = useNavigate();

    const [email, setEmail] = useState('');
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: '',
    });

    const clientId = localStorage.getItem('clientId');

    console.log(clientId, "clientId")

    useEffect(() => {
        const getClientData = async () => {
            console.log(clientId, "clientId");
            try {
                const response = await getClientById(clientId); 
                const { result } = response;

                if (result) {
                    setEmail(result.email);
                }
            } catch (error) {
                console.error('Error fetching client data:', error.message);
            }
        };

        getClientData();

    }, [clientId]);




    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };


    const handleUpdate = async (e) => {
        e.preventDefault();

        // Retrieve clientId from local storage
        const clientId = localStorage.getItem('clientId');

        try {
            if (formData.password !== formData.confirmPassword) {
                // Password and ConfirmPassword do not match
                console.error('Passwords do not match');
                return;
            }

            const response = await accountSetup(clientId, {
                password: formData.password,
                confirmPassword:formData.confirmPassword
            });

            console.log('Password updated successfully:', response);
            navigateToLogin('/login');
        } 
        catch (error) {
            console.error('Error updating password:', error.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Form submitted:', formData);
    };
    return (
        <Fragment>
            <div className="main_acc_set_up">
                <div className="app_container">
                    <form onSubmit={handleSubmit} className="form_container">
                        <h1>Account set up</h1>
                        <label htmlFor="email">Email</label>
                        <input
                            disabled
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                            required placeholder='Enter here'
                        />

                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required placeholder='Enter here'
                        />

                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            required
                            placeholder='Enter here'
                        />
                        <div className="submit_form">
                            <button type="submit" onClick={handleUpdate}>Create</button>
                            <p>Already have an account? <Link to={'/login'}>Log in</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}
