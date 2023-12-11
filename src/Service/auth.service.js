
import axios from 'axios';
// import { API_BASEURL } from '../../environment';

import { API_BASEURL } from '../environment';


export const signUpClient = async (formData) => {
    try {
        const response = await axios.post(`${API_BASEURL}/api/client/signup`, formData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.msg || 'Something went wrong');
    }
};


export const sendVerificationEmail = async (email) => {
    console.log(email, "email")
    try {
        const response = await axios.post(`${API_BASEURL}/api/client/sendmail`, { email });
        console.log(response, "responseservice");

        if (response.data.success) {
            return { success: true, message: response.data.msg };
        } else {
            return { success: false, message: response.data.msg };
        }
    } catch (error) {
        console.error('Error sending verification email:', error);
        return { success: false, message: 'Failed to send verification email. Please try again.' };
    }
}

export const verifyOtp = async (enteredOTP) => {
    try {
        console.log('Request Data:', { enteredOTP });

        const response = await axios.post(`${API_BASEURL}/api/client/verifyOtp`, { enteredOTP });

        if (response.data.success) {
            return { success: true, message: response.data.msg };
        } else {
            return { success: false, message: response.data.msg };
        }
    } catch (error) {
        console.error('Error verifying OTP:', error);
        return { success: false, message: 'Failed to verify OTP. Please try again.' };
    }
};
