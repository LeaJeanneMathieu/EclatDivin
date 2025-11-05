import type React from 'react';
import { memo } from 'react';
import logoFooter from '../../assets/logo-footer.png';

function FooterBase(): React.ReactElement {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3 className="footer-title">Navigation</h3>
            <nav className="footer-nav">
              <a href="#about" className="footer-link">
                À propos
              </a>
              <a href="#services" className="footer-link">
                Services
              </a>
              <a href="#contact" className="footer-link">
                Contact
              </a>
              <a href="#book" className="footer-link">
                Réservation
              </a>
            </nav>
          </div>

          <div className="footer-separator"></div>

          <div className="footer-column footer-center-column">
            <h3 className="footer-title">Suivez-nous</h3>
            <div className="footer-social">
              <a href="#" className="footer-link footer-social-link">
                Instagram
              </a>
              <a href="#" className="footer-link footer-social-link">
                Pinterest
              </a>
              <a href="#" className="footer-link footer-social-link">
                TikTok
              </a>
            </div>
            <div className="footer-legal">
              <a href="#" className="footer-link footer-legal-link">
                Politique de confidentialité
              </a>
            </div>
          </div>

          <div className="footer-separator"></div>

          <div className="footer-column footer-logo-column">
            <img
              src={logoFooter}
              alt="Éclat Divin"
              className="footer-logo"
              loading="lazy"
              decoding="async"
            />
            <p className="footer-copyright">© 2024 Éclat Divin</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export const Footer = memo(FooterBase);
