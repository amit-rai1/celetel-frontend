import React, { useState } from 'react';
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import { clientSignup, sendVerificationEmail, verifyOtp } from '../Service/auth.service';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Signup = () => {

    const navigate = useNavigate();

    const [showOtpField, setShowOtpField] = useState(false);
    const [otpTimer, setOtpTimer] = useState(300); // 5 minutes in seconds
    const [isTermsChecked, setTermsChecked] = useState(false);
    const [email, setEmail] = useState('');
    const [enteredOTP, setEnteredOTP] = useState('');
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        role: 'client' // Default value set to 'client'
    });

    //   const handleVerifyClick = () => {
    //     setShowOtpField(true);

    //     // Start the timer
    //     const interval = setInterval(() => {
    //       setOtpTimer((prevTimer) => prevTimer - 1);
    //     }, 1000);

    //     // Stop the timer after 5 minutes
    //     setTimeout(() => {
    //       clearInterval(interval);
    //     }, 300000); // 5 minutes in milliseconds
    //   };

    const handleResendClick = () => {
        // Implement resend functionality here
        // For simplicity, you can reset the timer to 5 minutes
        setOtpTimer(300);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Check if the changed input is for 'email' or 'fullName'
        if (name === 'email') {
            // Update the 'email' state and 'email' field in 'formData'
            setEmail(value);
            setFormData({ ...formData, email: value });
        } else if (name === 'fullName') {
            // Update the 'fullName' state and 'fullName' field in 'formData'
            setFormData({ ...formData, fullName: value });
        } else {
            // For other inputs, update normally
            setFormData({ ...formData, [name]: value });
        }
    };




    const handleVerifyClick = async () => {
        try {
            const result = await sendVerificationEmail(email);

            console.log(result, "result")

            if (result.success) {
                alert(result.message);
                setShowOtpField(true);

                const interval = setInterval(() => {
                    setOtpTimer((prevTimer) => prevTimer - 1);
                }, 1000);

                setTimeout(() => {
                    clearInterval(interval);
                }, 300000); // 5 minutes in milliseconds

            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error('Error handling verification email:', error);
            alert('An unexpected error occurred. Please try again.');
        }
    };

    const handleVerifyOtp = async () => {
        try {
            const result = await verifyOtp(enteredOTP);

            if (result && result.success) {
                alert(result.message);
            } else {
                toast.error('Something went wrong');
            }
        } catch (error) {
            console.error('Error handling OTP verification:', error);
            alert('An unexpected error occurred. Please try again.');
        }
    };
    const handleSignupClick = async () => {
        try {
            const { fullName, email, role } = formData;
            const result = await clientSignup(fullName, email, role);

            if (result.success) {
                alert(result.msg);
                // Redirect to another page, show a success message, etc.
                navigate('/accountsetup'); // Navigate to admin dashboard

            } else {
                alert(result.msg);
            }
        } catch (error) {
            console.error('Error handling client signup:', error);
            alert('An unexpected error occurred. Please try again.');
        }
    };

    return (
        <div style={{ backgroundColor: '#1F1F1F', minHeight: '500vh' }}>

            <Container className="mt-5">
                <Row className="justify-content-end" style={{ marginLeft: '230px' }}>
                    <Col md={8} className="ml-auto">
                        {/* <Card className="p-4"> */}
                        <Card style={{ width: '600px', height: '600px', padding: '20px', marginTop: "40px" }}>

                            <Card.Body>
                                <h2 className="text-center mb-4">Sign Up</h2>
                                <Form>
                                    <Form.Group controlId="formFullName" className="mb-4">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your full name"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            name="fullName" // Add the 'name' attribute
                                        />

                                    </Form.Group>

                                    <Form.Group controlId="formEmail" className="mb-3">
                                        <Form.Label>Email</Form.Label>
                                        <div className="input-group">
                                            <Form.Control type="email" placeholder="Enter your email"
                                                value={email}
                                                onChange={handleInputChange}
                                                name="email" // Add the 'name' attribute
                                            />
                                            <Button variant="primary" onClick={handleVerifyClick}>
                                                Verify
                                            </Button>
                                        </div>
                                    </Form.Group>

                                    {showOtpField && (
                                        //   <Form.Group controlId="formOtp" className="mb-4">
                                        //     <Form.Label>Enter OTP</Form.Label>
                                        //     <div className="input-group">
                                        //       <Form.Control type="text" placeholder="Enter OTP" />
                                        //       <span className="timer">{`${Math.floor(otpTimer / 60)}:${(otpTimer % 60)
                                        //         .toString()
                                        //         .padStart(2, '0')}`}</span>
                                        //       <Button variant="link" onClick={handleResendClick}>
                                        //         Resend
                                        //       </Button>
                                        //     </div>
                                        //   </Form.Group>
                                        <Form.Group controlId="formOtp" className="mb-4">
                                            <Form.Label>Enter OTP</Form.Label>
                                            <div className="input-group">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter OTP"

                                                    onChange={(e) => {
                                                        const enteredValue = e.target.value;

                                                        // Check if the entered value is a 4-digit OTP
                                                        if (/^\d{4}$/.test(enteredValue)) {
                                                            setEnteredOTP(enteredValue);
                                                        }
                                                    }}
                                                />
                                                <span className="timer">{`${Math.floor(otpTimer / 60)}:${(otpTimer % 60)
                                                    .toString()
                                                    .padStart(2, '0')}`}</span>
                                                <Button variant="link" onClick={handleResendClick}>
                                                    Resend
                                                </Button>
                                            </div>

                                            <Button
                                                variant="success"
                                                type="button"
                                                onClick={handleVerifyOtp}
                                                disabled={!enteredOTP}
                                            >
                                                Submit
                                            </Button>
                                        </Form.Group>
                                    )}

                                    <Form.Group controlId="formTerms" className="mb-4">
                                        <Form.Check
                                            type="checkbox"
                                            label="I accept the terms and conditions"
                                            checked={isTermsChecked}
                                            onChange={() => setTermsChecked(!isTermsChecked)}
                                        />
                                    </Form.Group>

                                    <Button
                                        variant="primary"
                                        type="button"
                                        onClick={handleSignupClick}
                                        disabled={!isTermsChecked}
                                    >
                                        Sign Up
                                    </Button>
                                </Form>
                            </Card.Body>
                            <Card.Footer className="text-muted text-center">
                                Already have an account? <a href="/login">Login</a>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );

};

export default Signup;
