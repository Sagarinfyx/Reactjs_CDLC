import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <p>Follow us on social media for more recipes!</p>
                <p className={styles.copyRight}>© 2023 ADFoodie. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
