import React, { useState, useEffect } from 'react';
import styles from './AddRecipe.module.css';

function AddRecipe() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/recipes')
            .then(response => response.json())
            .then(data => {
                if (data && data.recipes) {
                    setRecipes(data.recipes);
                } else {
                    console.error("Expected 'recipes' key not found in data");
                }
            })
            .catch(error => console.error('Error fetching recipes:', error.message));
    }, []);
    

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:5000/api/recipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, description, image }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                alert(data.message);
                setTitle('');
                setDescription('');
                setImage('');
            } else {
                alert('Error adding recipe');
            }
        });
    };

    const handleDelete = (recipeId) => {
        fetch(`http://localhost:5000/api/recipes/${recipeId}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.status === 'success') {
                alert(data.message);
                setRecipes(prevRecipes => prevRecipes.filter(recipe => recipe.id !== recipeId));
            } else {
                alert('Error deleting recipe');
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error.message);
        });
    };
    

    return (
        <div className={styles.container}>
            <div className={styles.addRecipe}>
                <h2>Add New Recipe</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label>Title:</label>
                        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Description:</label>
                        <textarea value={description} onChange={e => setDescription(e.target.value)}></textarea>
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Image URL:</label>
                        <input type="text" value={image} onChange={e => setImage(e.target.value)} />
                    </div>
                    <button type="submit" className={styles.recipeButton}>Add Recipe</button>
                </form>
            </div>

            <div className={styles.recipeList}>
                <h2>Recipes</h2>
                <ul>
                    {Array.isArray(recipes) && recipes.map(recipe => (
                        <li key={recipe.id}>
                            <h3>{recipe.title}</h3>
                            <p>{recipe.description}</p>
                            <img src={recipe.image} alt={recipe.title} width="200" />
                            <button onClick={() => handleDelete(recipe.id)} className={styles.recipeButton}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default AddRecipe;
