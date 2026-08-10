'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Building2, Truck, Layers, Droplets } from 'lucide-react';

type Page = import('./Navigation').Page;

const services = [
  { icon: Building2, title: 'Civil & Building', desc: 'Roads, bridges, dams & structural works' },
  { icon: Truck, title: 'Equipment Hiring', desc: 'Heavy machinery & construction equipment' },
  { icon: Layers, title: 'Geosynthetics', desc: 'High-grade geotextile materials' },
  { icon: Droplets, title: 'Bitumen Supply', desc: 'Premium bitumen products & solutions' },
];

interface HeroSectionProps {
  onNavigate: (page: Page) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-bg.jpeg"
          alt="ZZB Construction Site"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Animated stripe accent */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-1 bg-zzb-lemon"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{ transformOrigin: 'top' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-zzb-lemon/20 border border-zzb-lemon/30 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 bg-zzb-lemon rounded-full animate-pulse" />
              <span className="text-zzb-lemon text-sm font-medium tracking-wide">We Choose To Differ</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6"
            >
              Building
              <span className="text-zzb-lemon"> Nigeria&apos;s </span>
              Future,
              <br />
              One Project
              <br />
              <span className="text-zzb-lemon">At A Time</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-white/70 text-lg sm:text-xl max-w-xl mb-8 leading-relaxed"
            >
              ZZB Construction Company is a wholly owned indigenous engineering outfit
              specializing in civil &amp; building engineering, equipment hiring,
              geosynthetics, and premium bitumen supply across Nigeria.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => onNavigate('projects')}
                className="group bg-zzb-lemon hover:bg-zzb-lemon-dark text-zzb-dark font-bold px-8 py-4 rounded-md transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm sm:text-base"
              >
                View Our Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="border-2 border-white/30 hover:border-zzb-lemon text-white hover:text-zzb-lemon font-semibold px-8 py-4 rounded-md transition-all duration-300 text-sm sm:text-base"
              >
                Learn More
              </button>
            </motion.div>
          </div>

          {/* Right - Service cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/15 transition-colors group cursor-pointer"
                onClick={() => {
                  if (service.title === 'Equipment Hiring') onNavigate('equipment');
                  else if (service.title === 'Geosynthetics') onNavigate('geotextile');
                  else if (service.title === 'Civil &amp; Building') onNavigate('services');
                  else onNavigate('contact');
                }}
              >
                <service.icon className="w-8 h-8 text-zzb-lemon mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold text-base mb-1">{service.title}</h3>
                <p className="text-white/50 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { num: '120+', label: 'Staff Members' },
              { num: '25M+', label: 'Project Value (N)' },
              { num: '15+', label: 'Years Experience' },
              { num: '100+', label: 'Projects Completed' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-zzb-lemon mb-1">
                  {stat.num}
                </div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
