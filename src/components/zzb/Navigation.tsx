'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ArrowUpRight } from 'lucide-react';

type Page = 'home' | 'about' | 'services' | 'projects' | 'equipment' | 'geotextile' | 'contact' | 'quote';

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (page: Page) => {
    onNavigate(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isHeroMode = currentPage === 'home' && !scrolled;
  return (
    <>
      {/* ── Desktop header bar ── */}
      <header className={`hidden lg:flex items-center justify-between px-8 py-4 sticky top-0 z-[60] transition-all duration-500 ${
        isHeroMode
          ? 'bg-transparent'
          : 'bg-white/90 backdrop-blur-md shadow-sm border-b border-black/5'
      }`}>
        {/* Logo — no background, just the image */}
        <button onClick={() => handleNav('home')} className="cursor-pointer flex-shrink-0">
          <div className="relative w-16 h-16">
            <Image
              src="/images/logo/zzb-logo-nobg@4x.png"
              alt="ZZB Construction"
              fill
              sizes="64px"
              className="object-contain"
              quality={100}
              priority
            />
          </div>
        </button>

        {/* Nav links */}
        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.page}
              onClick={() => handleNav(link.page)}
              className={`text-[11px] uppercase tracking-[0.15em] font-medium transition-all cursor-pointer pb-0.5 border-b-2 ${
                currentPage === link.page
                  ? 'text-foreground border-primary'
                  : 'text-foreground/60 border-transparent hover:text-foreground'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Get a Quote button */}
        <button
          onClick={() => handleNav('quote')}
          className={`flex-shrink-0 px-5 py-2 rounded-lg text-[11px] uppercase tracking-[0.15em] font-medium transition-all cursor-pointer border ${
            currentPage === 'quote'
              ? 'bg-foreground text-white border-foreground'
              : 'border-foreground/20 text-foreground hover:bg-foreground hover:text-white'
          }`}
        >
          Get a Quote
        </button>
      </header>

      {/* ── Mobile header bar — sticky ── */}
      <header className="lg:hidden sticky top-0 z-[60] flex items-center justify-between px-4 py-3 bg-white/90 backdrop-blur-md border-b border-black/5">
        <button onClick={() => handleNav('home')} className="cursor-pointer">
          <div className="relative w-12 h-12">
            <Image
              src="/images/logo/zzb-logo-nobg@4x.png"
              alt="ZZB Construction"
              fill
              sizes="48px"
              className="object-contain"
              quality={100}
              priority
            />
          </div>
        </button>

        <AnimatePresence mode="wait">
          {!menuOpen && (
            <motion.button
              key="menu-btn"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={() => setMenuOpen(true)}
              className="bg-foreground/5 rounded-full px-5 py-2 flex items-center gap-2.5 cursor-pointer"
            >
              <div className="flex flex-col gap-1.5">
                <span className="block w-4 h-px bg-foreground" />
                <span className="block w-4 h-px bg-foreground" />
              </div>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">Menu</span>
            </motion.button>
          )}
        </AnimatePresence>
      </header>

      {/* ── WhatsApp — always fixed ── */}
      <a
        href="https://wa.me/2348034829700"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[60] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgb(0,0,0,0.2)] hover:scale-110 transition-transform"
        style={{ backgroundColor: '#25D366', width: '52px', height: '52px' }}
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* ── Mobile overlay menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[65] bg-foreground/95 backdrop-blur-sm lg:hidden"
          >
            <div className="h-full flex flex-col justify-center px-8 sm:px-16">
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
                    <span className={`text-2xl sm:text-3xl font-light transition-colors ${currentPage === link.page ? 'text-primary' : 'text-white/90 group-hover:text-primary'}`}>
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
                className="absolute bottom-8 left-8 sm:left-16"
              >
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 }}
                  onClick={() => handleNav('quote')}
                  className="mb-6 px-6 py-3 rounded-lg bg-primary text-white text-[11px] uppercase tracking-[0.15em] font-medium cursor-pointer hover:bg-primary/90 transition-colors"
                >
                  Get a Quote
                </motion.button>
                <p className="text-white/30 text-xs uppercase tracking-[0.2em] mb-2">Contact</p>
                <a href="tel:+2348034829700" className="text-white/60 text-sm hover:text-primary transition-colors">+234 803 482 9700</a>
                <span className="text-white/20 mx-3">|</span>
                <a href="mailto:dominiczzbltd@yahoo.com" className="text-white/60 text-sm hover:text-primary transition-colors">dominiczzbltd@yahoo.com</a>
              </motion.div>
            </div>

            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4 w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export type { Page };
