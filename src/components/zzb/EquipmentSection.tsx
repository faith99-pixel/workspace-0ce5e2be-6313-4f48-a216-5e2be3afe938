'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';

const items = [
  { src: '/images/equipment/pdf_page21_img1.jpeg', name: 'Tractor Unit' },
  { src: '/images/equipment/pdf_page21_img2.jpeg', name: 'Excavator' },
  { src: '/images/equipment/pdf_page21_img3.jpeg', name: 'Heavy Dozer' },
  { src: '/images/equipment/pdf_page21_img4.jpeg', name: 'Grader' },
  { src: '/images/equipment/pdf_page21_img5.jpeg', name: 'Compactor' },
  { src: '/images/equipment/pdf_page21_img6.jpeg', name: 'Backhoe' },
];

export default function EquipmentSection() {
  const [lightbox, setLightbox] = useState<{ src: string; name: string } | null>(null);

  return (
    <section className="py-0">
      <div className="bg-card rounded-3xl mx-2 sm:mx-4 lg:mx-6 my-4 p-8 sm:p-12 lg:p-16 shadow-sm">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4"
        >
          Fleet
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-light leading-tight mb-4"
        >
          Equipment <span className="font-normal">hiring</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-muted-foreground text-sm sm:text-base max-w-xl leading-relaxed mb-12"
        >
          A comprehensive fleet of well-maintained heavy construction equipment available for hire
          across Nigeria, operated by experienced professionals.
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="group cursor-pointer"
              onClick={() => setLightbox(item)}
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3">
                <Image src={item.src} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" quality={100} />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <p className="text-sm font-medium">{item.name}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-border text-center"
        >
          <p className="text-muted-foreground text-sm mb-4">Need equipment for your project?</p>
          <a href="tel:+2348034829700" className="inline-block bg-foreground text-card text-xs uppercase tracking-[0.15em] px-6 py-3 rounded-full hover:bg-primary transition-colors">
            Call +234 803 482 9700
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl aspect-[4/3] rounded-xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <Image src={lightbox.src} alt={lightbox.name} fill className="object-cover" quality={100} />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.15 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium"
            >
              {lightbox.name}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
