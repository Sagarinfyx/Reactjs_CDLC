import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSearchChange }) => {
    return (
        <div className={styles.searchBarContainer}>
            <input
                type="text"
                className={styles.searchInput}
                placeholder="Search for recipes..."
                onChange={onSearchChange}
            />
        </div>
    );
};

export default SearchBar;
