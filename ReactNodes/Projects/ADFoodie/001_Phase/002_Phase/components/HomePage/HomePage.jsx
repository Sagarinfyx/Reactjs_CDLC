import React from 'react';
import Header from '../Header/Header';
import FeaturedRecipes from '../FeaturedRecipes/FeaturedRecipes.jsx';
import Footer from '../Footer/Footer.jsx';

const HomePage = () => {
    return (
        <div className="home">
            <Header />
            <FeaturedRecipes />
            <Footer />
        </div>
    );
};

export default HomePage;
