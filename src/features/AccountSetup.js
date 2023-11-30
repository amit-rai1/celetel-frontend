import React, { useState } from 'react';
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';

const AccountSetup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        } else if (name === 'confirmPassword') {
            setConfirmPassword(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform submission or validation here
        console.log('Form submitted!');
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
    };

    return (
        <div style={{ backgroundColor: '#1F1F1F', minHeight: '500vh' }}>
            <Container className="mt-5">
                <Row className="justify-content-end" style={{ marginLeft: '230px' }}>
                    <Col md={8} className="ml-auto">
                        <Card style={{ width: '600px', height: 'auto', padding: '20px', marginTop: "40px" }}>
                            <Card.Body>
                                <h2 className="text-center mb-4">Account Setup</h2>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group controlId="formEmail" className="mb-3">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={handleInputChange}
                                            name="email"
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formPassword" className="mb-3">
                                        <Form.Label>Choose Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Enter your password"
                                            value={password}
                                            onChange={handleInputChange}
                                            name="password"
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formConfirmPassword" className="mb-3">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Confirm your password"
                                            value={confirmPassword}
                                            onChange={handleInputChange}
                                            name="confirmPassword"
                                        />
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Submit
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

export default AccountSetup;
