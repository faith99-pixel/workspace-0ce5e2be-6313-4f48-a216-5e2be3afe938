'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const products = [
  { src: '/images/geotextile/pdf_page22_img1.jpeg', name: 'Woven Geotextile', desc: 'High-strength woven geotextile for soil reinforcement and stabilization in road construction.' },
  { src: '/images/geotextile/pdf_page22_img2.jpeg', name: 'Non-Woven Geotextile', desc: 'Non-woven fabric for drainage, filtration and separation layers in civil engineering.' },
  { src: '/images/geotextile/pdf_page22_img3.jpeg', name: 'Geotextile Roll', desc: 'Premium grade rolls for large-scale road and infrastructure projects.' },
  { src: '/images/geotextile/pdf_page22_img4.jpeg', name: 'Geocomposite', desc: 'Composite materials combining multiple functions for enhanced performance.' },
  { src: '/images/geotextile/pdf_page22_img5.jpeg', name: 'Geotextile Sheet', desc: 'Industrial-grade geotextile sheets for erosion control and soil protection.' },
  { src: '/images/geotextile/pdf_page22_img6.jpeg', name: 'HDPE Geomembrane', desc: 'Impermeable liner material for landfill, reservoir and containment applications.' },
  { src: '/images/geotextile/pdf_page22_img7.jpeg', name: 'Geogrid', desc: 'Polymer grid for reinforcement of retaining walls, embankments and subgrades.' },
  { src: '/images/geotextile/pdf_page22_img8.jpeg', name: 'Geotextile Sample', desc: 'Sample specification sheets available for project bidding and procurement.' },
];

export default function GeotextileSection() {
  return (
    <section className="py-20 lg:py-28 construction-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="text-center mb-16">
          <motion.span variants={fadeInUp} custom={0} className="inline-block text-zzb-lemon-dark font-semibold text-sm uppercase tracking-widest mb-3">
            High Grade Dealers
          </motion.span>
          <motion.h2 variants={fadeInUp} custom={1} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zzb-dark mb-6">
            Geosynthetics & <span className="text-zzb-lemon-dark">Geotextile</span>
          </motion.h2>
          <motion.div variants={fadeInUp} custom={2} className="w-20 h-1 bg-zzb-lemon mx-auto rounded-full mb-6" />
          <motion.p variants={fadeInUp} custom={3} className="text-zzb-gray max-w-3xl mx-auto text-lg">
            As authorized high-grade dealers of geosynthetic materials, ZZB supplies premium
            geotextile products for road construction, erosion control, soil stabilization,
            drainage systems, and environmental protection projects across Nigeria.
          </motion.p>
        </motion.div>

        {/* Applications banner */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="bg-zzb-dark rounded-2xl p-8 mb-16"
        >
          <motion.h3 variants={fadeInUp} custom={0} className="text-xl font-bold text-white mb-6 text-center">
            Geotextile Applications
          </motion.h3>
          <motion.div variants={fadeInUp} custom={1} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {['Road Construction', 'Erosion Control', 'Soil Stabilization', 'Drainage Systems', 'Landfill Liners', 'Retaining Walls', 'Embankment Reinforcement', 'Waterproofing'].map(app => (
              <div key={app} className="flex items-center gap-3">
                <span className="w-2 h-2 bg-zzb-lemon rounded-full flex-shrink-0" />
                <span className="text-white/70 text-sm">{app}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Product grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={i}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <Image src={product.src} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-base text-zzb-dark mb-2 group-hover:text-zzb-lemon-dark transition-colors">{product.name}</h3>
                <p className="text-zzb-gray text-sm leading-relaxed">{product.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}