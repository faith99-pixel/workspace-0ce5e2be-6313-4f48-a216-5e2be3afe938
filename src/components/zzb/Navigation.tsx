'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';

type Page =
  | 'home'
  | 'about'
  | 'services'
  | 'projects'
  | 'equipment'
  | 'geotextile'
  | 'contact';

const navItems: { label: string; page: Page; children?: { label: string; page: Page }[] }[] = [
  { label: 'Home', page: 'home' },
  { label: 'About Us', page: 'about' },
  {
    label: 'Services',
    page: 'services',
    children: [
      { label: 'Equipment Hiring', page: 'equipment' },
      { label: 'Geosynthetics', page: 'geotextile' },
    ],
  },
  { label: 'Projects', page: 'projects' },
  { label: 'Contact', page: 'contact' },
];

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page: Page) => {
    onNavigate(page);
    setMobileOpen(false);
    setDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-zzb-dark text-white/80 text-sm py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:08034829700" className="flex items-center gap-2 hover:text-zzb-lemon transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>08034829700</span>
            </a>
            <a href="mailto:dominiczzbltd@yahoo.com" className="flex items-center gap-2 hover:text-zzb-lemon transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span>dominiczzbltd@yahoo.com</span>
            </a>
          </div>
          <div className="text-zzb-lemon font-medium tracking-wider text-xs uppercase">
            RC: 728609
          </div>
        </div>
      </div>

      {/* Main nav */}
      <motion.nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white shadow-sm'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNav('home')}
              className="flex items-center gap-3 group"
            >
              <Image
                src="/images/logo/zzb-logo.png"
                alt="ZZB Construction Logo"
                width={50}
                height={50}
                className="object-contain"
              />
              <div className="hidden sm:block">
                <div className="text-zzb-dark font-bold text-lg leading-tight tracking-tight">
                  ZZB
                </div>
                <div className="text-zzb-gray text-[10px] uppercase tracking-widest leading-tight">
                  Construction Company Ltd
                </div>
              </div>
            </button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.page}
                  className="relative"
                  onMouseEnter={() => item.children && setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    onClick={() =>
                      item.children ? setDropdownOpen(!dropdownOpen) : handleNav(item.page)
                    }
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                      currentPage === item.page
                        ? 'text-zzb-lemon-dark bg-zzb-lemon/10'
                        : 'text-zzb-gray hover:text-zzb-dark hover:bg-zzb-lemon/5'
                    }`}
                  >
                    {item.label}
                    {item.children && <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[200px] overflow-hidden"
                      >
                        {item.children.map((child) => (
                          <button
                            key={child.page}
                            onClick={() => handleNav(child.page)}
                            className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                              currentPage === child.page
                                ? 'bg-zzb-lemon/10 text-zzb-lemon-dark font-medium'
                                : 'text-zzb-gray hover:bg-zzb-lemon/5 hover:text-zzb-dark'
                            }`}
                          >
                            {child.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <button
                onClick={() => handleNav('contact')}
                className="ml-3 bg-zzb-lemon hover:bg-zzb-lemon-dark text-zzb-dark font-semibold px-5 py-2.5 rounded-md transition-all duration-200 text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Get a Quote
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-md text-zzb-gray hover:text-zzb-dark hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 py-3 space-y-1">
                {navItems.map((item) => (
                  <div key={item.page}>
                    <button
                      onClick={() => handleNav(item.page)}
                      className={`w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                        currentPage === item.page
                          ? 'bg-zzb-lemon/10 text-zzb-lemon-dark'
                          : 'text-zzb-gray hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                    </button>
                    {item.children && (
                      <div className="ml-6 space-y-1">
                        {item.children.map((child) => (
                          <button
                            key={child.page}
                            onClick={() => handleNav(child.page)}
                            className="w-full text-left px-4 py-2 rounded-md text-sm text-zzb-gray hover:bg-gray-50"
                          >
                            {child.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <button
                  onClick={() => handleNav('contact')}
                  className="w-full mt-2 bg-zzb-lemon hover:bg-zzb-lemon-dark text-zzb-dark font-semibold px-5 py-3 rounded-md transition-all text-sm"
                >
                  Get a Quote
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      <div className="stripe-divider" />
    </>
  );
}

export type { Page };