import { memo } from 'react';
import type React from 'react';
import hero1 from '../../assets/hero-cover1.png';
import hero2 from '../../assets/hero-cover2.png';
import logo from '../../assets/logo.png';

function HeroBase(): React.ReactElement {
  return (
    <section className="section hero">
      <div className="hero-wrapper">
        <div className="hero-split">
          <div className="hero-col">
            <img src={hero1} alt="spa" className="hero-img" />
          </div>
          <div className="hero-col">
            <img src={hero2} alt="massage" className="hero-img" />
          </div>
        </div>

        <div className="hero-overlay" />

        <div className="hero-foreground">
          <div className="hero-center-logo">
            <img src={logo} alt="Éclat Divin" className="hero-logo-img" />
          </div>

          <div className="hero-bottom-cta">
            <p className="hero-tagline">Révélez votre éclat intérieur</p>
            <button className="btn btn-hero">Découvrir nos soins</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export const Hero = memo(HeroBase);
