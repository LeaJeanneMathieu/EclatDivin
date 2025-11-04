import { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

type RevealProps = PropsWithChildren<{
  delay?: number;
  y?: number;
}>;

export function Reveal({ children, delay = 0, y = 20 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut', delay }}
      viewport={{ once: false, amount: 0.1 }}
    >
      {children}
    </motion.div>
  );
}


