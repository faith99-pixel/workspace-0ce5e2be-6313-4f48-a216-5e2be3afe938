'use client';

import type { Page } from './Navigation';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="py-12 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            &copy; {new Date().getFullYear()} ZZB Construction Company Ltd
          </p>
          <p className="text-xs text-muted-foreground/60 mt-1">RC: 728609</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-1">
          {(['home', 'about', 'services', 'projects', 'contact'] as Page[]).map(p => (
            <button
              key={p}
              onClick={() => { onNavigate(p); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider cursor-pointer"
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
