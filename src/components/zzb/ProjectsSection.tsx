'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  { src: '/images/projects/pdf_page10_img1.jpeg', title: 'Highway Construction', cat: 'Roads' },
  { src: '/images/projects/pdf_page10_img4.jpeg', title: 'Bridge Structure', cat: 'Bridges' },
  { src: '/images/projects/pdf_page11_img1.jpeg', title: 'Road Rehabilitation', cat: 'Roads' },
  { src: '/images/projects/pdf_page11_img5.jpeg', title: 'Civil Infrastructure', cat: 'Infrastructure' },
  { src: '/images/projects/pdf_page12_img1.jpeg', title: 'Structural Construction', cat: 'Building' },
  { src: '/images/projects/pdf_page12_img2.jpeg', title: 'Site Development', cat: 'Building' },
  { src: '/images/projects/pdf_page13_img1.jpeg', title: 'Building Project', cat: 'Building' },
  { src: '/images/projects/pdf_page13_img4.jpeg', title: 'Industrial Work', cat: 'Industrial' },
  { src: '/images/projects/pdf_page14_img1.jpeg', title: 'Drainage System', cat: 'Infrastructure' },
  { src: '/images/projects/pdf_page15_img3.jpeg', title: 'Construction Phase', cat: 'Building' },
  { src: '/images/projects/pdf_page16_img2.jpeg', title: 'Structural Works', cat: 'Building' },
  { src: '/images/projects/pdf_page17_img1.jpeg', title: 'Road Project', cat: 'Roads' },
  { src: '/images/projects/pdf_page17_img2.jpeg', title: 'Bridge Construction', cat: 'Bridges' },
  { src: '/images/projects/pdf_page18_img1.jpeg', title: 'Asphalt Works', cat: 'Roads' },
  { src: '/images/projects/pdf_page18_img2.jpeg', title: 'Surface Laying', cat: 'Roads' },
  { src: '/images/projects/pdf_page19_img1.jpeg', title: 'Heavy Construction', cat: 'Industrial' },
  { src: '/images/projects/pdf_page20_img2.jpeg', title: 'Infrastructure', cat: 'Infrastructure' },
  { src: '/images/projects/pdf_page20_img3.jpeg', title: 'Project Development', cat: 'Infrastructure' },
  { src: '/images/WhatsApp/WhatsApp Image 2026-08-10 at 1.46.43 PM (1).jpeg', title: 'Site Inspection', cat: 'Roads' },
  { src: '/images/WhatsApp/WhatsApp Image 2026-08-10 at 1.46.44 PM.jpeg', title: 'Road Construction', cat: 'Roads' },
  { src: '/images/WhatsApp/WhatsApp Image 2026-08-10 at 1.46.45 PM.jpeg', title: 'Project Site', cat: 'Building' },
  { src: '/images/WhatsApp/WhatsApp Image 2026-08-10 at 1.46.45 PM (1).jpeg', title: 'Construction Work', cat: 'Building' },
];

const cats = ['All', ...Array.from(new Set(projects.map(p => p.cat)))];
const PER_PAGE = 8;

export default function ProjectsSection() {
  const [cat, setCat] = useState('All');
  const [pg, setPg] = useState(0);
  const [light, setLight] = useState<number | null>(null);

  const filtered = cat === 'All' ? projects : projects.filter(p => p.cat === cat);
  const pages = Math.ceil(filtered.length / PER_PAGE);
  const items = filtered.slice(pg * PER_PAGE, (pg + 1) * PER_PAGE);

  const changeCat = (c: string) => { setCat(c); setPg(0); };

  return (
    <section className="py-0">
      <div className="bg-card rounded-3xl mx-2 sm:mx-4 lg:mx-6 my-4 p-8 sm:p-12 lg:p-16 shadow-sm">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4"
        >
          Portfolio
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-light leading-tight mb-10"
        >
          Featured <span className="font-normal">projects</span>
        </motion.h2>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {cats.map(c => (
            <button
              key={c}
              onClick={() => changeCat(c)}
              className={`text-xs px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                cat === c
                  ? 'bg-foreground text-card'
                  : 'bg-muted text-muted-foreground hover:bg-border'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <AnimatePresence mode="popLayout">
            {items.map((p, i) => (
              <motion.div
                key={`${p.src}-${cat}-${pg}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                onClick={() => setLight(filtered.indexOf(p))}
                className="group cursor-pointer aspect-[4/3] rounded-xl overflow-hidden relative"
              >
                <Image src={p.src} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                quality={100}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-xs font-medium">{p.title}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {pages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            <button onClick={() => setPg(p => Math.max(0, p - 1))} disabled={pg === 0} className="p-2 rounded-full hover:bg-muted disabled:opacity-30 transition-colors cursor-pointer disabled:cursor-default">
              <ChevronLeft className="w-4 h-4" />
            </button>
            {Array.from({ length: pages }, (_, i) => (
              <button key={i} onClick={() => setPg(i)} className={`w-8 h-8 rounded-full text-xs transition-all cursor-pointer ${pg === i ? 'bg-foreground text-card' : 'text-muted-foreground hover:bg-muted'}`}>
                {i + 1}
              </button>
            ))}
            <button onClick={() => setPg(p => Math.min(pages - 1, p + 1))} disabled={pg === pages - 1} className="p-2 rounded-full hover:bg-muted disabled:opacity-30 transition-colors cursor-pointer disabled:cursor-default">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Lightbox */}
        <AnimatePresence>
          {light !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[70] bg-black/90 flex items-center justify-center"
              onClick={() => setLight(null)}
            >
              <button className="absolute top-4 right-4 text-white/50 hover:text-white z-10 cursor-pointer" onClick={() => setLight(null)}>
                <X className="w-6 h-6" />
              </button>
              {light > 0 && (
                <button className="absolute left-4 text-white/50 hover:text-white z-10 cursor-pointer" onClick={e => { e.stopPropagation(); setLight(light - 1); }}>
                  <ChevronLeft className="w-8 h-8" />
                </button>
              )}
              {light < filtered.length - 1 && (
                <button className="absolute right-4 text-white/50 hover:text-white z-10 cursor-pointer" onClick={e => { e.stopPropagation(); setLight(light + 1); }}>
                  <ChevronRight className="w-8 h-8" />
                </button>
              )}
              <motion.div key={light} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative max-w-4xl w-full aspect-[4/3]" onClick={e => e.stopPropagation()}>
                <Image src={filtered[light].src} alt={filtered[light].title} fill className="object-contain" />
                quality={100}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                  <p className="text-white font-medium">{filtered[light].title}</p>
                  <p className="text-white/50 text-sm">{filtered[light].cat}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}