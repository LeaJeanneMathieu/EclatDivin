import { useState } from 'react';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <span className="brand">ECLAT DIVIN</span>

        <nav className="desktop-nav" aria-label="Navigation principale">
          <a href="#services" className="nav-link">
            SERVICES
          </a>
          <a href="#about" className="nav-link">
            ABOUT
          </a>
          <a href="#contact" className="nav-link">
            CONTACT
          </a>
          <a href="#book" className="nav-link">
            BOOK RESERVATION
          </a>
        </nav>

        <button
          className="hamburger"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {menuOpen ? (
              // X icon
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              // Hamburger icon
              <>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" className="mobile-menu" aria-label="Navigation mobile">
          <a href="#services" className="nav-link" onClick={closeMenu}>
            SERVICES
          </a>
          <a href="#about" className="nav-link" onClick={closeMenu}>
            ABOUT
          </a>
          <a href="#contact" className="nav-link" onClick={closeMenu}>
            CONTACT
          </a>
          <a href="#book" className="nav-link" onClick={closeMenu}>
            BOOK RESERVATION
          </a>
        </nav>
      )}
    </header>
  );
}
