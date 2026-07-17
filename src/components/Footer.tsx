import React from 'react';
import { PageId } from '../types';
import {
  Shield,
  MapPin,
  Mail,
  Phone,
  Clock,
  Instagram,
  Facebook,
  Youtube,
  Award,
  CheckCircle,
  FileText
} from 'lucide-react';

interface FooterProps {
  onNavigate: (pageId: PageId) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (id: PageId) => {
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080c16] text-slate-300 border-t border-slate-950 pt-16 pb-8 font-sans animate-fadeIn" id="footer-section">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Upper Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand & Credibility */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => handleLinkClick('home')}>
              <div className="relative">
                {/* Upgraded Professional SVG Star Logo */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="w-10 h-10 transition-transform duration-300 group-hover:scale-105">
                  <defs>
                    <linearGradient id="footer-star-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#3b82f6" />
                      <stop offset="1" stopColor="#4f46e5" />
                    </linearGradient>
                  </defs>
                  <path d="M20,2 L24.5,14 L37,14 L27,21.5 L31,34 L20,26.5 L9,34 L13,21.5 L3,14 L15.5,14 Z" fill="url(#footer-star-grad)" />
                  <path d="M12,23 L20,15 L28,23" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <path d="M8,27 L20,15 L32,27" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-extrabold text-lg tracking-tight">
                  NEW<span className="text-blue-500">VIEW</span>
                </h3>
                <p className="text-[9px] text-slate-400 tracking-wider uppercase font-bold">ROOFING & CONTRACTING</p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed font-medium">
              New View Roofing is a veteran-owned, family-operated roofing contractor serving North Texas with absolute excellence. GAF Master Elite® certified and BBB A+ rated.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3.5">
              <a
                href="https://instagram.com/newviewroofing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900/60 hover:bg-slate-900 text-slate-400 hover:text-blue-500 flex items-center justify-center border border-slate-800 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/newviewroofing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900/60 hover:bg-slate-900 text-slate-400 hover:text-blue-500 flex items-center justify-center border border-slate-800 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/@newviewroofing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900/60 hover:bg-slate-900 text-slate-400 hover:text-blue-500 flex items-center justify-center border border-slate-800 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            {/* Hearth Financing Partner Badge */}
            <div className="p-4 bg-slate-900/40 rounded-xl border border-slate-900/60 space-y-2">
              <span className="text-[10px] uppercase tracking-wider font-bold text-blue-400">Financing Partner</span>
              <p className="text-xs text-slate-300 font-semibold leading-normal">
                Explore low monthly payments & 0%* APR options for up to 18 months via Hearth.
              </p>
              <button
                onClick={() => handleLinkClick('resources-financing')}
                className="text-xs font-bold text-white hover:text-blue-400 underline transition-all text-left block cursor-pointer"
              >
                Apply In 2 Minutes
              </button>
            </div>
          </div>

          {/* Column 2: Residential Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6 border-l-2 border-blue-500 pl-3">
              Residential Solutions
            </h4>
            <ul className="space-y-3.5 text-sm font-medium">
              {[
                { name: 'Roof Replacement', id: 'residential-replacement' },
                { name: 'Roof Repair & Leak Care', id: 'residential-repair-emergency' },
                { name: 'Flashing Repairs', id: 'residential-repair-flashing' },
                { name: 'Gutters & Sizes', id: 'residential-gutters' },
                { name: 'Ventilation Systems', id: 'residential-ventilation' },
                { name: 'Siding & Windows', id: 'residential-windows' },
                { name: 'Cedar Wood Fencing', id: 'residential-fence' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id as PageId)}
                    className="text-slate-400 hover:text-white hover:translate-x-1.5 transition-all duration-150 text-left block cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Commercial Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6 border-l-2 border-blue-500 pl-3">
              Commercial & Industrial
            </h4>
            <ul className="space-y-3.5 text-sm font-medium">
              {[
                { name: 'Commercial Replacement', id: 'commercial-replacement' },
                { name: 'Roof Coatings Restoration', id: 'commercial-coatings' },
                { name: 'Leak Detection & Waterproof', id: 'commercial-leak' },
                { name: 'TPO Single-Ply Systems', id: 'commercial-tpo' },
                { name: 'PVC Chemical Resistant', id: 'commercial-pvc' },
                { name: 'EPDM Durable Rubber', id: 'commercial-epdm' },
                { name: 'Edge Coping Metal caps', id: 'commercial-coping' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id as PageId)}
                    className="text-slate-400 hover:text-white hover:translate-x-1.5 transition-all duration-150 text-left block cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office Info */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2 border-l-2 border-blue-500 pl-3">
              Corporate Office
            </h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span>
                  4722 Gaston Ave,
                  <br />
                  Dallas, TX 75246
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <a href="tel:(469)716-5426" className="hover:text-white transition-colors font-bold font-mono">
                  (469) 716-5426
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <a href="mailto:info@newviewroofing.com" className="hover:text-white transition-colors">
                  info@newviewroofing.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span>
                  Monday - Saturday
                  <br />
                  8:00 AM - 6:00 PM
                  <br />
                  <span className="text-emerald-500 font-bold">24/7 Emergency Storm Tarping</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Credentials and Association Logos banner */}
        <div className="py-8 my-8 border-t border-b border-slate-900 grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center">
          <div className="flex flex-col items-center">
            <span className="text-blue-400 font-black text-sm">GAF MASTER ELITE®</span>
            <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Top 3% Certified</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white font-extrabold text-sm">VETERAN OWNED</span>
            <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Military Values</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-blue-400 font-black text-sm">BBB ACCREDITED</span>
            <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">A+ Rating</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white font-extrabold text-sm">NTRCA MEMBER</span>
            <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">North Texas Roofing</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-blue-400 font-black text-sm">LIVING MAGAZINE</span>
            <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Best Readers Choice</span>
          </div>
        </div>

        {/* Bottom copyright and legal bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-semibold space-y-4 md:space-y-0 pt-4">
          <div>
            <p>© {currentYear} New View Roofing. All Rights Reserved. | Powered by MarketCrest</p>
          </div>
          <div className="flex space-x-6">
            <button
              onClick={() => handleLinkClick('privacy-policy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handleLinkClick('terms-of-service')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
