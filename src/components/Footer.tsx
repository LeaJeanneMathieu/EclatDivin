import logoFooter from '../../assets/logo-footer.png';

export function Footer() {
  return (
    <footer className="section" style={{ background: '#d5c1a8' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', alignItems: 'center', gap: 20 }}>
        <div>
          <a href="#" className="muted" style={{ display: 'block' }}>À propos</a>
          <a href="#" className="muted" style={{ display: 'block' }}>Contact</a>
          <a href="#" className="muted" style={{ display: 'block' }}>Politique de confidentialité</a>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img src={logoFooter} alt="Éclat Divin" style={{ height: 56 }} />
        </div>
        <div style={{ textAlign: 'right' }}>
          <a href="#" className="muted" style={{ marginLeft: 12 }}>Instagram</a>
          <a href="#" className="muted" style={{ marginLeft: 12 }}>Pinterest</a>
          <a href="#" className="muted" style={{ marginLeft: 12 }}>TikTok</a>
        </div>
      </div>
    </footer>
  );
}


