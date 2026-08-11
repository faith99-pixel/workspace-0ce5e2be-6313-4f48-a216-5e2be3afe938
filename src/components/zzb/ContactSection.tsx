'use client';

import { useState } from 'react';
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
  const [formState, setFormState] = useState({
    name: '', phone: '', email: '', service: '', message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });
      if (res.ok) {
        setStatus('sent');
        setFormState({ name: '', phone: '', email: '', service: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

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
                <a href="tel:+2348034829700" className="text-sm hover:text-primary transition-colors">+234 803 482 9700, +234 803 304 1723</a>
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
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-border focus:border-foreground pb-2 text-sm outline-none transition-colors placeholder:text-muted-foreground/50"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="Your phone"
                    className="w-full bg-transparent border-b border-border focus:border-foreground pb-2 text-sm outline-none transition-colors placeholder:text-muted-foreground/50"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="w-full bg-transparent border-b border-border focus:border-foreground pb-2 text-sm outline-none transition-colors placeholder:text-muted-foreground/50"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Service</label>
                <select
                  name="service"
                  value={formState.service}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-border focus:border-foreground pb-2 text-sm outline-none transition-colors text-muted-foreground"
                >
                  <option value="">Select a service</option>
                  <option value="Civil & Building Construction">Civil &amp; Building Construction</option>
                  <option value="Equipment Hiring">Equipment Hiring</option>
                  <option value="Geosynthetics Supply">Geosynthetics Supply</option>
                  <option value="Bitumen Supply">Bitumen Supply</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows={3}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className="w-full bg-transparent border-b border-border focus:border-foreground pb-2 text-sm outline-none transition-colors resize-none placeholder:text-muted-foreground/50"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="bg-foreground text-card text-xs uppercase tracking-[0.15em] px-8 py-3 rounded-full hover:bg-primary transition-colors mt-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent!' : status === 'error' ? 'Failed - Retry' : 'Send Message'}
              </button>
              {status === 'sent' && (
                <p className="text-primary text-xs mt-3">Thank you! Your message has been received.</p>
              )}
              {status === 'error' && (
                <p className="text-red-500 text-xs mt-3">Something went wrong. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
