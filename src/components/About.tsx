import about1 from '../../assets/about1.png';
import about2 from '../../assets/about2.png';
import { Reveal } from '@/components/Reveal';

export function About() {
  return (
    <section className="section about-section">
      <div className="container">
        <Reveal>
          <h2 style={{ textAlign: 'center', marginBottom: 10, letterSpacing: 1, fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif", fontWeight: 400, fontSize: 40 }}>ABOUT US</h2>
        </Reveal>
        <Reveal>
          <div style={{ width: 420, height: 1, background: '#000', borderRadius: 1, margin: '0 auto 24px' }} />
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 28, alignItems: 'center' }}>
          <Reveal y={30}>
            <div>
              <div style={{ position: 'relative', overflow: 'visible', background: 'transparent', marginLeft: -120 }}>
                <div className="card" style={{ position: 'relative', width: '90%', borderRadius: 0, overflow: 'visible', background: 'transparent' }}>
                  <img src={about1} alt="salon" style={{ width: '100%', display: 'block', maxHeight: '800px', objectFit: 'cover' }} />
                  <img src={about2} alt="portrait" style={{ position: 'absolute', right: -80, top: '50%', transform: 'translateY(-50%)', width: 220, zIndex: 2 }} />
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div style={{ paddingLeft: 40 }}>
              <h3 style={{ marginTop: 0, fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial', fontWeight: 600, fontSize: 32 }}>SELF CARE CLUB</h3>
              <p className="muted" style={{ fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial', fontSize: 20, letterSpacing: '0.1em', lineHeight: 2 }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore exercitationem aspernatur vitae placeat eveniet illum harum, tempora veritatis dicta. Voluptatum eveniet impedit cumque libero, eos quos recusandae illo! Ipsa, molestiae.</p>
              <p className="muted" style={{ fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial', fontSize: 20, letterSpacing: '0.1em', lineHeight: 2 }}>Sollicitudin purus amet tellus cursus rutrum orci. Ante tincidunt consectetur nunc praesent cras quis aliquet massa.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


