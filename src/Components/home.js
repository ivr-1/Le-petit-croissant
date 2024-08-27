import React, { useEffect, useState } from 'react';
import Hero from './building-blocks/hero';
import HeroImage from '../Assets/heroImages/hero-main.png'
import Logo from '../Assets/logo.png';
import CTA from '../Components/building-blocks/home-cta'
import MenuImg from '../Assets/home-cta-menu.png'
import OrderImg from '../Assets/home-cta-order.png'
import ReserveImg from '../Assets/home-cta-reserve.png'
import ReviewCarousel from './building-blocks/home-reviewCarousel';
import './home.css';
import Ratings from './building-blocks/ratingicons';


function Home({setReserveShow}) {
  const breakpoint = 1001;
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  const heroLogo = (
    <div className="hero-logo">
      <img src={Logo} alt="Le Petit Croissant Logo" className="hero-logo-img" />
      <header className="hero-logo-text">Le Petit Croissant</header>
    </div>
  )
  
  const heroTagline = (
    <div className='hero-tagline'> 
      <p> Indulge in Parisian charm </p>
      <Ratings iconSize="80px" iconGap="50px" />
    </div>
  )

  return (
    <div className="home-section">
      <Hero 
        headerText={!isMobile? heroLogo : null}
        headerTagline={heroTagline}
        heroImage={HeroImage} 
      />
      <div className="ctaContainer">
        <CTA 
          headerText="Specialties" 
          descriptionText="Savor our fresh baguettes. Delight in colorful macarons." 
          contentImg={MenuImg} 
          imgAlt="Freshly baked baguette"
          buttonText="Full Menu"
          buttonLink="/foodmenu"
          bgColor="#FFA1A1"
        />
        <CTA 
          headerText="Dine with us" 
          descriptionText="Experience the flavors of France, from classics to gourmet delights." 
          contentImg={ReserveImg} 
          imgAlt="A plate with gourmet food, egg and caviar"
          buttonText="Reserve a Table"
          buttonLink=""
          handleClick={() => setReserveShow(true)}
          bgColor="#FFC6C6"
        />
        <CTA 
          headerText="France delivered fresh" 
          descriptionText="Parisian delights, from our kitchen to your doorstep." 
          contentImg={OrderImg} 
          imgAlt="Flag of France"
          buttonText="Order Online"
          buttonLink="/order"
          bgColor="#FFA1A1"
        />
      </div>
      <ReviewCarousel />
  </div>
  );
}

export default Home;


