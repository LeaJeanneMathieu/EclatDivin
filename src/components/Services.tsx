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
    <section className="section" style={{ background: '#F6EBD7', minHeight: '100vh', paddingTop: 80, paddingBottom: 80, display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: 72, marginLeft: 16 }}>
        <h2 style={{ textAlign: 'left', marginBottom: 10, letterSpacing: 1, fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif", fontWeight: 400, fontSize: 24 }}>Nos soins</h2>
        <div style={{ width: 360, height: 1, background: '#000', borderRadius: 1 }} />
      </div>

      <div style={{ marginLeft: 16, maxWidth: 1400, display: 'flex', flexDirection: 'column', flex: 1 }}>

        <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 360px)', gap: 96, justifyContent: 'start' }}>
          {services.map((s, i) => (
            <motion.div key={s.title} className="card" style={{ borderRadius: 0, overflow: 'hidden', width: 360 }} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div style={{ position: 'relative', aspectRatio: '3/5' }}>
                <img src={s.image} alt={s.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,.45), transparent 40%)' }} />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontFamily: 'Playfair Display', fontSize: 28, textAlign: 'center', letterSpacing: 1 }}>{s.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 96 }}>
          <button className="btn btn-reserve" style={{ color: '#000000', fontSize: 24, padding: '40px 50px', borderRadius: 0, fontWeight: 50 }}>RESERVE TON MOMENT</button>
        </div>
      </div>
    </section>
  );
}


