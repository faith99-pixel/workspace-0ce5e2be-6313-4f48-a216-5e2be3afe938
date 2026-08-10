'use client';

import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation, { type Page } from '@/components/zzb/Navigation';
import HeroSection from '@/components/zzb/HeroSection';
import AboutSection from '@/components/zzb/AboutSection';
import ServicesSection from '@/components/zzb/ServicesSection';
import ProjectsSection from '@/components/zzb/ProjectsSection';
import EquipmentSection from '@/components/zzb/EquipmentSection';
import GeotextileSection from '@/components/zzb/GeotextileSection';
import TeamSection from '@/components/zzb/TeamSection';
import ContactSection from '@/components/zzb/ContactSection';
import Footer from '@/components/zzb/Footer';

function PageContent({ page, onNavigate }: { page: Page; onNavigate: (p: Page) => void }) {
  switch (page) {
    case 'about':
      return <AboutSection />;
    case 'services':
      return <ServicesSection onNavigate={onNavigate} />;
    case 'projects':
      return <ProjectsSection />;
    case 'equipment':
      return <EquipmentSection />;
    case 'geotextile':
      return <GeotextileSection />;
    case 'contact':
      return <ContactSection />;
    case 'home':
    default:
      return (
        <>
          <HeroSection />
          <AboutSection />
          <ServicesSection onNavigate={onNavigate} />
          <ProjectsSection />
          <EquipmentSection />
          <GeotextileSection />
          <TeamSection />
          <ContactSection />
        </>
      );
  }
}

export default function Home() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = useCallback((page: Page) => {
    setCurrentPage(page);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background font-[var(--font-geist-sans)]">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
          >
            <PageContent page={currentPage} onNavigate={handleNavigate} />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
