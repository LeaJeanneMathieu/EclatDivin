import { motion } from 'framer-motion';
import profil1 from '../../assets/profil1.png';
import profil2 from '../../assets/profil2.png';
import profil3 from '../../assets/profil3.png';

const items = [
  { name: 'Michele', avatar: profil1, text: 'Lorem ipsum dolor sit amet consectetur. Cras aliquet massa.' },
  { name: 'Aline', avatar: profil2, text: 'Nunc praesent cras quis aliquet massa. Lectus platea massa.' },
  { name: 'Sarah', avatar: profil3, text: 'Tempus rhoncus aenean ultricies. Pulvinar urna velit mauris.' }
];

export function Testimonials() {
  return (
    <section className="section" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        <h3 style={{ textAlign: 'center', marginBottom: 24, fontWeight: 500 }}>Elles ont révélé leur éclat intérieur</h3>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {items.map((t, i) => (
            <motion.div key={t.name} className="card" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ padding: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <img src={t.avatar} alt={t.name} style={{ width: 48, height: 48, borderRadius: '50%' }} />
                <div>
                  <div style={{ fontWeight: 600 }}>{t.name}</div>
                  <div style={{ color: '#e1b955' }}>★★★★★</div>
                </div>
              </div>
              <p className="muted" style={{ marginTop: 12 }}>{t.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


