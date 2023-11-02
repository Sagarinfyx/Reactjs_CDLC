import React, { useState } from 'react';
import styles from './SignUpForm.module.css'; // Reusing the same styles

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Again, you'd normally handle the login via the server here
        console.log('Login submitted:', formData);
    };

    return (
        <div className={styles.formContainer}>
            <h2>Login</h2>
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
        </div>
    );
};

export default LoginForm;
