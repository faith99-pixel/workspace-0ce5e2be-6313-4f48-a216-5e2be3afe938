'use client';

import { motion } from 'framer-motion';

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
    <section className="py-0">
      <div className="bg-card rounded-3xl mx-2 sm:mx-4 lg:mx-6 my-4 p-8 sm:p-12 lg:p-16 shadow-sm">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Info */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4"
            >
              Get In Touch
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-light leading-tight mb-8"
            >
              Contact <span className="font-normal">us</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-5 mb-12"
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Address</p>
                <p className="text-sm">8, Lasu Road, Off Old Garage B/Stop, Isheri-Idimu, Lagos.</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Phone</p>
                <a href="tel:08034829700" className="text-sm hover:text-primary transition-colors">08034829700, 08033041723</a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Email</p>
                <a href="mailto:dominiczzbltd@yahoo.com" className="text-sm hover:text-primary transition-colors">dominiczzbltd@yahoo.com</a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-8 border-t border-border"
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">Past Projects</p>
              <ul className="space-y-1.5">
                {pastProjects.map(p => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:pt-12"
          >
            <form className="space-y-5" onSubmit={e => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Name</label>
                  <input type="text" placeholder="Your name" className="w-full bg-transparent border-b border-border focus:border-foreground pb-2 text-sm outline-none transition-colors placeholder:text-muted-foreground/50" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Phone</label>
                  <input type="tel" placeholder="Your phone" className="w-full bg-transparent border-b border-border focus:border-foreground pb-2 text-sm outline-none transition-colors placeholder:text-muted-foreground/50" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Email</label>
                <input type="email" placeholder="Your email" className="w-full bg-transparent border-b border-border focus:border-foreground pb-2 text-sm outline-none transition-colors placeholder:text-muted-foreground/50" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Service</label>
                <select className="w-full bg-transparent border-b border-border focus:border-foreground pb-2 text-sm outline-none transition-colors text-muted-foreground">
                  <option>Select a service</option>
                  <option>Civil &amp; Building Construction</option>
                  <option>Equipment Hiring</option>
                  <option>Geosynthetics Supply</option>
                  <option>Bitumen Supply</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Message</label>
                <textarea rows={3} placeholder="Tell us about your project..." className="w-full bg-transparent border-b border-border focus:border-foreground pb-2 text-sm outline-none transition-colors resize-none placeholder:text-muted-foreground/50" />
              </div>
              <button
                type="submit"
                className="bg-foreground text-card text-xs uppercase tracking-[0.15em] px-8 py-3 rounded-full hover:bg-primary transition-colors mt-2 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
