'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ArrowUpRight } from 'lucide-react';

type Page = 'home' | 'about' | 'services' | 'projects' | 'equipment' | 'geotextile' | 'contact';

const navLinks: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'About', page: 'about' },
  { label: 'Services', page: 'services' },
  { label: 'Projects', page: 'projects' },
  { label: 'Equipment', page: 'equipment' },
  { label: 'Geotextile', page: 'geotextile' },
  { label: 'Contact', page: 'contact' },
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
        className="fixed top-6 left-6 z-[60] flex items-center cursor-pointer"
      >
        <div className="relative w-[64px] h-[64px] sm:w-[80px] sm:h-[80px]">
          <Image
            src="/images/logo/zzb-logo-nobg@4x.png"
            alt="ZZB"
            fill
            sizes="(max-width: 640px) 64px, 80px"
            className="object-contain"
            quality={100}
            priority
          />
        </div>
      </motion.button>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/2348034829700"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[60] w-14 h-14 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:scale-110 transition-transform"
        style={{ backgroundColor: '#25D366' }}
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

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
                    transition={{ delay: 0.15 + i * 0.06 }}
                    onClick={() => handleNav(link.page)}
                    className="group flex items-center justify-between w-full py-3.5 border-b border-white/10 text-left cursor-pointer"
                  >
                    <span className={`text-2xl sm:text-3xl lg:text-4xl font-light transition-colors ${currentPage === link.page ? 'text-primary' : 'text-white/90 group-hover:text-primary'}`}>
                      {link.label}
                    </span>
                    <ArrowUpRight className={`w-4 h-4 transition-all ${currentPage === link.page ? 'text-primary opacity-100' : 'text-white/30 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0'}`} />
                  </motion.button>
                ))}
              </motion.nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-8 left-8 sm:left-16 lg:left-24"
              >
                <p className="text-white/30 text-xs uppercase tracking-[0.2em] mb-2">Contact</p>
                <a href="tel:+2348034829700" className="text-white/60 text-sm hover:text-primary transition-colors">+234 803 482 9700</a>
                <span className="text-white/20 mx-3">|</span>
                <a href="mailto:dominiczzbltd@yahoo.com" className="text-white/60 text-sm hover:text-primary transition-colors">dominiczzbltd@yahoo.com</a>
              </motion.div>
            </div>

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
