'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const equipment = [
  { src: '/images/equipment/pdf_page21_img1.jpeg', name: 'Tractor Unit 1', desc: 'Heavy duty tractor for earthmoving operations' },
  { src: '/images/equipment/pdf_page21_img2.jpeg', name: 'Tractor Unit 2', desc: 'Versatile equipment for site preparation' },
  { src: '/images/equipment/pdf_page21_img3.jpeg', name: 'Excavator', desc: 'Precision excavating for foundation works' },
  { src: '/images/equipment/pdf_page21_img4.jpeg', name: 'Heavy Duty Machine', desc: 'High-capacity machine for large-scale projects' },
  { src: '/images/equipment/pdf_page21_img5.jpeg', name: 'Compactor', desc: 'Soil compaction for road construction' },
  { src: '/images/equipment/pdf_page21_img6.jpeg', name: 'Grader', desc: 'Precision grading for road surfacing' },
];

export default function EquipmentSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="text-center mb-16">
          <motion.span variants={fadeInUp} custom={0} className="inline-block text-zzb-lemon-dark font-semibold text-sm uppercase tracking-widest mb-3">
            Fleet
          </motion.span>
          <motion.h2 variants={fadeInUp} custom={1} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zzb-dark mb-6">
            Equipment <span className="text-zzb-lemon-dark">Hiring</span>
          </motion.h2>
          <motion.div variants={fadeInUp} custom={2} className="w-20 h-1 bg-zzb-lemon mx-auto rounded-full mb-6" />
          <motion.p variants={fadeInUp} custom={3} className="text-zzb-gray max-w-2xl mx-auto text-lg">
            ZZB Tractors provides a comprehensive fleet of well-maintained heavy construction
            equipment available for hire across Nigeria. Our machines are regularly serviced and
            operated by experienced professionals.
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {equipment.map((item, i) => (
            <motion.div
              key={item.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={i}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="relative h-56 overflow-hidden">
                <Image src={item.src} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-zzb-dark mb-2 group-hover:text-zzb-lemon-dark transition-colors">{item.name}</h3>
                <p className="text-zzb-gray text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="mt-16 bg-zzb-dark rounded-2xl p-8 lg:p-12 text-center"
        >
          <motion.h3 variants={fadeInUp} custom={0} className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Need Equipment for Your Project?
          </motion.h3>
          <motion.p variants={fadeInUp} custom={1} className="text-white/60 max-w-xl mx-auto mb-8">
            Contact us today to discuss your equipment requirements. We offer competitive rates
            and flexible rental terms.
          </motion.p>
          <motion.a variants={fadeInUp} custom={2} href="tel:08034829700" className="inline-block bg-zzb-lemon hover:bg-zzb-lemon-dark text-zzb-dark font-bold px-8 py-4 rounded-md transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Call: 08034829700
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
