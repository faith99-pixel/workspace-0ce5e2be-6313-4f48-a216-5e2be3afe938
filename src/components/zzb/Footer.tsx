'client';

import Image from 'next/image';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import type { Page } from './Navigation';

interface FooterProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const footerLinks = [
  { label: 'Home', page: 'home' as Page },
  { label: 'About Us', page: 'about' as Page },
  { label: 'Services', page: 'services' as Page },
  { label: 'Projects', page: 'projects' as Page },
  { label: 'Equipment', page: 'equipment' as Page },
  { label: 'Geotextile', page: 'geotextile' as Page },
  { label: 'Contact', page: 'contact' as Page },
];

export default function Footer({ currentPage, onNavigate }: FooterProps) {
  return (
    <footer className="bg-zzb-dark text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/images/logo/zzb-logo.png" alt="ZZB Logo" width={40} height={40} className="object-contain" />
              <div>
                <div className="font-bold text-lg leading-tight">ZZB</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 leading-tight">Construction Company Ltd</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              A wholly owned indigenous engineering outfit incorporated under the Federal Republic
              Nigeria Companies and Allied Matter Act. RC: 728609
            </p>
            <div className="inline-flex items-center gap-2 bg-zzb-lemon/10 border border-zzb-lemon/20 rounded-full px-3 py-1">
              <span className="w-2 h-2 bg-zzb-lemon rounded-full" />
              <span className="text-zzb-lemon text-xs font-medium">We Choose To Differ</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/70 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map(link => (
                <li key={link.page}>
                  <button
                    onClick={() => { onNavigate(link.page); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className={`text-sm transition-colors hover:text-zzb-lemon ${currentPage === link.page ? 'text-zzb-lemon' : 'text-white/50'}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/70 mb-4">Our Services</h4>
            <ul className="space-y-2 text-white/50 text-sm">
              <li>Civil & Building Construction</li>
              <li>Road & Bridge Construction</li>
              <li>Equipment Hiring</li>
              <li>Geosynthetics Supply</li>
              <li>Bitumen Supply</li>
              <li>Project Management</li>
              <li>Consulting Services</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/70 mb-4">Contact Info</h4>
            <div className="space-y-3">
              <a href="tel:08034829700" className="flex items-start gap-3 text-white/50 text-sm hover:text-zzb-lemon transition-colors">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>08034829700, 08033041723</span>
              </a>
              <a href="mailto:dominiczzbltd@yahoo.com" className="flex items-start gap-3 text-white/50 text-sm hover:text-zzb-lemon transition-colors">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>dominiczzbltd@yahoo.com</span>
              </a>
              <div className="flex items-start gap-3 text-white/50 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>8, Lasu Road, Off Old Garage B/Stop, Isheri-Idimu, Lagos.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} ZZB Construction Company Ltd. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-2 rounded-full bg-white/5 hover:bg-zzb-lemon/20 text-white/50 hover:text-zzb-lemon transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
