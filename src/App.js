import './App.css';
import Navigation from './Components/navigation.js'
import Reservations from "./Components/reservations.js"
import Home from "./Components/home.js"
import Footer from './Components/footer.js';
import ScrollToTop from './Components/building-blocks/scrolltotop.js';
import {Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import navItems from './Components/building-blocks/navitems.js';
import Meta from './Components/building-blocks/meta.js';

function App() {
  const [reserveShow, setReserveShow] = useState(false)

  return (
    <div className='main-container'>
      <ScrollToTop />
      <header>
        <Navigation setReserveShow={setReserveShow} navItems={navItems} />
      </header>
      <main>
        <Routes>
          {navItems.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              element={
                <>
                  <Meta {...item.meta} />
                  <item.component />
                </>
              }
            />
          ))}
          <Route
            path="/"
            element={
              <>
                <Meta
                  title="Le Petit Croissant"
                  description="Welcome to Le Petit Croissant, savor the taste of France."
                  ogTitle="Home - Le Petit Croissant"
                  ogDescription="Savor the taste of France at Le Petit Croissant."
                  ogImage="%PUBLIC_URL%/og-contact.jpg"
                />
                <Home setReserveShow={setReserveShow} />
              </>
            }
          />
        </Routes>
        {reserveShow && (
          <div>
            <Reservations handleClick={() => setReserveShow(false)} />
          </div>
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default App;
