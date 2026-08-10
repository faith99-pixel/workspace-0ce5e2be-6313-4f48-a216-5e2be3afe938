'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const products = [
  { src: '/images/geotextile/pdf_page22_img1.jpeg', name: 'Woven Geotextile' },
  { src: '/images/geotextile/pdf_page22_img2.jpeg', name: 'Non-Woven Geotextile' },
  { src: '/images/geotextile/pdf_page22_img3.jpeg', name: 'Geotextile Roll' },
  { src: '/images/geotextile/pdf_page22_img4.jpeg', name: 'Geocomposite' },
  { src: '/images/geotextile/pdf_page22_img5.jpeg', name: 'Geotextile Sheet' },
  { src: '/images/geotextile/pdf_page22_img6.jpeg', name: 'HDPE Geomembrane' },
  { src: '/images/geotextile/pdf_page22_img7.jpeg', name: 'Geogrid' },
  { src: '/images/geotextile/pdf_page22_img8.jpeg', name: 'Sample Spec' },
];

const apps = ['Road Construction', 'Erosion Control', 'Soil Stabilization', 'Drainage', 'Landfill Liners', 'Retaining Walls', 'Embankment', 'Waterproofing'];

export default function GeotextileSection() {
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
              className="group"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden mb-2">
                <Image src={p.src} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                quality={100}
              </div>
              <p className="text-xs font-medium text-center">{p.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}