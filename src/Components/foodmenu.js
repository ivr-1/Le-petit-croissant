import React from 'react';
import Hero from './building-blocks/hero';
import HeroImage from '../Assets/heroImages/hero-foodmenu.png';
import FoodMenuTable from './building-blocks/foodmenu-table'
import './foodmenu.css';

function Foodmenu() {
  const headerText = (
    <header>
        Menu
    </header>
  )
  
  const heroTagline = (
    <div> 
      <p> Authentic flavors, artisanal passion </p>
    </div>
  )

  return (
    <div>
      <Hero
        headerText={headerText}
        headerTagline={heroTagline}
        heroImage={HeroImage}
      />
      <div className="food-menu-container">
        <FoodMenuTable />
      </div>
  </div>
  );
}

export default Foodmenu;


