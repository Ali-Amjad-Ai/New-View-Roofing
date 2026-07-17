import React, { useState } from 'react';
import { PageId } from '../types';
import {
  Phone,
  Menu,
  X,
  ChevronDown,
  Award,
  Shield,
  Activity,
  Heart,
  Calendar,
  AlertTriangle,
  Home,
  MapPin,
  Users,
  MessageSquare,
  BookOpen
} from 'lucide-react';

interface NavbarProps {
  onNavigate: (pageId: PageId) => void;
  currentPage: PageId;
}

export default function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const menuItems = [
    {
      name: 'Roofing Types',
      id: 'roofing',
      icon: <Shield className="w-4 h-4 text-blue-600" />,
      submenus: [
        { name: 'Asphalt Roofing', id: 'roofing-asphalt' },
        { name: 'Asphalt Roof Repair', id: 'roofing-asphalt-repair' },
        { name: 'How to Maintain an Asphalt Roof', id: 'roofing-asphalt-maintain' },
        { name: '30-Year Shingles', id: 'roofing-shingles-30yr' },
        { name: '3-Tab Shingles', id: 'roofing-shingles-3tab' },
        { name: 'Class 3 Impact-Resistant', id: 'roofing-shingles-class3' },
        { name: 'Class 4 Impact-Resistant', id: 'roofing-shingles-class4' },
        { name: 'Shingle Repair', id: 'roofing-shingles-repair' },
        { name: 'Flat Roofing', id: 'roofing-flat' },
        { name: 'Tile Roofing', id: 'roofing-tile' },
        { name: 'Metal Roofing', id: 'roofing-metal' }
      ]
    },
    {
      name: 'Residential',
      id: 'residential',
      icon: <Home className="w-4 h-4 text-blue-600" />,
      submenus: [
        { name: 'Energy Efficient Roofing', id: 'residential-energy' },
        { name: 'Exterior Renovation', id: 'residential-exterior' },
        { name: 'Fence Installation', id: 'residential-fence' },
        { name: 'Gutters: Types & Sizes', id: 'residential-gutters' },
        { name: 'Multi-Family Repair', id: 'residential-multifamily' },
        { name: 'Roof Replacement', id: 'residential-replacement' },
        { name: 'Roof Ventilation', id: 'residential-ventilation' },
        { name: 'Emergency Roof Leak Repair', id: 'residential-repair-emergency' },
        { name: 'Roof Flashing Repair', id: 'residential-repair-flashing' },
        { name: 'New Roof Installation', id: 'residential-installation' },
        { name: 'Free Roof Inspection', id: 'residential-inspection' },
        { name: 'Roof Maintenance Plans', id: 'residential-maintenance' },
        { name: 'Window Installation & Repair', id: 'residential-windows' }
      ]
    },
    {
      name: 'Commercial & Industrial',
      id: 'commercial',
      icon: <Activity className="w-4 h-4 text-blue-600" />,
      submenus: [
        { name: 'Commercial Roof Replacement', id: 'commercial-replacement' },
        { name: 'Commercial Roof Coatings', id: 'commercial-coatings' },
        { name: 'Roof Coping & Edge Metal', id: 'commercial-coping' },
        { name: 'Commercial Inspections', id: 'commercial-inspections' },
        { name: 'Maintenance Programs', id: 'commercial-programs' },
        { name: 'Leak Detection & Waterproofing', id: 'commercial-leak' },
        { name: 'EPDM Rubber Roofing', id: 'commercial-epdm' },
        { name: 'Commercial Metal Roofing', id: 'commercial-metal' },
        { name: 'PVC Commercial Roofing', id: 'commercial-pvc' },
        { name: 'TPO Single-Ply Roofing', id: 'commercial-tpo' },
        { name: 'TPO vs. PVC?', id: 'commercial-tpo-pvc' }
      ]
    },
    {
      name: 'Storm Damage',
      id: 'storm',
      icon: <AlertTriangle className="w-4 h-4 text-blue-600" />,
      submenus: [
        { name: 'Hail Damage Roof Repair', id: 'storm-hail' },
        { name: 'Wind Damage Roof Repair', id: 'storm-wind' },
        { name: 'Roof Damage From Trees', id: 'storm-trees' }
      ]
    },
    {
      name: 'About Us',
      id: 'about',
      icon: <Users className="w-4 h-4 text-blue-600" />,
      submenus: [
        { name: 'Meet Our Team', id: 'about-team' },
        { name: 'Testimonials', id: 'about-testimonials' }
      ]
    },
    {
      name: 'Resources',
      id: 'resources',
      icon: <BookOpen className="w-4 h-4 text-blue-600" />,
      submenus: [
        { name: 'Educational Blog', id: 'resources-blog' },
        { name: 'Roof Financing Options', id: 'resources-financing' },
        { name: 'Warranties & GAF Levels', id: 'resources-warranties' },
        { name: 'Project Gallery', id: 'resources-gallery' },
        { name: 'Media & Video Guides', id: 'resources-media' },
        { name: 'Frequently Asked Questions', id: 'resources-faq' },
        { name: 'Do I Need a New Roof?', id: 'resource-need-roof' },
        { name: 'Ceiling Water Stain Guide', id: 'resource-water-stain' },
        { name: 'Roof Insurance Claims Guide', id: 'resource-insurance' },
        { name: 'What Will My Roof Look Like?', id: 'resource-look-like' },
        { name: 'Get a Free Estimate', id: 'resource-estimate' }
      ]
    }
  ];

  const handleLinkClick = (id: PageId) => {
    onNavigate(id);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm" id="nav-header">
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-slate-100 py-2.5 px-4 text-xs font-medium border-b border-slate-800 hidden md:block font-sans">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-slate-300 font-mono">Active Response: 24h Inspections</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <Award className="w-3.5 h-3.5 text-blue-400" />
              <span>GAF Master Elite® (Top 3%)</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
              <span>Veteran-Owned & Family-Operated</span>
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <button
              onClick={() => handleLinkClick('service-areas')}
              className="hover:text-blue-400 transition-colors flex items-center space-x-1 font-semibold cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Dallas-Fort Worth Metroplex & Beyond</span>
            </button>
            <a
              href="tel:(469)716-5426"
              className="text-blue-400 hover:text-blue-300 font-bold tracking-wider flex items-center space-x-1.5 transition-all transform hover:scale-105"
            >
              <Phone className="w-3.5 h-3.5 animate-bounce" />
              <span>(469) 716-5426</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Brand & Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        {/* Brand Logo - Upgraded Beautiful Blue/Indigo Star Design */}
        <div
          onClick={() => handleLinkClick('home')}
          className="flex items-center space-x-3 cursor-pointer group"
          id="nav-brand-logo"
        >
          <div className="relative flex items-center justify-center">
            {/* Elegant, high-end double layer SVG logo (Star + Rooflines) */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="w-11 h-11 transition-all duration-300 group-hover:scale-110">
              <defs>
                <linearGradient id="logo-star-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#2563eb" />
                  <stop offset="1" stopColor="#4f46e5" />
                </linearGradient>
              </defs>
              <path d="M20,2 L24.5,14 L37,14 L27,21.5 L31,34 L20,26.5 L9,34 L13,21.5 L3,14 L15.5,14 Z" fill="url(#logo-star-grad)" />
              <path d="M12,23 L20,15 L28,23" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path d="M8,27 L20,15 L32,27" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <text x="20" y="31" fill="#ffffff" fontSize="7" fontWeight="900" textAnchor="middle" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">N V</text>
            </svg>
            <span className="absolute -bottom-1 -right-1 text-[8px] bg-slate-900 text-white px-1 py-0.5 rounded-full border border-slate-700 font-bold font-mono">
              ★
            </span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-1.5">
              <span className="text-xl font-black text-slate-900 tracking-tight leading-none">
                NEW<span className="text-blue-600">VIEW</span>
              </span>
            </div>
            <span className="text-[10px] text-slate-500 tracking-[0.25em] uppercase font-extrabold mt-1">
              ROOFING & CONTRACTING
            </span>
          </div>
        </div>

        {/* Desktop Navigation Items */}
        <nav className="hidden lg:flex items-center space-x-1" id="nav-desktop-menu">
          <button
            onClick={() => handleLinkClick('home')}
            className={`px-3.5 py-2 rounded-lg text-sm font-medium tracking-tight transition-all duration-150 cursor-pointer ${
              currentPage === 'home'
                ? 'text-blue-700 bg-blue-500/10 font-bold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            Home
          </button>

          {menuItems.map((item) => (
            <div key={item.id} className="relative group/dropdown">
              <button
                className="px-3.5 py-2 rounded-lg text-sm font-medium tracking-tight text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all flex items-center space-x-1 cursor-pointer"
              >
                <span>{item.name}</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover/dropdown:rotate-180 transition-transform duration-300" />
              </button>

              {/* Dynamic Mega dropdown list */}
              <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-slate-200/80 rounded-xl shadow-xl p-3 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-200 transform translate-y-2 group-hover/dropdown:translate-y-0 z-50">
                <div className="p-2 mb-2 bg-slate-50 rounded-lg flex items-center space-x-2 border border-slate-100">
                  {item.icon}
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{item.name} Solutions</span>
                </div>
                <div className="max-h-[320px] overflow-y-auto custom-scroll space-y-0.5">
                  {item.submenus.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => handleLinkClick(sub.id as PageId)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all duration-150 flex items-center justify-between group/item cursor-pointer ${
                        currentPage === sub.id
                          ? 'bg-blue-500/10 text-blue-800 font-semibold'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      <span>{sub.name}</span>
                      <span className="text-[10px] text-slate-400 group-hover/item:text-blue-600 transition-colors">→</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={() => handleLinkClick('service-areas')}
            className={`px-3.5 py-2 rounded-lg text-sm font-medium tracking-tight transition-all duration-150 cursor-pointer ${
              currentPage === 'service-areas'
                ? 'text-blue-700 bg-blue-500/10 font-bold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            Service Areas
          </button>
        </nav>

        {/* CTA Actions */}
        <div className="hidden lg:flex items-center space-x-3.5" id="nav-desktop-actions">
          <button
            onClick={() => handleLinkClick('contact')}
            className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
          >
            Support
          </button>
          <button
            onClick={() => handleLinkClick('residential-inspection')}
            className="px-5 py-2.5 bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-600 hover:to-indigo-600 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
          >
            Free Inspection
          </button>
        </div>

        {/* Mobile Header Call & Menu Buttons */}
        <div className="flex items-center space-x-3.5 lg:hidden" id="nav-mobile-triggers">
          <a
            href="tel:(469)716-5426"
            className="p-2.5 bg-slate-50 hover:bg-slate-100 text-blue-600 rounded-lg transition-colors border border-slate-200/80 flex items-center justify-center shadow-sm"
            title="Call Now"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 bg-slate-50 text-slate-700 hover:text-slate-950 rounded-lg transition-colors border border-slate-200/80 cursor-pointer shadow-sm"
            id="mobile-menu-toggle-btn"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[73px] bg-white backdrop-blur-md z-40 overflow-y-auto border-t border-slate-100 animate-fadeIn" id="mobile-drawer">
          <div className="p-4 space-y-4">
            {/* Quick Call Action */}
            <div className="p-4 bg-blue-50 border border-blue-200/60 rounded-xl flex justify-between items-center">
              <div>
                <p className="text-xs text-slate-500 font-medium">Need immediate assistance?</p>
                <p className="text-sm font-bold text-slate-900">Call DFW Office Today</p>
              </div>
              <a
                href="tel:(469)716-5426"
                className="px-4 py-2 bg-slate-900 text-white font-bold text-xs rounded-lg shadow-md"
              >
                (469) 716-5426
              </a>
            </div>

            {/* Navigation Options */}
            <div className="space-y-1">
              <button
                onClick={() => handleLinkClick('home')}
                className="w-full text-left px-4 py-3 rounded-lg text-sm font-bold text-slate-700 hover:text-slate-950 hover:bg-slate-50 flex items-center space-x-2 cursor-pointer"
              >
                <span>Home</span>
              </button>

              {menuItems.map((item) => (
                <div key={item.id} className="border-b border-slate-100 pb-1">
                  <button
                    onClick={() => toggleDropdown(item.id)}
                    className="w-full text-left px-4 py-3 rounded-lg text-sm font-bold text-slate-700 hover:text-slate-950 hover:bg-slate-50 flex justify-between items-center cursor-pointer"
                  >
                    <div className="flex items-center space-x-2">
                      {item.icon}
                      <span>{item.name}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${activeDropdown === item.id ? 'rotate-180 text-blue-600' : ''}`} />
                  </button>

                  {activeDropdown === item.id && (
                    <div className="pl-6 pr-2 py-1.5 space-y-1 bg-slate-50 rounded-lg my-1 border border-slate-100">
                      {item.submenus.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => handleLinkClick(sub.id as PageId)}
                          className="w-full text-left px-3 py-2.5 text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors flex items-center space-x-2 cursor-pointer"
                        >
                          <span className="text-blue-500 font-mono text-[9px]">•</span>
                          <span>{sub.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <button
                onClick={() => handleLinkClick('service-areas')}
                className="w-full text-left px-4 py-3 rounded-lg text-sm font-bold text-slate-700 hover:text-slate-950 hover:bg-slate-50 flex items-center space-x-2 cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>Service Areas</span>
              </button>
            </div>

            <div className="pt-4 space-y-2">
              <button
                onClick={() => handleLinkClick('residential-inspection')}
                className="w-full py-3 bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-600 text-white font-bold rounded-lg text-sm text-center shadow-md cursor-pointer"
              >
                Request Free Inspection
              </button>
              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full py-3 bg-slate-50 text-slate-700 hover:text-slate-950 font-bold rounded-lg text-sm text-center border border-slate-200 cursor-pointer"
              >
                Contact DFW Office
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
