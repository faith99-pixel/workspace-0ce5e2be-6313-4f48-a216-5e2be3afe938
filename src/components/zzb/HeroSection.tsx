'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

const heroSlides = [
  { image: '/images/hero/hero-bg.jpeg', label: 'Road Construction' },
  { image: '/images/projects/pdf_page17_img1.jpeg', label: 'Infrastructure' },
  { image: '/images/projects/pdf_page12_img1.jpeg', label: 'Building Projects' },
];

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-foreground">
      {/* Full-bleed hero image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
      >
        <Image
          src={heroSlides[0].image}
          alt="ZZB Construction"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </motion.div>

      {/* Bottom gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Content overlay - bottom left */}
      <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 lg:p-16 xl:p-20">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-white/60 text-xs uppercase tracking-[0.3em] mb-4"
          >
            Builders &amp; Engineers since inception
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-[1.15] mb-6"
          >
            We Choose
            <br />
            <span className="font-normal">To Differ</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-white/50 text-sm sm:text-base max-w-md leading-relaxed mb-8"
          >
            Civil &amp; Building Engineering, Equipment Hiring, Geosynthetics, and Bitumen — tested and trusted across Nigeria.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex items-center gap-3 text-white/40"
          >
            <span className="text-[10px] uppercase tracking-[0.2em]">RC: 728609</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="text-white/30"
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}