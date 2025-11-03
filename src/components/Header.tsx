export function Header() {
  return (
    <header style={{ background: '#F6EBD7' }}>
      <div className="container" style={{ maxWidth: 1400, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 24px' }}>
        <span style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, letterSpacing: 3, color: '#2b2b2b' }}>ECLAT DIVIN</span>
        <nav style={{ display: 'flex', gap: 32, alignItems: 'center', fontSize: 14, letterSpacing: 1 }}>
          <a href="#services" className="nav-link">SERVICES</a>
          <a href="#about" className="nav-link">ABOUT</a>
          <a href="#contact" className="nav-link">CONTACT</a>
          <a href="#book" className="nav-link">BOOK RESERVATION</a>
        </nav>
      </div>
    </header>
  );

}
