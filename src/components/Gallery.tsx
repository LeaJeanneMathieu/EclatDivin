import { motion } from 'framer-motion';
import img1 from '../../assets/image-1.png';
import img2 from '../../assets/image-2.png';
import img3 from '../../assets/image-3.png';
import img4 from '../../assets/image-4.png';
import img5 from '../../assets/image-5.png';

const imgs = [img1, img2, img3, img4, img5];

export function Gallery() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
          {imgs.map((src, i) => (
            <motion.div key={src} className="card" style={{ aspectRatio: '3/4' }} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <img src={src} alt={`gal-${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


