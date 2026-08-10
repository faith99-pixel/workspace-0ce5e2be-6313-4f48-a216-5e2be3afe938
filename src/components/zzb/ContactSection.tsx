'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const contactInfo = [
  { icon: MapPin, label: 'Address', value: '8, Lasu Road, Off Old Garage B/Stop, Isheri-Idimu, Lagos.' },
  { icon: Phone, label: 'Phone', value: '08034829700, 08033041723', href: 'tel:08034829700' },
  { icon: Mail, label: 'Email', value: 'dominiczzbltd@yahoo.com', href: 'mailto:dominiczzbltd@yahoo.com' },
  { icon: Clock, label: 'Working Hours', value: 'Mon - Fri: 8:00 AM - 6:00 PM' },
];

const pastProjects = [
  'Still Water Estate Road Network',
  'Maritime Academy - Oron',
  'Ajibulu Road Project - Lagos',
  'Igosun Road - Ofa, Kwara',
  'Several Asphaltic Projects - Local Airport, Lagos',
  'UPDC Project - Lagos',
  'Warehouse Flooring - Agara, Ogun State',
  'Egbeda/Idimu Road - Lagos',
];

export default function ContactSection() {
  return (
    <section className="py-20 lg:py-28 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="text-center mb-16">
          <motion.span variants={fadeInUp} custom={0} className="inline-block text-zzb-lemon-dark font-semibold text-sm uppercase tracking-widest mb-3">
            Get In Touch
          </motion.span>
          <motion.h2 variants={fadeInUp} custom={1} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zzb-dark mb-6">
            Contact <span className="text-zzb-lemon-dark">Us</span>
          </motion.h2>
          <motion.div variants={fadeInUp} custom={2} className="w-20 h-1 bg-zzb-lemon mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info & Past Projects */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}>
            <motion.div variants={fadeInUp} custom={0} className="space-y-6 mb-10">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zzb-lemon/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-zzb-lemon-dark" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zzb-gray mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-zzb-dark font-semibold hover:text-zzb-lemon-dark transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-zzb-dark font-semibold">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Past Projects list */}
            <motion.div variants={fadeInUp} custom={2} className="bg-zzb-light-gray rounded-2xl p-6">
              <h3 className="text-lg font-bold text-zzb-dark mb-4">Notable Past Projects</h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {pastProjects.map((project) => (
                  <div key={project} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-zzb-lemon rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-zzb-gray">{project}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp} custom={1}
            className="bg-zzb-light-gray rounded-2xl p-6 lg:p-8"
          >
            <h3 className="text-xl font-bold text-zzb-dark mb-6">Send Us a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-zzb-gray mb-1">Full Name</label>
                  <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-zzb-lemon focus:ring-2 focus:ring-zzb-lemon/20 outline-none transition-all text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zzb-gray mb-1">Phone</label>
                  <input type="tel" placeholder="Your phone number" className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-zzb-lemon focus:ring-2 focus:ring-zzb-lemon/20 outline-none transition-all text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-zzb-gray mb-1">Email</label>
                <input type="email" placeholder="Your email address" className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-zzb-lemon focus:ring-2 focus:ring-zzb-lemon/20 outline-none transition-all text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-zzb-gray mb-1">Service Interest</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-zzb-lemon focus:ring-2 focus:ring-zzb-lemon/20 outline-none transition-all text-sm text-zzb-gray">
                  <option>Select a service</option>
                  <option>Civil & Building Construction</option>
                  <option>Equipment Hiring</option>
                  <option>Geosynthetics Supply</option>
                  <option>Bitumen Supply</option>
                  <option>Consulting Services</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-zzb-gray mb-1">Message</label>
                <textarea rows={4} placeholder="Tell us about your project..." className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-zzb-lemon focus:ring-2 focus:ring-zzb-lemon/20 outline-none transition-all text-sm resize-none" />
              </div>
              <button
                type="submit"
                className="w-full bg-zzb-lemon hover:bg-zzb-lemon-dark text-zzb-dark font-bold py-3.5 rounded-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}