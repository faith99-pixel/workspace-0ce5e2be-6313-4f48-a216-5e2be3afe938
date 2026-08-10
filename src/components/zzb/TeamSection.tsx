'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, Mail } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const team = [
  {
    name: 'Dominic Zebedee',
    role: 'Chief Executive Officer',
    image: '/images/team/dominic.png',
    bio: 'He has a vast experience in construction industry, with renowned companies here in Nigeria. Former Project Manager at Patmos Construction and Managing Partner at Osca Asphalts Ltd.',
  },
  {
    name: 'Felix Airaodion',
    role: 'Project Director',
    image: '/images/team/felix.png',
    bio: 'A construction industry veteran with years of experience in the sector. Former Site Manager at Hispanic Construction Lagos and Project Manager at Osca Asphalt Ltd.',
  },
  {
    name: 'Jawad AlSadi',
    role: 'Construction Expert',
    image: '/images/team/jawad.png',
    bio: 'A Syrian construction expert with vast experience in construction industries here in Nigeria and other continents. Supervised projects including Alsafa Sport Stadium Beirut.',
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="text-center mb-16">
          <motion.span variants={fadeInUp} custom={0} className="inline-block text-zzb-lemon-dark font-semibold text-sm uppercase tracking-widest mb-3">
            Leadership
          </motion.span>
          <motion.h2 variants={fadeInUp} custom={1} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zzb-dark mb-6">
            Our <span className="text-zzb-lemon-dark">Team</span>
          </motion.h2>
          <motion.div variants={fadeInUp} custom={2} className="w-20 h-1 bg-zzb-lemon mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={i}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="group text-center"
            >
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg ring-4 ring-zzb-lemon/20 group-hover:ring-zzb-lemon/50 transition-all">
                <Image src={member.image} alt={member.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold text-zzb-dark mb-1">{member.name}</h3>
              <p className="text-zzb-lemon-dark font-medium text-sm mb-3">{member.role}</p>
              <p className="text-zzb-gray text-sm leading-relaxed max-w-sm mx-auto">{member.bio}</p>
              <div className="flex justify-center gap-3 mt-4">
                <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-zzb-lemon/20 text-zzb-gray hover:text-zzb-lemon-dark transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="mailto:dominiczzbltd@yahoo.com" className="p-2 rounded-full bg-gray-100 hover:bg-zzb-lemon/20 text-zzb-gray hover:text-zzb-lemon-dark transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}