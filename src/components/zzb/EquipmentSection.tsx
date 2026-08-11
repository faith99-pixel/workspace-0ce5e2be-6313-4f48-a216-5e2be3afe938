'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const items = [
  { src: '/images/equipment/pdf_page21_img1.jpeg', name: 'Tractor Unit' },
  { src: '/images/equipment/pdf_page21_img2.jpeg', name: 'Excavator' },
  { src: '/images/equipment/pdf_page21_img3.jpeg', name: 'Heavy Dozer' },
  { src: '/images/equipment/pdf_page21_img4.jpeg', name: 'Grader' },
  { src: '/images/equipment/pdf_page21_img5.jpeg', name: 'Compactor' },
  { src: '/images/equipment/pdf_page21_img6.jpeg', name: 'Backhoe' },
];

export default function EquipmentSection() {
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
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3">
                <Image src={item.src} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                quality={100}
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
    </section>
  );
}
