'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

type Page = import('./Navigation').Page;

const services = [
  {
    title: 'Civil & Building',
    desc: 'Rehabilitation, renovation and construction of roads, bridges, sewages, dams, structural works and buildings.',
    image: '/images/projects/pdf_page10_img1.jpeg',
    page: 'services' as Page,
  },
  {
    title: 'Equipment Hiring',
    desc: 'Wide range of heavy construction equipment — tractors, excavators, graders, compactors — available for hire.',
    image: '/images/equipment/pdf_page21_img4.jpeg',
    page: 'equipment' as Page,
  },
  {
    title: 'Geosynthetics',
    desc: 'Authorized high-grade dealers of premium geotextile materials for road construction and erosion control.',
    image: '/images/geotextile/pdf_page22_img4.jpeg',
    page: 'geotextile' as Page,
  },
  {
    title: 'Bitumen Supply',
    desc: 'Reliable dealers providing premium grade bitumen for road construction, asphalt and waterproofing.',
    image: '/images/projects/pdf_page18_img1.jpeg',
    page: 'contact' as Page,
  },
];

const advisory = [
  'Buildability Advice', 'Value Engineering', 'Project Programming',
  'High Level Project Management', 'Traffic Management Planning',
  'Health & Safety Advice', 'Environmental Advice',
  'Procurement Choices', 'Risk Assessment', 'Construction Phase Advice',
];

interface ServicesSectionProps {
  onNavigate: (page: Page) => void;
}

export default function ServicesSection({ onNavigate }: ServicesSectionProps) {
  return (
    <section className="py-0">
      <div className="bg-card rounded-3xl mx-2 sm:mx-4 lg:mx-6 my-4 p-8 sm:p-12 lg:p-16 shadow-sm">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4"
        >
          What We Do
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-light leading-tight mb-12"
        >
          Our <span className="font-normal">services</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1 }}
              onClick={() => onNavigate(s.page)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  quality={100}
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5 text-foreground" />
                </div>
              </div>
              <h3 className="font-medium text-base mb-1.5">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Advisory strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-muted rounded-2xl p-6 sm:p-8"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-5">Consulting & Advisory</p>
          <div className="flex flex-wrap gap-2">
            {advisory.map(a => (
              <span key={a} className="text-xs text-card-foreground bg-card px-3 py-1.5 rounded-full">
                {a}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
