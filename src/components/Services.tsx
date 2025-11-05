import card1 from '../../assets/card1.png';
import card2 from '../../assets/card2.png';
import card3 from '../../assets/card3.png';
import { Reveal } from '@/components/Reveal';

const services = [
  { title: 'Visage & Corps', image: card1 },
  { title: 'Massage', image: card2 },
  { title: 'Head Spa', image: card3 }
];

export function Services() {
  return (
    <section className="section services-section">
      <Reveal>
        <div className="services-header">
          <h2 className="services-title">Nos soins</h2>
          <div className="services-underline" />
        </div>
      </Reveal>

      <div className="services-content">
        <div className="services-grid">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.12}>
              <div className="card service-card">
                <div className="card-media service-media">
                  <img src={s.image} alt={s.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div className="card-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,.45), transparent 40%)' }} />
                  <div className="card-title service-title">{s.title}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div style={{ flex: 1 }} />
        <div className="services-cta">
          <button className="btn btn-reserve" style={{ color: '#000000', fontSize: 20, borderRadius: 0, fontWeight: 50 }}>RESERVE TON MOMENT</button>
        </div>
      </div>
    </section>
  );
}


