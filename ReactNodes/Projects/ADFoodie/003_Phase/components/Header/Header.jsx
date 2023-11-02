import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Welcome to ADFoodie</h1>
            <p className={styles.subtitle}>Discover and share the joy of cooking</p>
        </header>
    );
};

export default Header;
