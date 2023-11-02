import React from 'react';
import styles from './RecipeOfTheDay.module.css';

const RecipeOfTheDay = () => {
    const recipe = {
        title: "Mushroom Risotto",
        content: "A rich and creamy risotto with wild mushrooms, garlic, and parmesan cheese."
    };

    return (
        <div className={styles.recipeOfTheDay}>
            <h2 className={styles.recipeTitle}>{recipe.title}</h2>
            <p className={styles.recipeContent}>{recipe.content}</p>
        </div>
    );
};

export default RecipeOfTheDay;
