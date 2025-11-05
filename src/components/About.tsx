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
        <div className="about-grid">
          <Reveal y={30}>
            <div>
              <div className="about-images-wrap">
                <div className="card about-card">
                  <img src={about1} alt="salon" className="about-main-img" />
                  <img src={about2} alt="portrait" className="about-portrait" />
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="about-text">
              <h3 className="about-h3">SELF CARE CLUB</h3>
              <p className="muted about-p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore exercitationem aspernatur vitae placeat eveniet illum harum, tempora veritatis dicta. Voluptatum eveniet impedit cumque libero, eos quos recusandae illo! Ipsa, molestiae.</p>
              <p className="muted about-p">Sollicitudin purus amet tellus cursus rutrum orci. Ante tincidunt consectetur nunc praesent cras quis aliquet massa.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


