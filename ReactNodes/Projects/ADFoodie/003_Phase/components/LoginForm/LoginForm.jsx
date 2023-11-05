// LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../SignUpForm/SignUpForm.module.css';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can implement the login logic
        console.log('Form submitted:', formData);
    };

    const navigateToSignUp = () => {
        navigate('/signup'); // navigate to the sign-up screen
    };

    return (
        <div className={styles.formContainer}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.formField}>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                        className={styles.input}
                    />
                </div>
                <div className={styles.formField}>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        required
                        className={styles.input}
                    />
                </div>
                <button type="submit" className={styles.button}>Login</button>
            </form>
            <p>Don't have an account? <button onClick={navigateToSignUp}>Sign Up Here</button></p>
        </div>
    );
};

export default LoginForm;
