import React from 'react';

const FeaturedRecipes = () => {
    const recipes = [
        { id: 1, title: "Recipe 1", description: "This is a brief description of Recipe 1." },
        { id: 2, title: "Recipe 2", description: "This is a brief description of Recipe 2." },
        // Add more recipes here
    ];

    return (
        <section className="featured-recipes">
            <h2>Featured Recipes</h2>
            {recipes.map(recipe => (
                <div key={recipe.id} className="recipe">
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
                </div>
            ))}
        </section>
    );
};

export default FeaturedRecipes;
