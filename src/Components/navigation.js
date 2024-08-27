import './navigation.css';
import Logo from '../Assets/logo.png';
import { useState, useEffect } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';
import Social from './building-blocks/socialicons';
import Button from './building-blocks/button';

function DesktopNav({ navItems, setReserveShow }) {
  return (
    <nav>
      <Link to="/">
        <div>
          <img src={Logo} alt="Le Petit Croissant Logo" />
          <header>Le Petit Croissant</header>
        </div>
      </Link>
      <div>
        <ul>
          {navItems.map((item, index) => (
            <Link to={item.path} key={index}>
              <li>{item.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div>
        <Button 
          buttonText="Reserve a Table"
          marginOverride="0"
          heightOverride="34px"
          handleClick={() => setReserveShow(true)}
        />
      </div>
    </nav>
  );
}

function MobileNavBar({ setSplashOpen }) {
  return (
    <nav>
      <Link to="/">
        <div>
          <img src={Logo} alt="Le Petit Croissant Logo" />
          <header>Le Petit Croissant</header>
        </div>
      </Link>
      <RxHamburgerMenu
        style={{ cursor: 'pointer', "-webkit-tap-highlight-color": "transparent" }}
        onClick={() => setSplashOpen(true)}
        aria-label='Open-Menu'
      />
    </nav>
  );
}

function MobileNavSplash({ setSplashOpen, navItems, splashOpen, resize, setReserveShow }) {
  useEffect(() => {
    if (resize) {
      document.documentElement.style.setProperty('--transition-duration', '0s');
    } else {
      document.documentElement.style.setProperty('--transition-duration', '0.3s');
    }
    if (splashOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [resize, splashOpen]);

  return (
    <nav className={`mobile-splash ${splashOpen ? 'open' : ''}`}>
      <ul className={splashOpen ? 'open' : ''}>
        {navItems.map((item, index) => (
          <Link to={item.path} key={index}>
            <li onClick={() => setSplashOpen(false)}>{item.name}</li>
          </Link>
        ))}
        <button onClick={() => { setReserveShow(true); setSplashOpen(false); }}>Reserve a Table</button>
        <Social iconGap="35px" iconSize="30px" />
        <button className='mobile-splash-exit' onClick={() => setSplashOpen(false)}>
          ×
        </button>
      </ul>
    </nav>
  )
}

function MobileNav({ navItems, setReserveShow }) {
  const [splashOpen, setSplashOpen] = useState(false);
  const [resize, setResize] = useState(false);

  useEffect(() => {
    let resizeTimer;
    const handleResize = () => {
      setResize(true);
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setResize(false);
      }, 300);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <MobileNavBar setSplashOpen={setSplashOpen} />
      <MobileNavSplash
        setSplashOpen={setSplashOpen}
        navItems={navItems}
        splashOpen={splashOpen}
        resize={resize}
        setReserveShow={setReserveShow}
      />
    </>
  );
}

function Navigation({ navItems, setReserveShow }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1000);
    };
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile ? 
    <MobileNav navItems={navItems} setReserveShow={setReserveShow} /> : 
    <DesktopNav navItems={navItems} setReserveShow={setReserveShow} />;
}

export default Navigation;