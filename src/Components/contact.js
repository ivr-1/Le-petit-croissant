import React from 'react';
import Hero from './building-blocks/hero';
import HeroImage from '../Assets/heroImages/hero-contact.png';
import './contact.css';
import { MdOutlinePhone, MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";

function Contact() {
  const headerText = (
    <header>
      Contact Us
    </header>
  )
  const heroTagline = (
    <div>
      <p> Drop us a line, we're all ears </p>
    </div>
  )
  return (
    <div className="contact-section">
      <Hero
        headerText={headerText}
        headerTagline={heroTagline}
        heroImage={HeroImage}
      />
      <div className="contact-container">
        <div className='contact-info'>
          <table>
            <thead>
              <tr>
                <th colSpan="2">Contact Information</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='row-name'>
                  <MdOutlinePhone aria-hidden="true" />
                  <span>Phone number:</span>
                </td>
                <td>
                  <a href="tel:+17735550142" aria-label="Call (773) 555-0142">
                    (773) 555-0142
                  </a>
                </td>
              </tr>
              <tr>
                <td className='row-name'>
                  <MdOutlineEmail aria-hidden="true" />
                  <span>Email:</span>
                </td>
                <td>
                  <a href="mailto:info@lepetitcroissant.com" aria-label="Email info@lepetitcroissant.com">
                    info@lepetitcroissant.com
                  </a>
                </td>
              </tr>
              <tr>
                <td className='row-name'>
                  <MdOutlineLocationOn aria-hidden="true" />
                  <span>Address:</span>
                </td>
                <td>
                  <address>
                    4721 N Paulina St<br />
                    Chicago, IL 60640
                  </address>
                </td>
              </tr>
            </tbody>
          </table>
          <div className='hours'>
            <h2>Hours</h2>
            <div>Tue-Fri: 6AM-2PM</div>
            <div>Sat-Sun: 6AM-6PM</div>
            <div>Closed Mondays</div>
          </div>
        </div>
        <section className='parking-info'>
          <h1>Parking</h1>
          <p>Street parking is available along Main Street and adjacent side streets. For your convenience, there's a public parking lot two blocks south of Le Petit Croissant, offering affordable hourly rates.</p>
        </section>
      </div>
    </div>
  );
}

export default Contact;