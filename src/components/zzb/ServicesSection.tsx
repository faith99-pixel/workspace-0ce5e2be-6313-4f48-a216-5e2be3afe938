'use client';

import { motion } from 'framer-motion';
import { Building2, Wrench, ShieldCheck, HardHat, ClipboardCheck, TrafficCone, TreePine, AlertTriangle, Package, CheckCircle2, FileSearch, BarChart3 } from 'lucide-react';
import Image from 'next/image';

type Page = import('./Navigation').Page;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const coreServices = [
  { icon: Building2, title: 'Civil & Building Construction', desc: 'Rehabilitation, renovation and construction of roads, bridges, sewages, dams, structural works of all ramifications and building.', highlight: true },
  { icon: Wrench, title: 'Equipment Hiring', desc: 'Wide range of heavy construction equipment available for hire. Tractors, excavators, graders, compactors, and more for your project needs.', highlight: false },
  { icon: Package, title: 'Geosynthetics (High Grade)', desc: 'Authorized dealers of premium geotextile materials for road construction, erosion control, soil stabilization, and drainage systems.', highlight: false },
  { icon: AlertTriangle, title: 'Bitumen Supply', desc: 'Reliable bitumen dealers providing premium grade bitumen for road construction, asphalt production, and waterproofing applications.', highlight: false },
];

const advisoryServices = [
  { icon: FileSearch, title: 'Buildability Advice' },
  { icon: BarChart3, title: 'Value Engineering' },
  { icon: ClipboardCheck, title: 'Project Programming' },
  { icon: HardHat, title: 'High Level Project Management' },
  { icon: TrafficCone, title: 'Traffic Management Planning' },
  { icon: ShieldCheck, title: 'Health & Safety Advice' },
  { icon: TreePine, title: 'Environmental Advice' },
  { icon: Package, title: 'Procurement Choices' },
  { icon: AlertTriangle, title: 'Risk Assessment & Control' },
  { icon: CheckCircle2, title: 'Construction Phase Advice' },
];

interface ServicesSectionProps {
  onNavigate: (page: Page) => void;
}

export default function ServicesSection({ onNavigate }: ServicesSectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} custom={0} className="inline-block text-zzb-lemon-dark font-semibold text-sm uppercase tracking-widest mb-3">
            What We Do
          </motion.span>
          <motion.h2 variants={fadeInUp} custom={1} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zzb-dark mb-6">
            Our <span className="text-zzb-lemon-dark">Services</span>
          </motion.h2>
          <motion.div variants={fadeInUp} custom={2} className="w-20 h-1 bg-zzb-lemon mx-auto rounded-full" />
        </motion.div>

        {/* Core Services - with images */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-20">
          {coreServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={i}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className={`relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer ${service.highlight ? 'md:col-span-2' : ''}`}
              onClick={() => {
                if (service.title.includes('Equipment')) onNavigate('equipment');
                else if (service.title.includes('Geosynthetics')) onNavigate('geotextile');
              }}
            >
              <div className={`${service.highlight ? 'md:flex' : ''}`}>
                <div className={`${service.highlight ? 'md:w-1/2' : 'h-48'} relative overflow-hidden`}>
                  <Image
                    src={
                      service.title.includes('Equipment')
                        ? '/images/equipment/pdf_page21_img4.jpeg'
                        : service.title.includes('Geosynthetics')
                        ? '/images/geotextile/pdf_page22_img4.jpeg'
                        : service.title.includes('Bitumen')
                        ? '/images/projects/pdf_page18_img1.jpeg'
                        : '/images/projects/pdf_page10_img1.jpeg'
                    }
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className={`${service.highlight ? 'md:w-1/2' : ''} p-6 lg:p-8 bg-white`}>
                  <service.icon className={`w-10 h-10 mb-4 ${service.highlight ? 'text-zzb-lemon-dark' : 'text-zzb-lemon'}`} />
                  <h3 className={`font-bold mb-3 ${service.highlight ? 'text-2xl' : 'text-xl'} text-zzb-dark`}>
                    {service.title}
                  </h3>
                  <p className="text-zzb-gray leading-relaxed">
                    {service.desc}
                  </p>
                  {service.highlight && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {['Roads', 'Bridges', 'Dams', 'Buildings', 'Structural Works'].map(tag => (
                        <span key={tag} className="bg-zzb-lemon/10 text-zzb-lemon-dark text-xs font-medium px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advisory Services */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="bg-zzb-light-gray rounded-2xl p-8 lg:p-12"
        >
          <motion.h3 variants={fadeInUp} custom={0} className="text-2xl font-bold text-zzb-dark mb-8 text-center">
            Advisory & Consulting Services
          </motion.h3>
          <motion.div variants={fadeInUp} custom={1} className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {advisoryServices.map((service) => (
              <div
                key={service.title}
                className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <service.icon className="w-5 h-5 text-zzb-lemon-dark flex-shrink-0" />
                <span className="text-sm font-medium text-zzb-dark">{service.title}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}