'use client';

import { motion } from 'framer-motion';

const projects = [
  { name: 'Still Water Estate Road Network', location: 'Lagos' },
  { name: 'Maritime Academy', location: 'Oron' },
  { name: 'Ajibulu Road Project', location: 'Lagos' },
  { name: 'Igosun Road', location: 'Ofa, Kwara' },
  { name: 'Several Asphaltic Projects', location: 'Local Airport, Lagos' },
  { name: 'UPDC Project', location: 'Lagos' },
  { name: 'Warehouse Flooring', location: 'Agara, Ogun State' },
  { name: 'Egbeda/Idimu Road', location: 'Lagos' },
];

export default function PastProjectsSection() {
  return (
    <section className="py-0">
      <div className="bg-card rounded-3xl mx-2 sm:mx-4 lg:mx-6 my-4 p-8 sm:p-12 lg:p-16 shadow-sm">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4"
        >
          Proven Track Record
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-light leading-tight mb-4"
        >
          Past <span className="font-normal">projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-muted-foreground text-sm sm:text-base max-w-xl leading-relaxed mb-12"
        >
          A selection of completed projects across Nigeria, demonstrating our capability
          in road construction, asphalt works, and civil engineering.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-border">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.06 }}
              className="flex items-baseline justify-between gap-4 py-4 sm:py-5 sm:px-6 first:pt-0 sm:first:pl-0"
            >
              <div className="flex items-baseline gap-3">
                <span className="text-primary text-xs font-medium tabular-nums w-6 flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-sm font-medium">{project.name}</span>
              </div>
              <span className="text-[11px] text-muted-foreground flex-shrink-0 hidden sm:inline">{project.location}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
