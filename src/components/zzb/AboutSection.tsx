'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const clients = [
  { name: 'UACN Properties', logo: '/images/clients/uac.svg' },
  { name: 'MTN Nigeria', logo: '/images/clients/mtn.jpg' },
  { name: 'AlanDick & Co', logo: '/images/clients/alandick.jpg' },
  { name: 'Eldorado Nigeria', logo: '/images/clients/eldorado.png' },
  { name: 'FERMA', logo: '/images/clients/ferma.jpg' },
  { name: 'Lagos State', logo: '/images/clients/lagos.jpg' },
  { name: 'Aero Contractors', logo: '/images/clients/aero.png' },
];

const doubled = [...clients, ...clients, ...clients];

export default function AboutSection() {
  return (
    <section className="py-0">
      <div className="bg-card rounded-3xl mx-2 sm:mx-4 lg:mx-6 my-4 p-8 sm:p-12 lg:p-16 shadow-sm">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4"
            >
              About ZZB
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-light leading-tight text-card-foreground mb-8"
            >
              Trusted hands in
              <br />
              <span className="font-normal">construction</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed"
            >
              <p>
                ZZB Construction Company is a wholly owned Indigenous engineering outfit
                incorporated under The Federal Republic Nigeria Companies and Allied Matter
                Act with registration number <strong className="text-card-foreground font-medium">RC: 728609</strong>.
              </p>
              <p>
                Our core competence area is Mechanical and Civil Engineering with strong
                competitive edge as Contractor and Consultants. We engage in the
                rehabilitation, renovation and construction of roads, bridges, sewages,
                dams, structural works of all ramifications and building.
              </p>
              <p>
                Driven by the slogan <strong className="text-card-foreground font-medium">&quot;We Choose To Differ&quot;</strong>, we have
                enjoyed sustainable business relationships with clients that cut across
                corporate, private, federal, state and local government agencies.
              </p>
            </motion.div>
          </div>

          {/* Right - Vision & Mission */}
          <div className="space-y-8 lg:pt-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="border-l-2 border-primary pl-6"
            >
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-3">Vision</p>
              <p className="text-card-foreground leading-relaxed text-sm sm:text-base">
                To attain recognition in the construction industry through honesty,
                commitment, competence — aspiring to be one of the 5 best indigenous
                engineering contractors in Nigeria.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border-l-2 border-foreground/10 pl-6"
            >
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-3">Mission</p>
              <p className="text-card-foreground leading-relaxed text-sm sm:text-base">
                Earn your trust through honesty and competence, driven by commitment to
                move up step-by-step to greater heights in Nigeria&apos;s infrastructural
                development.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="border-l-2 border-foreground/10 pl-6"
            >
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-3">Strategy</p>
              <p className="text-card-foreground leading-relaxed text-sm sm:text-base">
                We simplify our vision enough to persuade everyone we deal with to feel
                as passionate about civil engineering as we do — seeking innovative
                approaches that add class and quality touch.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Client logos marquee */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-12 border-t border-border"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-8">Trusted By</p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />
            <div className="flex gap-16 animate-marquee w-max">
              {doubled.map((client, i) => (
                <div key={i} className="flex flex-col items-center gap-3 min-w-[120px] group">
                  <div className="relative w-24 h-16 transition-all duration-300">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      sizes="96px"
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground text-center whitespace-nowrap">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
