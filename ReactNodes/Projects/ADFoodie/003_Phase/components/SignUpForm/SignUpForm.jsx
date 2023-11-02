import React, { useState } from 'react';
import styles from './SignUpForm.module.css';

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would usually send the data to the server
        console.log('Form submitted:', formData);
    };

    return (
        <div className={styles.formContainer}>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.formField}>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Username"
                        required
                        className={styles.input}
                    />
                </div>
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
                <button type="submit" className={styles.button}>Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpForm;
