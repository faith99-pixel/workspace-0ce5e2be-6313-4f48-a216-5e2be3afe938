'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const team = [
  {
    name: 'Dominic Zebedee',
    role: 'Chief Executive Officer',
    image: '/images/team/felix-pdf.jpeg',
    bio: 'He has a vast experience in construction industry, with renowned companies here in Nigeria. Project Manager at Patmos Construction. Managing Partner at Osca Asphalts Ltd.',
  },
  {
    name: 'Felix Airaodion',
    role: 'Project Director',
    image: '/images/team/dominic-pdf.jpeg',
    bio: 'A construction industry veteran with years of experience in the sector. Site Manager at Hispanic Construction Lagos. Business Partner at FA Imonitie & Co. Project Manager at Osca Asphalt Ltd.',
  },
  {
    name: 'Jawad AlSadi',
    role: 'Construction Expert',
    image: '/images/team/jawad-pdf.jpeg',
    bio: 'A Syrian construction expert with vast experience in construction industries here in Nigeria and other continents. Site Supervisor at Alsafa Sport Stadium, Beirut (Wahab Const). Civil Supervisor at Aim Group Nigeria Ltd. General Supervisor at Dipox Resin Floors Nigeria Ltd.',
  },
];

export default function TeamSection() {
  return (
    <section className="py-0">
      <div className="bg-card rounded-3xl mx-2 sm:mx-4 lg:mx-6 my-4 p-8 sm:p-12 lg:p-16 shadow-sm">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4"
        >
          Leadership
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-light leading-tight mb-12"
        >
          Our <span className="font-normal">people</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.12 }}
            >
              <div className="relative w-36 h-44 sm:w-40 sm:h-48 mx-auto mb-5 rounded-2xl overflow-hidden bg-muted shadow-sm">
                <Image src={m.image} alt={m.name} fill sizes="(max-width: 640px) 144px, 160px" className="object-cover object-top" quality={100} />
              </div>
              <h3 className="text-center font-medium text-base mb-1">{m.name}</h3>
              <p className="text-center text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3">{m.role}</p>
              <p className="text-center text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{m.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}