import React from 'react';
import styles from './FeaturedRecipes.module.css';

const FeaturedRecipes = () => {
    const recipes = [
        { id: 1, title: "Spaghetti Carbonara", description: "Creamy Italian pasta with crispy pancetta." },
        { id: 2, title: "Classic Ratatouille", description: "A delightful French vegetable stew." },
        { id: 3, title: "Avocado Toast", description: "Simple and healthy start for your day." },
        // Add more recipes here
    ];

    return (
        <section className={styles.recipesSection}>
            <h2>Featured Recipes</h2>
            {recipes.map(recipe => (
                <div key={recipe.id} className={styles.recipe}>
                    <h3 className={styles.recipeTitle}>{recipe.title}</h3>
                    <p className={styles.recipeDescription}>{recipe.description}</p>
                </div>
            ))}
        </section>
    );
};

export default FeaturedRecipes;
