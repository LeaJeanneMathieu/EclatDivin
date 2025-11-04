import profil1 from '../../assets/profil1.png';
import profil2 from '../../assets/profil2.png';
import profil3 from '../../assets/profil3.png';
import { Reveal } from '@/components/Reveal';

const items = [
  { name: 'Michele', avatar: profil1, text: 'Lorem ipsum dolor sit amet consectetur. Cras aliquet massa.' },
  { name: 'Aline', avatar: profil2, text: 'Nunc praesent cras quis aliquet massa. Lectus platea massa.' },
  { name: 'Sarah', avatar: profil3, text: 'Tempus rhoncus aenean ultricies. Pulvinar urna velit mauris.' }
];

export function Testimonials() {
  return (
    <section className="section" style={{ background: '#F6EBD7' }}>
      <div className="container">
        <Reveal>
          <div style={{ marginBottom: 72, textAlign: 'center' }}>
            <h2 style={{ textAlign: 'center', marginBottom: 10, fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif", fontWeight: 400, fontStyle: 'italic', fontSize: '32px', display: 'inline-block', margin: '0 auto 10px' }}>Elles ont révélé leur éclat intérieur</h2>
            <div style={{ width: 360, height: 1, background: '#CE7100', borderRadius: 1, margin: '0 auto' }} />
          </div>
        </Reveal>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginBottom: 48 }}>
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.12}>
              <div className="card" style={{ padding: '40px 30px', minHeight: '280px', background: '#D5B895', border: '1px solid white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={t.avatar} alt={t.name} style={{ width: 80, height: 80, borderRadius: '50%', marginBottom: 20 }} />
                <p className="muted" style={{ textAlign: 'left', width: '100%', marginBottom: 20, flex: 1 }}>{t.text}</p>
                <div style={{ color: 'white', marginBottom: 20 }}>★★★★★</div>
                <div style={{ fontStyle: 'italic', textAlign: 'center' }}>{t.name}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 32 }}>
          <button className="btn btn-view-more" style={{ fontSize: 20, padding: '16px 32px', borderRadius: 0, fontWeight: 50 }}>VIEW MORE</button>
        </div>
      </div>
    </section>
  );
}


