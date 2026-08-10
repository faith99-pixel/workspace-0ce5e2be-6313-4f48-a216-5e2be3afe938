'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08 },
  }),
};

const projects = [
  { src: '/images/projects/pdf_page10_img1.jpeg', title: 'Highway Construction', category: 'Roads' },
  { src: '/images/projects/pdf_page10_img4.jpeg', title: 'Bridge Structure Work', category: 'Bridges' },
  { src: '/images/projects/pdf_page11_img1.jpeg', title: 'Road Rehabilitation', category: 'Roads' },
  { src: '/images/projects/pdf_page11_img5.jpeg', title: 'Civil Infrastructure', category: 'Infrastructure' },
  { src: '/images/projects/pdf_page12_img1.jpeg', title: 'Structural Construction', category: 'Building' },
  { src: '/images/projects/pdf_page12_img2.jpeg', title: 'Site Development', category: 'Building' },
  { src: '/images/projects/pdf_page13_img1.jpeg', title: 'Building Project', category: 'Building' },
  { src: '/images/projects/pdf_page13_img4.jpeg', title: 'Industrial Work', category: 'Industrial' },
  { src: '/images/projects/pdf_page14_img1.jpeg', title: 'Drainage System', category: 'Infrastructure' },
  { src: '/images/projects/pdf_page14_img2.jpeg', title: 'Road Network', category: 'Roads' },
  { src: '/images/projects/pdf_page15_img3.jpeg', title: 'Construction Phase', category: 'Building' },
  { src: '/images/projects/pdf_page15_img7.jpeg', title: 'Concrete Works', category: 'Building' },
  { src: '/images/projects/pdf_page16_img2.jpeg', title: 'Structural Works', category: 'Building' },
  { src: '/images/projects/pdf_page16_img3.jpeg', title: 'Multi-Storey Project', category: 'Building' },
  { src: '/images/projects/pdf_page17_img1.jpeg', title: 'Road Project', category: 'Roads' },
  { src: '/images/projects/pdf_page17_img2.jpeg', title: 'Bridge Construction', category: 'Bridges' },
  { src: '/images/projects/pdf_page18_img1.jpeg', title: 'Asphalt Works', category: 'Roads' },
  { src: '/images/projects/pdf_page18_img2.jpeg', title: 'Surface Laying', category: 'Roads' },
  { src: '/images/projects/pdf_page19_img1.jpeg', title: 'Heavy Construction', category: 'Industrial' },
  { src: '/images/projects/pdf_page20_img2.jpeg', title: 'Infrastructure Project', category: 'Infrastructure' },
  { src: '/images/projects/pdf_page20_img3.jpeg', title: 'Project Development', category: 'Infrastructure' },
  { src: '/images/WhatsApp/WhatsApp Image 2026-08-10 at 1.46.43 PM (1).jpeg', title: 'Site Inspection', category: 'Roads' },
  { src: '/images/WhatsApp/WhatsApp Image 2026-08-10 at 1.46.44 PM.jpeg', title: 'Road Construction', category: 'Roads' },
  { src: '/images/WhatsApp/WhatsApp Image 2026-08-10 at 1.46.44 PM (1).jpeg', title: 'Equipment Operation', category: 'Equipment' },
  { src: '/images/WhatsApp/WhatsApp Image 2026-08-10 at 1.46.45 PM.jpeg', title: 'Project Site', category: 'Building' },
  { src: '/images/WhatsApp/WhatsApp Image 2026-08-10 at 1.46.45 PM (1).jpeg', title: 'Construction Work', category: 'Building' },
];

const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

const ITEMS_PER_PAGE = 12;

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [page, setPage] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory);
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paged = filtered.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setPage(0);
  };

  return (
    <section className="py-20 lg:py-28 bg-zzb-light-gray" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="text-center mb-12">
          <motion.span variants={fadeInUp} custom={0} className="inline-block text-zzb-lemon-dark font-semibold text-sm uppercase tracking-widest mb-3">
            Portfolio
          </motion.span>
          <motion.h2 variants={fadeInUp} custom={1} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zzb-dark mb-6">
            Our <span className="text-zzb-lemon-dark">Projects</span>
          </motion.h2>
          <motion.div variants={fadeInUp} custom={2} className="w-20 h-1 bg-zzb-lemon mx-auto rounded-full" />
        </motion.div>

        {/* Category filter */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={3} className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-zzb-lemon text-zzb-dark shadow-md'
                  : 'bg-white text-zzb-gray hover:bg-zzb-lemon/10 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {paged.map((project, i) => (
              <motion.div
                key={`${project.src}-${activeCategory}-${page}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -5 }}
                className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer aspect-[4/3]"
                onClick={() => setLightbox(filtered.indexOf(project))}
              >
                <Image src={project.src} alt={project.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-zzb-lemon text-xs font-medium uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-white font-bold text-sm mt-1">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3 mt-10">
            <button
              onClick={() => setPage(p => Math.max(0, p - 1))}
              disabled={page === 0}
              className="p-2 rounded-lg bg-white border border-gray-200 hover:border-zzb-lemon disabled:opacity-30 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                  page === i ? 'bg-zzb-lemon text-zzb-dark shadow-md' : 'bg-white text-zzb-gray border border-gray-200 hover:border-zzb-lemon'
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="p-2 rounded-lg bg-white border border-gray-200 hover:border-zzb-lemon disabled:opacity-30 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
              onClick={() => setLightbox(null)}
            >
              <button className="absolute top-4 right-4 text-white/70 hover:text-white z-10" onClick={() => setLightbox(null)}>
                <X className="w-8 h-8" />
              </button>
              {lightbox > 0 && (
                <button
                  className="absolute left-4 text-white/70 hover:text-white z-10"
                  onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1); }}
                >
                  <ChevronLeft className="w-10 h-10" />
                </button>
              )}
              {lightbox < filtered.length - 1 && (
                <button
                  className="absolute right-4 text-white/70 hover:text-white z-10"
                  onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1); }}
                >
                  <ChevronRight className="w-10 h-10" />
                </button>
              )}
              <motion.div
                key={lightbox}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative max-w-4xl max-h-[85vh] w-full aspect-[4/3]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image src={filtered[lightbox].src} alt={filtered[lightbox].title} fill className="object-contain rounded-lg" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent rounded-b-lg">
                  <p className="text-white font-bold text-lg">{filtered[lightbox].title}</p>
                  <p className="text-zzb-lemon text-sm">{filtered[lightbox].category}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}