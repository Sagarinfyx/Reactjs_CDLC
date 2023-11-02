import React from 'react';
import Header from '../Header/Header';
import FeaturedRecipes from '../FeaturedRecipes/FeaturedRecipes.jsx';
import Footer from '../Footer/Footer.jsx';
import RecipeOfTheDay from '../RecipeOfTheDay/RecipeOfTheDay.jsx';

const HomePage = () => {
    return (
        <div className="home">
            <Header />
            <RecipeOfTheDay />
            <FeaturedRecipes />
            <Footer />
        </div>
    );
};

export default HomePage;
