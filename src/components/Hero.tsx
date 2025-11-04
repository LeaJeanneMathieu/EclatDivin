import hero1 from '../../assets/hero-cover1.png';
import hero2 from '../../assets/hero-cover2.png';
import logo from '../../assets/logo.png';

export function Hero() {
  return (
    <section className="section" style={{ paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0 }}>
      <div style={{ position: 'relative', height: '100vh', overflow: 'hidden', borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
          <div style={{ display: 'flex', width: '100%', height: '100%' }}>
            <div style={{ position: 'relative', width: '50%', height: '100%' }}>
              <img src={hero1} alt="spa" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'relative', width: '50%', height: '100%' }}>
              <img src={hero2} alt="massage" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>

          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'linear-gradient(90deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 40%, transparent 70%)' }} />

          <div style={{ position: 'absolute', inset: 0, color: 'white' }}>
            {/* Logo centré */}
            <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
              <img src={logo} alt="Éclat Divin" style={{ width: 520, maxWidth: '80vw', filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.35))' }} />
            </div>

            {/* Texte + bouton en bas à droite */}
            <div style={{ position: 'absolute', right: 24, bottom: 20, display: 'flex', alignItems: 'center', gap: 190 }}>
              <p style={{ margin: 0, textAlign: 'right', fontSize: 32, lineHeight: 1.2, fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial', fontWeight: 100, fontStyle: 'italic' }}>
                Révélez votre éclat intérieur
              </p>
              <button className="btn btn-hero">Découvrir nos soins</button>
            </div>
          </div>
      </div>
    </section>
  );
}


