'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ArrowUpRight } from 'lucide-react';

type Page = 'home' | 'about' | 'services' | 'projects' | 'equipment' | 'geotextile' | 'contact';

const navLinks: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'About', page: 'about' },
  { label: 'Services', page: 'services' },
  { label: 'Projects', page: 'projects' },
  { label: 'Contact', page: 'contact' },
];

const serviceLinks: { label: string; page: Page }[] = [
  { label: 'Equipment Hiring', page: 'equipment' },
  { label: 'Geosynthetics', page: 'geotextile' },
];

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (page: Page) => {
    onNavigate(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating menu button */}
      <div className="fixed top-6 right-6 z-[60]">
        <AnimatePresence mode="wait">
          {!menuOpen ? (
            <motion.button
              key="menu-btn"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={() => setMenuOpen(true)}
              className="bg-white rounded-full px-6 py-3 flex items-center gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-shadow cursor-pointer"
            >
              <div className="flex flex-col gap-1.5">
                <span className="block w-5 h-px bg-foreground" />
                <span className="block w-5 h-px bg-foreground" />
              </div>
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">Menu</span>
            </motion.button>
          ) : null}
        </AnimatePresence>
      </div>

      {/* Logo - top left */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        onClick={() => handleNav('home')}
        className="fixed top-6 left-6 z-[60] flex items-center gap-2.5 group cursor-pointer"
      >
        <Image src="/images/logo/zzb-logo.png" alt="ZZB" width={36} height={36} className="object-contain" />
        <div className="hidden sm:block">
          <div className="text-sm font-bold tracking-tight leading-none">ZZB</div>
          <div className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground leading-none mt-0.5">Construction</div>
        </div>
      </motion.button>

      {/* Full-screen overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[55] bg-foreground/95 backdrop-blur-sm"
          >
            <div className="h-full flex flex-col justify-center px-8 sm:px-16 lg:px-24">
              <motion.nav
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="space-y-1 max-w-2xl"
              >
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.page}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.07 }}
                    onClick={() => handleNav(link.page)}
                    className="group flex items-center justify-between w-full py-4 border-b border-white/10 text-left cursor-pointer"
                  >
                    <span className={`text-3xl sm:text-4xl lg:text-5xl font-light transition-colors ${currentPage === link.page ? 'text-primary' : 'text-white/90 group-hover:text-primary'}`}>
                      {link.label}
                    </span>
                    <ArrowUpRight className={`w-5 h-5 transition-all ${currentPage === link.page ? 'text-primary opacity-100' : 'text-white/30 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0'}`} />
                  </motion.button>
                ))}

                <div className="pt-6 mt-4 border-t border-white/10">
                  <p className="text-white/40 text-xs uppercase tracking-[0.2em] mb-4">Services</p>
                  <div className="flex flex-wrap gap-3">
                    {serviceLinks.map((link) => (
                      <button
                        key={link.page}
                        onClick={() => handleNav(link.page)}
                        className="text-sm text-white/60 hover:text-primary transition-colors cursor-pointer"
                      >
                        {link.label}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.nav>

              {/* Contact info in menu */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-8 left-8 sm:left-16 lg:left-24"
              >
                <p className="text-white/30 text-xs uppercase tracking-[0.2em] mb-2">Contact</p>
                <a href="tel:08034829700" className="text-white/60 text-sm hover:text-primary transition-colors">08034829700</a>
                <span className="text-white/20 mx-3">|</span>
                <a href="mailto:dominiczzbltd@yahoo.com" className="text-white/60 text-sm hover:text-primary transition-colors">dominiczzbltd@yahoo.com</a>
              </motion.div>
            </div>

            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export type { Page };