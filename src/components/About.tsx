import { motion } from 'framer-motion';
import about1 from '../../assets/about1.png';
import about2 from '../../assets/about2.png';

export function About() {
  return (
    <section className="section">
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: 28 }}>About us</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 28, alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="card" style={{ position: 'relative' }}>
              <img src={about1} alt="salon" style={{ width: '100%', display: 'block' }} />
              <img src={about2} alt="portrait" style={{ position: 'absolute', right: 24, bottom: -40, width: 220, borderRadius: 12, boxShadow: '0 10px 30px rgba(0,0,0,.2)' }} />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 style={{ marginTop: 0 }}>Self Care Club</h3>
            <p className="muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore exercitationem aspernatur vitae placeat eveniet illum harum, tempora veritatis dicta. Voluptatum eveniet impedit cumque libero, eos quos recusandae illo! Ipsa, molestiae.</p>
            <p className="muted">Sollicitudin purus amet tellus cursus rutrum orci. Ante tincidunt consectetur nunc praesent cras quis aliquet massa.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


