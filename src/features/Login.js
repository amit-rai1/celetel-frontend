import React, { useState } from 'react';
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import { login } from '../Service/auth.service';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            // Call the login service passing email and password
            const result = await login(email, password);

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
        <div style={{ backgroundColor: '#1F1F1F', minHeight: '500vh' }}>
            <Container className="mt-5">
                <Row className="justify-content-end" style={{ marginLeft: '230px' }}>
                    <Col md={8} className="ml-auto">
                        <Card style={{ width: '400px', padding: '20px', marginTop: '40px' }}>
                            <Card.Body>
                                <h2 className="text-center mb-4">Login</h2>
                                <Form>
                                    <Form.Group controlId="formEmail" className="mb-3">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formPassword" className="mb-4">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Enter your password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Button
                                        variant="primary"
                                        type="button"
                                        onClick={handleLogin}
                                        disabled={!email || !password}
                                    >
                                        Login
                                    </Button>
                                </Form>
                            </Card.Body>
                            <Card.Footer className="text-muted text-center">
                                New user? <a href="/signup">Sign Up</a>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;
