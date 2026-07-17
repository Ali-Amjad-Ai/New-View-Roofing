import React from 'react';
import { Shield, Award, Users, Star, ArrowRight, Heart } from 'lucide-react';
import InspectionForm from './InspectionForm';
import { PageId } from '../types';

interface MainHeroProps {
  onNavigate: (pageId: PageId) => void;
}

export default function MainHero({ onNavigate }: MainHeroProps) {
  return (
    <section className="relative bg-[#080c16] pt-20 pb-28 md:py-32 overflow-hidden font-sans" id="hero-section">
      {/* Background visual graphics - Premium grid and ambient glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25"></div>
      
      {/* Absolute colored radial ambient light - Rich Blue & Indigo */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero Left Content Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8 text-left animate-fadeIn">
            
            {/* Badges / Trust Pill - Elegant Indigo Theme */}
            <div className="inline-flex flex-wrap gap-2.5 items-center p-1.5 bg-[#121829]/80 border border-[#1e293b] rounded-full text-xs font-medium text-slate-300 shadow-sm">
              <span className="px-3 py-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white font-extrabold rounded-full text-[10px] uppercase tracking-wider">
                Certified
              </span>
              <span className="flex items-center space-x-1.5 pr-3 text-slate-200">
                <Star className="w-3.5 h-3.5 text-blue-400 fill-blue-400" />
                <span className="font-semibold text-slate-300">650+ Google Reviews (4.9 Rating)</span>
              </span>
            </div>

            {/* Main Premium Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight md:leading-none">
                Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-600">Dallas-Fort Worth</span>
                <br />
                Roof Replacement Experts
              </h1>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-xl">
                New View Roofing is a veteran-owned, family-operated Dallas roofing company covering all of North Dallas-Fort Worth, TX. We provide full-scale residential, commercial, and industrial roofing services.
              </p>
            </div>

            {/* CTA action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onNavigate('residential-inspection')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-blue-500/10 hover:shadow-blue-500/25 hover:-translate-y-0.5 active:scale-98 transition-all flex items-center justify-center space-x-2 cursor-pointer font-sans"
              >
                <span>Book Free Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-slate-900/80 hover:bg-slate-900 text-slate-200 hover:text-white font-bold text-xs uppercase tracking-wider rounded-xl border border-slate-800 hover:border-slate-700 hover:-translate-y-0.5 active:scale-98 transition-all flex items-center justify-center space-x-2 cursor-pointer font-sans"
              >
                <span>Speak to an Estimator</span>
              </button>
            </div>

            {/* Quick trust metrics block */}
            <div className="pt-8 border-t border-[#1e293b] grid grid-cols-3 gap-6">
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl font-black text-white tracking-tight">25+</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Years Experience</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl font-black text-blue-400 tracking-tight">Top 3%</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">GAF Master Elite®</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl font-black text-white tracking-tight">100%</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Veteran Owned</p>
              </div>
            </div>

            {/* Credentials logos list */}
            <div className="flex flex-wrap items-center gap-6 pt-4 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
              <div className="flex items-center space-x-1.5 text-xs text-slate-300 font-semibold">
                <Shield className="w-4 h-4 text-blue-400 shrink-0" />
                <span>A+ rated BBB</span>
              </div>
              <div className="flex items-center space-x-1.5 text-xs text-slate-300 font-semibold">
                <Award className="w-4 h-4 text-blue-400 shrink-0" />
                <span>NTRCA Certified</span>
              </div>
              <div className="flex items-center space-x-1.5 text-xs text-slate-300 font-semibold">
                <Heart className="w-4 h-4 text-red-500 shrink-0" />
                <span>Veteran-Owned</span>
              </div>
            </div>

          </div>

          {/* Hero Right Column (5 cols) - Form Placement */}
          <div className="lg:col-span-5 relative" id="hero-form-wrapper">
            {/* Graphic backplate under form */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl opacity-15 blur-xl pointer-events-none"></div>
            <InspectionForm compact />
          </div>

        </div>
      </div>
    </section>
  );
}
