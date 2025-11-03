import { motion } from 'framer-motion';
import hero1 from '../../assets/hero-cover1.png';
import hero2 from '../../assets/hero-cover2.png';
import logo from '../../assets/logo.png';

export function Hero() {
  return (
    <section className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
      <div className="container" style={{ maxWidth: 1400 }}>
        <div style={{ position: 'relative', height: 520, borderRadius: 12, overflow: 'hidden' }}>
          <div style={{ display: 'flex', width: '100%', height: '100%' }}>
            <div style={{ position: 'relative', width: '50%', height: '100%' }}>
              <img src={hero1} alt="spa" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'relative', width: '50%', height: '100%' }}>
              <img src={hero2} alt="massage" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>

          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'linear-gradient(90deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 40%, transparent 70%)' }} />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ position: 'absolute', inset: 0, color: 'white' }}
          >
            {/* Logo centré */}
            <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
              <img src={logo} alt="Éclat Divin" style={{ width: 380, maxWidth: '70vw', filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.35))' }} />
            </div>

            {/* Texte en bas centré */}
            <p style={{ position: 'absolute', bottom: 24, left: 0, right: 0, margin: 0, textAlign: 'center', fontSize: 18, lineHeight: 1.5 }}>
              Révélez votre éclat intérieur
            </p>

            {/* Bouton en bas à droite */}
            <div style={{ position: 'absolute', right: 24, bottom: 20 }}>
              <button className="btn" style={{ background: '#d7c0a2' }}>Découvrir nos soins</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


