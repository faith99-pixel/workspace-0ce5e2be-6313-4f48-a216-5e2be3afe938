'use client';

import { motion } from 'framer-motion';

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
                Driven by the slogan <strong className="text-card-foreground font-medium">"We Choose To Differ"</strong>, we have
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

        {/* Client logos */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-12 border-t border-border"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">Trusted By</p>
          <div className="flex flex-wrap gap-3">
            {['UACN Properties', 'MTN Nigeria', 'AlanDick & Co', 'FERMA', 'Aero Contractors', 'Lagos State', 'Osun State', 'Kwara State'].map(c => (
              <span key={c} className="text-xs text-muted-foreground border border-border rounded-full px-4 py-1.5">
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
