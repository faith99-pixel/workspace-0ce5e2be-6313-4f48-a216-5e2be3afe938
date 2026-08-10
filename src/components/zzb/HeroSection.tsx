'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Full-bleed hero image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
      >
        <Image
          src="/images/hero/hero-bg.jpeg"
          alt="ZZB Construction"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </motion.div>

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content - bottom left */}
      <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 lg:p-16 xl:p-20">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-white/70 text-xs uppercase tracking-[0.3em] mb-4 font-medium"
          >
            Builders &amp; Engineers since inception
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.1] mb-6"
          >
            We Choose
            <br />
            <span className="font-semibold">To Differ</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-white/80 text-sm sm:text-base max-w-md leading-relaxed mb-6"
          >
            Civil &amp; Building Engineering, Equipment Hiring, Geosynthetics, and Bitumen — tested and trusted across Nigeria.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5 border border-white/15"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">RC: 728609</span>
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
          className="text-white/40"
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}