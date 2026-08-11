'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';

const products = [
  { src: '/images/geotextile/woven-geotextile.png', name: 'Woven Geotextile' },
  { src: '/images/geotextile/nonwoven-geotextile.png', name: 'Non-Woven Geotextile' },
  { src: '/images/geotextile/geotextile-roll.png', name: 'Geotextile Roll' },
  { src: '/images/geotextile/geocomposite.png', name: 'Geocomposite' },
  { src: '/images/geotextile/geotextile-sheet.png', name: 'Geotextile Sheet' },
  { src: '/images/geotextile/hdpe-geomembrane.png', name: 'HDPE Geomembrane' },
  { src: '/images/geotextile/geogrid.png', name: 'Geogrid' },
  { src: '/images/geotextile/sample-spec.png', name: 'Sample Spec' },
];

const apps = ['Road Construction', 'Erosion Control', 'Soil Stabilization', 'Drainage', 'Landfill Liners', 'Retaining Walls', 'Embankment', 'Waterproofing'];

export default function GeotextileSection() {
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
          High Grade Dealers
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-light leading-tight mb-4"
        >
          Geosynthetics &amp; <span className="font-normal">geotextile</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-muted-foreground text-sm sm:text-base max-w-xl leading-relaxed mb-10"
        >
          Authorized dealers of premium geosynthetic materials for road construction,
          erosion control, soil stabilization, and environmental protection projects.
        </motion.p>

        {/* Applications */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {apps.map(a => (
            <span key={a} className="text-[11px] text-muted-foreground border border-border rounded-full px-3 py-1 uppercase tracking-wider">
              {a}
            </span>
          ))}
        </motion.div>

        {/* Products grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.06 }}
              className="group cursor-pointer"
              onClick={() => setLightbox(p)}
            >
              <div className="relative aspect-square rounded-xl overflow-hidden mb-2">
                <Image src={p.src} alt={p.name} fill sizes="(max-width: 640px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-700" quality={100} />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <p className="text-xs font-medium text-center">{p.name}</p>
            </motion.div>
          ))}
        </div>
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
              className="relative w-full max-w-3xl aspect-square rounded-xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <Image src={lightbox.src} alt={lightbox.name} fill sizes="100vw" className="object-cover" quality={100} />
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
