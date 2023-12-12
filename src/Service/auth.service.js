
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

// export const verifyOtp = async (enteredOTP) => {
//     console.log(enteredOTP, "enterOTP")
//     try {
//         console.log('Request Data:', { enteredOTP });

//         const response = await axios.post(`${API_BASEURL}/api/client/verifyOtp`, { enteredOTP });
//         console.log(response, "resauth")

//         if (response.data.success) {
//             return { success: true, message: response.data.msg };
//         } else {
//             return { success: false, message: response.data.msg };
//         }
//     } catch (error) {
//         console.error('Error verifying OTP:', error);
//         return { success: false, message: 'Failed to verify OTP. Please try again.' };
//     }
// };

export const verifyOtp = async (enteredOTP) => {
    console.log(enteredOTP, "enterOTP");
    try {
        const otpNumber = Number(enteredOTP); // Convert entered OTP to a number
        console.log('Request Data:', { enteredOTP: otpNumber });

        const response = await axios.post(`${API_BASEURL}/api/client/verifyOtp`, { enteredOTP: otpNumber });
        console.log(response, "resauth");

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


export const getClientById = async (clientId) => {
    console.log(clientId, "clientidauth")
    try {
        const response = await axios.get(`${API_BASEURL}/api/client/getClientById/${clientId}`);
        console.log(response, "response123456")
        return response.data;
    } catch (error) {
        throw Error(error.message);
    }
};

export const accountSetup = async (clientId, formData) => {

    console.log(clientId, "clientIdupdate")

    try {
        const response = await axios.put(`${API_BASEURL}/api/client/setupAccount`, { clientId, formData }); // Replace with your API endpoint
        return response.data;
    } catch (error) {
        throw Error(error.message);
    }
};


export const LoginClient = async (email, password) => {
    
    try {
        // Make a POST request to your backend login API
        const response = await axios.post(`${API_BASEURL}/api/client/login`, { email, password });

        // Check if the login was successful
        if (response.data.success) {
            // If successful, return the user data and token
            return {
                success: true,
                user: response.data.user,
                token: response.data.token
            };
        } else {
            // If unsuccessful, return an error message
            return {
                success: false,
                error: 'Invalid email or password'
            };
        }
    } catch (error) {
        // If an error occurs during the API call, return the error message
        return {
            success: false,
            error: 'An unexpected error occurred. Please try again.'
        };
    }
};

