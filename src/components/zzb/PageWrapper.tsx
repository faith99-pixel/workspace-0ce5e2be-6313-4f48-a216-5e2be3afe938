'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import type { Page } from './Navigation';

interface PageWrapperProps {
  children: React.ReactNode;
  label: string;
  onNavigate: (page: Page) => void;
}

export default function PageWrapper({ children, label, onNavigate }: PageWrapperProps) {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors cursor-pointer mb-2"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Home
        </motion.button>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground"
        >
          {label}
        </motion.p>
      </div>
      {children}
    </div>
  );
}
