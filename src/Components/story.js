import React from 'react';
import Hero from './building-blocks/hero';
import HeroImage from '../Assets/heroImages/hero-story.png';
import Roller from '../Assets/story-roller.png'
import Tower from '../Assets/story-tower.png'
import Statue from '../Assets/story-statue.png'
import './story.css';

function Story() {
  const headerText = (
    <header>
        Our Story
    </header>
  )
  
  const heroTagline = (
    <div> 
      <p> From Montmartre to Main Street </p>
    </div>
  )

  return (
    <div className="story-section">
      <Hero
        headerText={headerText}
        headerTagline={heroTagline}
        heroImage={HeroImage}
      />
      <div className="bio">
        <img src={Tower} aria-label='eiffel tower'/>
        <article>
            <h2> Elaine & Marcel </h2>
            <p>Elaine, a Le Cordon Bleu graduate with a flair for innovative flavors, and Marcel, winner of the prestigious "Best Baguette in Paris" award, combined their talents to open a tiny bakery in Montmartre. Their little shop quickly became the talk of the town, earning a coveted Michelin star within its first year. Locals and tourists alike lined up daily for Marcel's heavenly baguettes and Elaine's creative éclairs.</p>
            <img src={Roller} aria-label='dough roller'/>
            <p> Dreaming of new adventures, the couple decided to bring a taste of Paris across the Atlantic. They packed their rolling pins, secret recipes, and an unshakeable passion for French baking. In a cozy corner of their new American home, Elaine and Marcel opened Le Petit Croissant. Here, they continue to sprinkle a bit of French magic into their community, delighting patrons with authentic flavors and warm hospitality. </p>
        </article>
        <img src={Statue} aria-label='statue of liberty'/>
    </div>
  </div>
  );
}

export default Story;


