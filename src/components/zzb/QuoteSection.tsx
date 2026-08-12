'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const projectTypes = [
  'Civil & Building Construction',
  'Road Construction',
  'Bridge Construction',
  'Equipment Hiring',
  'Geosynthetics Supply',
  'Bitumen Supply',
  'Other',
];

const budgetRanges = [
  'Below ₦5 Million',
  '₦5M – ₦20M',
  '₦20M – ₦50M',
  '₦50M – ₦100M',
  '₦100M – ₦500M',
  'Above ₦500M',
  'Prefer not to say',
];

const timelines = [
  'Immediate (ASAP)',
  'Within 1–3 months',
  'Within 3–6 months',
  '6+ months',
  'Not yet decided',
];

const initialForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  projectType: '',
  location: '',
  budget: '',
  timeline: '',
  description: '',
  referral: '',
};

export default function QuoteSection() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `New Quote Request — ${form.projectType} from ${form.name}`,
          from_name: form.name,
          ...form,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus('sent');
        setForm(initialForm);
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const inputClass = 'w-full bg-transparent border-b border-border focus:border-foreground pb-2 text-sm outline-none transition-colors placeholder:text-muted-foreground/50';
  const labelClass = 'block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2';

  return (
    <section className="py-0">
      <div className="bg-card rounded-3xl mx-2 sm:mx-4 lg:mx-6 my-4 p-8 sm:p-12 lg:p-16 shadow-sm">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4"
        >
          Project Enquiry
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-light leading-tight mb-3"
        >
          Get a <span className="font-semibold">Quote</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-muted-foreground text-sm mb-10 max-w-lg"
        >
          Tell us about your project and we'll get back to you with a tailored proposal within 48 hours.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          {/* Contact details */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/60 mb-5">Contact Details</p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Full Name *</label>
                <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Your full name" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Company Name</label>
                <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Your company (if any)" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Email Address *</label>
                <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Phone Number *</label>
                <input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="+234 000 000 0000" className={inputClass} />
              </div>
            </div>
          </div>

          {/* Project details */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/60 mb-5">Project Details</p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Project Type *</label>
                <select name="projectType" required value={form.projectType} onChange={handleChange} className={`${inputClass} text-sm`}>
                  <option value="">Select project type</option>
                  {projectTypes.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className={labelClass}>Project Location *</label>
                <input type="text" name="location" required value={form.location} onChange={handleChange} placeholder="State / City" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Estimated Budget</label>
                <select name="budget" value={form.budget} onChange={handleChange} className={`${inputClass} text-sm`}>
                  <option value="">Select budget range</option>
                  {budgetRanges.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
              <div>
                <label className={labelClass}>Project Timeline</label>
                <select name="timeline" value={form.timeline} onChange={handleChange} className={`${inputClass} text-sm`}>
                  <option value="">Select timeline</option>
                  {timelines.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>
            <div className="mt-6">
              <label className={labelClass}>Project Description *</label>
              <textarea
                name="description"
                required
                rows={4}
                value={form.description}
                onChange={handleChange}
                placeholder="Describe your project — scope, requirements, any specific details..."
                className={`${inputClass} resize-none`}
              />
            </div>
          </div>

          {/* Referral */}
          <div>
            <label className={labelClass}>How did you hear about us?</label>
            <input type="text" name="referral" value={form.referral} onChange={handleChange} placeholder="Google, referral, social media..." className={inputClass} />
          </div>

          <div className="flex items-center gap-6 pt-2">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="bg-foreground text-white text-xs uppercase tracking-[0.15em] px-8 py-3.5 rounded-lg hover:bg-primary transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Submitting...' : 'Submit Quote Request'}
            </button>
            <p className="text-xs text-muted-foreground">We respond within 48 hours</p>
          </div>

          {(status === 'sent' || status === 'error') && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-5 rounded-2xl flex items-start gap-3 ${status === 'sent' ? 'bg-primary/10 border border-primary/20' : 'bg-red-50 border border-red-200'}`}
            >
              <span className={`text-lg ${status === 'sent' ? 'text-primary' : 'text-red-500'}`}>
                {status === 'sent' ? '✓' : '!'}
              </span>
              <div>
                <p className={`text-sm font-medium ${status === 'sent' ? 'text-primary' : 'text-red-700'}`}>
                  {status === 'sent' ? 'Quote Request Submitted!' : 'Submission Failed'}
                </p>
                <p className={`text-xs mt-1 ${status === 'sent' ? 'text-primary/70' : 'text-red-500'}`}>
                  {status === 'sent'
                    ? 'Thank you! We have received your request and will get back to you within 48 hours.'
                    : 'Something went wrong. Please try again or contact us directly at dominiczzbltd@yahoo.com.'}
                </p>
              </div>
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
