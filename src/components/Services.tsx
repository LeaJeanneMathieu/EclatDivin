import { motion } from 'framer-motion';
import card1 from '../../assets/card1.png';
import card2 from '../../assets/card2.png';
import card3 from '../../assets/card3.png';

const services = [
  { title: 'Visage & Corps', image: card1 },
  { title: 'Massage', image: card2 },
  { title: 'Head Spa', image: card3 }
];

export function Services() {
  return (
    <section className="section" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: 28, letterSpacing: 1 }}>Nos soins</h2>

        <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {services.map((s, i) => (
            <motion.div key={s.title} className="card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div style={{ position: 'relative', aspectRatio: '3/4' }}>
                <img src={s.image} alt={s.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,.45), transparent 40%)' }} />
                <div style={{ position: 'absolute', left: 16, bottom: 16, color: 'white', fontFamily: 'Playfair Display', fontSize: 22 }}>{s.title}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 28 }}>
          <button className="btn" style={{ background: '#d7c0a2' }}>Réserve ton moment</button>
        </div>
      </div>
    </section>
  );
}


