import React, { useState } from 'react';
import styles from './FeaturedRecipes.module.css';
import SearchBar from '../SearchBar/SearchBar';

const FeaturedRecipes = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [recipes] = useState([
        { id: 1, title: "Spaghetti Carbonara", description: "Creamy Italian pasta with crispy pancetta." },
        { id: 2, title: "Classic Ratatouille", description: "A delightful French vegetable stew." },
        { id: 3, title: "Avocado Toast", description: "Simple and healthy start for your day." },
        // Add more recipes here
    ]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const filteredRecipes = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchTerm)
    );

    return (
        <section className={styles.recipesSection}>
            <h2>Featured Recipes</h2>
            <SearchBar onSearchChange={handleSearchChange} />
            {filteredRecipes.map(recipe => (
                <div key={recipe.id} className={styles.recipe}>
                    <h3 className={styles.recipeTitle}>{recipe.title}</h3>
                    <p className={styles.recipeDescription}>{recipe.description}</p>
                </div>
            ))}
            {filteredRecipes.length === 0 && <p>No recipes found.</p>}
        </section>
    );
};

export default FeaturedRecipes;
