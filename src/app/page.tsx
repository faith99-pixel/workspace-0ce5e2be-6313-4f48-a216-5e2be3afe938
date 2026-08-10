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
import PageWrapper from '@/components/zzb/PageWrapper';

function SubPage({ page, onNavigate }: { page: Page; onNavigate: (p: Page) => void }) {
  const labels: Record<Page, string> = {
    home: '',
    about: 'About ZZB',
    services: 'What We Do',
    projects: 'Portfolio',
    equipment: 'Our Fleet',
    geotextile: 'Materials',
    contact: 'Get In Touch',
  };

  return (
    <PageWrapper label={labels[page] || ''} onNavigate={onNavigate}>
      {page === 'about' && <AboutSection />}
      {page === 'services' && <ServicesSection onNavigate={onNavigate} />}
      {page === 'projects' && <ProjectsSection />}
      {page === 'equipment' && <EquipmentSection />}
      {page === 'geotextile' && <GeotextileSection />}
      {page === 'contact' && <ContactSection />}
    </PageWrapper>
  );
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
            {currentPage === 'home' ? (
              <>
                <HeroSection />
                <AboutSection />
                <ServicesSection onNavigate={handleNavigate} />
                <ProjectsSection />
                <EquipmentSection />
                <GeotextileSection />
                <TeamSection />
                <ContactSection />
              </>
            ) : (
              <SubPage page={currentPage} onNavigate={handleNavigate} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
