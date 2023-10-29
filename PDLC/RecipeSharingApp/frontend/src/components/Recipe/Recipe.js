import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Recipe.module.css';

function Recipe() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/recipes')
            .then(response => response.json())
            .then(data => setRecipes(data.recipes))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className={styles.container}>
            {recipes.map(({ id, title, description, image }) => (
                <div key={id} className={styles.recipe}>
                    <img src={image} alt={title} />
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <Link to={`/recipes/${id}`}>Read More</Link>
                </div>
            ))}
        </div>
    );
}

export default Recipe;
