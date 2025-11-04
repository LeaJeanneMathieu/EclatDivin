import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import img1 from '../../assets/image-1.png';
import img2 from '../../assets/image-2.png';
import img3 from '../../assets/image-3.png';
import img4 from '../../assets/image-4.png';
import img5 from '../../assets/image-5.png';

const imgs = [img1, img2, img3, img4, img5];

// Layout simple - toutes les images ont la même taille

// Directions de révélation différentes pour chaque image
const revealDirections = [
  { x: -100, y: 0, rotate: -5 }, // Gauche
  { x: 100, y: -50, rotate: 5 }, // Droite + haut
  { x: 0, y: 100, rotate: 0 }, // Bas
  { x: -80, y: 80, rotate: -8 }, // Gauche + bas
  { x: 120, y: 0, rotate: 8 }, // Droite
];

interface GalleryItemProps {
  src: string;
  index: number;
  direction: { x: number; y: number; rotate: number };
  onImageClick: () => void;
}

function GalleryItem({ src, index, direction, onImageClick }: GalleryItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, { once: false, amount: 0.2 });

  // Parallax individuel pour chaque image
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"]
  });

  // Parallax horizontal et vertical pour chaque image
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [direction.x * 0.3, -direction.x * 0.3]
  );
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [direction.y * 0.5, -direction.y * 0.5]
  );
  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [direction.rotate * 0.3, -direction.rotate * 0.3]
  );

  return (
    <motion.div
      ref={itemRef}
      className="gallery-item"
      style={{
        x,
        y,
        rotate,
      }}
      initial={{
        opacity: 0,
        x: direction.x,
        y: direction.y,
        rotate: direction.rotate,
        scale: 0.9,
      }}
      animate={isInView ? {
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
      } : {}}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.08,
      }}
      onClick={onImageClick}
    >
      <div className="gallery-image-wrapper">
        <img
          src={src}
          alt={`gal-${index + 1}`}
          className="gallery-image"
          loading="lazy"
        />
      </div>
    </motion.div>
  );
}

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll progress pour la section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax pour le container
  const containerY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const containerOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  // Variants simplifiés pour meilleures performances
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05,
      },
    },
  };

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      const newIndex = selectedImage === 0 ? imgs.length - 1 : selectedImage - 1;
      setSelectedImage(newIndex);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      const newIndex = selectedImage === imgs.length - 1 ? 0 : selectedImage + 1;
      setSelectedImage(newIndex);
    }
  };

  // Navigation au clavier dans le lightbox
  useEffect(() => {
    if (selectedImage === null) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      } else if (e.key === 'ArrowLeft') {
        const newIndex = selectedImage === 0 ? imgs.length - 1 : selectedImage - 1;
        setSelectedImage(newIndex);
      } else if (e.key === 'ArrowRight') {
        const newIndex = selectedImage === imgs.length - 1 ? 0 : selectedImage + 1;
        setSelectedImage(newIndex);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  return (
    <>
      <section ref={sectionRef} className="gallery-section">
        <div className="container">
          <motion.div
            ref={containerRef}
            className="gallery-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            style={{
              y: containerY,
              opacity: containerOpacity,
            }}
          >
            {imgs.map((src, i) => (
              <GalleryItem
                key={src}
                src={src}
                index={i}
                direction={revealDirections[i]}
                onImageClick={() => handleImageClick(i)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="lightbox-close"
                onClick={closeLightbox}
                aria-label="Fermer"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <motion.img
                src={imgs[selectedImage]}
                alt={`gal-${selectedImage + 1}`}
                className="lightbox-image"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />

              <div className="lightbox-nav">
                <button
                  className="lightbox-nav-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                  aria-label="Image précédente"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <span className="lightbox-counter">
                  {selectedImage + 1} / {imgs.length}
                </span>
                <button
                  className="lightbox-nav-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  aria-label="Image suivante"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


