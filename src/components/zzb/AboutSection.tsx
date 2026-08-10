'use client';

import { motion } from 'framer-motion';
import { Shield, Award, Target, Eye } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function AboutSection() {
  return (
    <section className="py-20 lg:py-28 construction-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            custom={0}
            className="inline-block text-zzb-lemon-dark font-semibold text-sm uppercase tracking-widest mb-3"
          >
            Who We Are
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            custom={1}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zzb-dark mb-6"
          >
            Trusted Hands in{' '}
            <span className="text-zzb-lemon-dark">Construction</span>
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            custom={2}
            className="w-20 h-1 bg-zzb-lemon mx-auto rounded-full"
          />
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.p
              variants={fadeInUp}
              custom={0}
              className="text-zzb-gray leading-relaxed text-base lg:text-lg mb-6"
            >
              ZZB Construction Company is a wholly owned Indigenous engineering outfit
              incorporated under The Federal Republic Nigeria Companies and Allied Matter
              Act with registration number <strong>RC: 728609</strong>. Our core competence
              area is Mechanical and Civil Engineering with strong competitive edge as
              Contractor and Consultants.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              custom={1}
              className="text-zzb-gray leading-relaxed text-base lg:text-lg mb-6"
            >
              Overtime, we have emerged to be tested and trusted hands in estate
              development and management. We engage in the rehabilitation, renovation and
              construction of roads, bridges, sewages, dams, structural works of all
              ramifications and building.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              custom={2}
              className="text-zzb-gray leading-relaxed text-base lg:text-lg"
            >
              Driven by a strong philosophy with a well distilled vision and mission
              statements encapsulated in the slogan &ldquo;<strong className="text-zzb-lemon-dark">We Choose To
              Differ</strong>&rdquo; we have enjoyed sustainable business relationship with
              extensive list of clients that cuts across corporate, private, federal,
              state and local government agencies and parastatals.
            </motion.p>
          </motion.div>

          {/* Mission & Vision cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-6"
          >
            <motion.div
              variants={fadeInUp}
              custom={0}
              whileHover={{ y: -3 }}
              className="bg-white rounded-xl p-6 shadow-md border-l-4 border-zzb-lemon"
            >
              <div className="flex items-center gap-3 mb-3">
                <Eye className="w-6 h-6 text-zzb-lemon-dark" />
                <h3 className="text-xl font-bold text-zzb-dark">Our Vision</h3>
              </div>
              <p className="text-zzb-gray leading-relaxed">
                To attain recognition in the construction industry through honesty,
                commitment, competence and moving up step by step to greater heights.
                ZZB is constantly striving to excellence, and openly aspires to be one
                of the 5 best indigenous engineering contractors in Nigeria.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              custom={1}
              whileHover={{ y: -3 }}
              className="bg-white rounded-xl p-6 shadow-md border-l-4 border-zzb-green"
            >
              <div className="flex items-center gap-3 mb-3">
                <Target className="w-6 h-6 text-zzb-green" />
                <h3 className="text-xl font-bold text-zzb-dark">Our Mission</h3>
              </div>
              <p className="text-zzb-gray leading-relaxed">
                From inception, our strategy has been to earn your trust through honesty
                and competence, driven by the commitment to move up, step-by-step to
                greater height in our bid to justify the people&apos;s faith in a befitting
                local content in Nigeria&apos;s infrastructural development.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Strategy section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="bg-zzb-dark rounded-2xl p-8 lg:p-12"
        >
          <motion.h3
            variants={fadeInUp}
            custom={0}
            className="text-2xl sm:text-3xl font-bold text-white mb-2"
          >
            Our Strategy:{' '}
            <span className="text-zzb-lemon">&ldquo;We Choose To Differ&rdquo;</span>
          </motion.h3>
          <motion.p
            variants={fadeInUp}
            custom={1}
            className="text-white/60 mb-8 max-w-3xl"
          >
            That we chose to differ is a fact we are proud of. We strive to simplify
            our vision and mission enough to persuade everyone we deal with to feel as
            passionate about civil engineering as we do.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: 'Quality Management',
                desc: 'Single-mindedly focused on a Quality Management System integrated with safety, environment and training.',
              },
              {
                icon: Award,
                title: 'Health & Safety',
                desc: 'Proactive approach to health and safety measures, systematically eliminating hazards and reducing risks.',
              },
              {
                icon: Target,
                title: 'Environment',
                desc: 'Committed to making environment management part of our normal business practice and promoting a culture of best practice.',
              },
              {
                icon: Eye,
                title: 'Innovation',
                desc: 'Seeking out innovative approaches that enable us to do the usual things with class and quality touch others lack.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                custom={i + 2}
                whileHover={{ y: -3 }}
                className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors"
              >
                <item.icon className="w-8 h-8 text-zzb-lemon mb-3" />
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Clients */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-20 text-center"
        >
          <motion.h3
            variants={fadeInUp}
            custom={0}
            className="text-lg font-semibold text-zzb-gray mb-8 uppercase tracking-wider"
          >
            Trusted By Industry Leaders
          </motion.h3>
          <motion.div
            variants={fadeInUp}
            custom={1}
            className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-zzb-gray/60 text-sm sm:text-base font-medium"
          >
            {['UACN Properties', 'MTN Nigeria', 'AlanDick & Co', 'V.G.C Communications', 'Javelin Construction', 'Eldorado Nigeria', 'FERMA', 'Aero Contractors'].map((client) => (
              <span key={client} className="bg-white px-4 py-2 rounded-lg border border-gray-200 hover:border-zzb-lemon/30 hover:text-zzb-dark transition-colors">
                {client}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}