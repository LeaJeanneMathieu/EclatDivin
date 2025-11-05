import { memo } from 'react';
import type React from 'react';
import profil1 from '../../assets/profil1.png';
import profil2 from '../../assets/profil2.png';
import profil3 from '../../assets/profil3.png';
import { Reveal } from '@/components/Reveal';

const items = [
  {
    name: 'Michele',
    avatar: profil1,
    text: 'Lorem ipsum dolor sit amet consectetur. Cras aliquet massa.',
  },
  {
    name: 'Aline',
    avatar: profil2,
    text: 'Nunc praesent cras quis aliquet massa. Lectus platea massa.',
  },
  {
    name: 'Sarah',
    avatar: profil3,
    text: 'Tempus rhoncus aenean ultricies. Pulvinar urna velit mauris.',
  },
];

function TestimonialsBase(): React.ReactElement {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <Reveal>
          <div className="testimonials-header">
            <h2 className="testimonials-title">Elles ont révélé leur éclat intérieur</h2>
            <div className="testimonials-underline" />
          </div>
        </Reveal>
        <div className="testimonials-grid">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.12}>
              <div className="card testimonial-card">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="testimonial-avatar"
                  loading="lazy"
                  decoding="async"
                />
                <p className="muted testimonial-text">{t.text}</p>
                <div style={{ color: 'white', marginBottom: 20 }}>★★★★★</div>
                <div className="testimonial-name">{t.name}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="testimonials-cta">
          <button
            className="btn btn-view-more"
            style={{ fontSize: 20, padding: '16px 32px', borderRadius: 0, fontWeight: 50 }}
          >
            VIEW MORE
          </button>
        </div>
      </div>
    </section>
  );
}

export const Testimonials = memo(TestimonialsBase);
