import React, { useState } from 'react';
import { MapPin, Search, Check, Shield, Navigation } from 'lucide-react';
import { PageId } from '../types';

interface InteractiveMapProps {
  onNavigate: (pageId: PageId) => void;
}

const CITIES_LIST = [
  { name: 'Allen', state: 'TX', region: 'North DFW' },
  { name: 'Arlington', state: 'TX', region: 'Mid DFW' },
  { name: 'Austin', state: 'TX', region: 'Central Texas' },
  { name: 'Carrollton', state: 'TX', region: 'North DFW' },
  { name: 'Dallas', state: 'TX', region: 'Mid DFW' },
  { name: 'Denton', state: 'TX', region: 'North DFW' },
  { name: 'Flower Mound', state: 'TX', region: 'North DFW' },
  { name: 'Fort Worth', state: 'TX', region: 'Mid DFW' },
  { name: 'Frisco', state: 'TX', region: 'North DFW' },
  { name: 'Garland', state: 'TX', region: 'East DFW' },
  { name: 'Grand Prairie', state: 'TX', region: 'Mid DFW' },
  { name: 'Grapevine', state: 'TX', region: 'Mid DFW' },
  { name: 'Irving', state: 'TX', region: 'Mid DFW' },
  { name: 'Lewisville', state: 'TX', region: 'North DFW' },
  { name: 'Little Elm', state: 'TX', region: 'North DFW' },
  { name: 'McKinney', state: 'TX', region: 'North DFW' },
  { name: 'Plano', state: 'TX', region: 'North DFW' },
  { name: 'Prosper', state: 'TX', region: 'North DFW' },
  { name: 'Richardson', state: 'TX', region: 'North DFW' },
  { name: 'Rockwall', state: 'East DFW', region: 'East DFW' },
  { name: 'Rowlett', state: 'TX', region: 'East DFW' },
  { name: 'Southlake', state: 'TX', region: 'North DFW' },
  { name: 'The Colony', state: 'TX', region: 'North DFW' },
  { name: 'Cleveland', state: 'OH', region: 'Ohio Division' },
  { name: 'Delray Beach', state: 'FL', region: 'Florida Division' },
  { name: 'Stillwater', state: 'OK', region: 'Oklahoma Division' }
];

export default function InteractiveMap({ onNavigate }: InteractiveMapProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState<string | null>('Dallas');
  const [activeRegionFilter, setActiveRegionFilter] = useState<string>('All');

  const filteredCities = CITIES_LIST.filter((city) => {
    const matchesSearch = city.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = activeRegionFilter === 'All' || city.region === activeRegionFilter;
    return matchesSearch && matchesRegion;
  });

  const regions = ['All', 'North DFW', 'Mid DFW', 'East DFW', 'Ohio Division', 'Florida Division', 'Oklahoma Division'];

  const handleCitySelect = (name: string) => {
    setSelectedCity(name);
  };

  const activeCityDetails = CITIES_LIST.find((c) => c.name === selectedCity) || CITIES_LIST[4]; // Default to Dallas

  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden font-sans shadow-xl" id="interactive-map-widget">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left Interactive panel (5 cols) */}
        <div className="lg:col-span-5 p-6 md:p-8 bg-slate-50 border-r border-slate-100 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-blue-600">
              <Navigation className="w-4 h-4 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Active dispatch map</span>
            </div>
            
            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">Our Service Areas</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              New View Roofing serves the Greater Dallas/Fort Worth area with rapid-dispatch project managers. Enter your city below to confirm active GAF certified crew dispatch.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search your city (e.g. Plano, Frisco, Garland...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-xs text-slate-800 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-500 transition-all font-medium shadow-sm"
            />
          </div>

          {/* Regions tab filters */}
          <div className="flex flex-wrap gap-1.5">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setActiveRegionFilter(region)}
                className={`px-2.5 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeRegionFilter === region
                    ? 'bg-slate-900 text-white font-extrabold shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-100/50'
                }`}
              >
                {region === 'All' ? 'View All' : region}
              </button>
            ))}
          </div>

          {/* Scrollable list of cities */}
          <div className="h-44 overflow-y-auto custom-scroll space-y-1 border border-slate-200/60 rounded-xl p-2 bg-white shadow-inner">
            {filteredCities.length > 0 ? (
              filteredCities.map((city) => (
                <button
                  key={city.name}
                  onClick={() => handleCitySelect(city.name)}
                  className={`w-full flex justify-between items-center px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    selectedCity === city.name
                      ? 'bg-blue-500/10 text-blue-950 border border-blue-500/20'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <MapPin className={`w-3.5 h-3.5 ${selectedCity === city.name ? 'text-blue-600' : 'text-slate-400'}`} />
                    <span>{city.name}, {city.state}</span>
                  </span>
                  <span className="text-[9px] uppercase tracking-wider font-bold text-slate-400">
                    {city.region}
                  </span>
                </button>
              ))
            ) : (
              <p className="text-xs text-slate-400 text-center py-8">No servicing cities match search term.</p>
            )}
          </div>

        </div>

        {/* Right Graphic Panel (7 cols) */}
        <div className="lg:col-span-7 bg-slate-50/40 p-6 md:p-8 flex flex-col justify-between relative overflow-hidden min-h-[380px]">
          
          {/* Circular RADAR graphics representation - Blue colored sweeping lines */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
            {/* Concentric Rings */}
            <div className="w-80 h-80 rounded-full border border-slate-200 flex items-center justify-center">
              <div className="w-60 h-60 rounded-full border border-slate-150 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full border border-slate-200/60 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full border border-blue-500/10 bg-blue-500/5 animate-ping"></div>
                </div>
              </div>
            </div>
            {/* Visual sweeping line */}
            <div className="absolute w-1/2 h-[2px] bg-gradient-to-r from-transparent to-blue-500/10 origin-left rotate-45 animate-[spin_10s_linear_infinite]"></div>
          </div>

          {/* Active status bubble info */}
          <div className="relative z-10 self-start px-3.5 py-1.5 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-emerald-700 uppercase tracking-widest flex items-center space-x-1.5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>GAF Elite Crew Dispatch Available</span>
          </div>

          {/* Selected City Detail Display */}
          <div className="relative z-10 space-y-6 max-w-md pt-8">
            <div className="space-y-2">
              <span className="text-[10px] text-blue-600 font-extrabold uppercase tracking-widest">Active Coverage Location</span>
              <h4 className="text-3xl font-black text-slate-900 tracking-tight">
                {activeCityDetails.name}, {activeCityDetails.state}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                New View Roofing provides full-scale residential and commercial roofing services across <strong className="text-slate-950">{activeCityDetails.name}</strong> and surrounding neighborhoods. Our local estimators provide complete 17-point structural inspections with immediate reports.
              </p>
            </div>

            {/* Quick stats items */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3.5 bg-white rounded-xl border border-slate-200/60 space-y-1 shadow-sm">
                <span className="text-[9px] uppercase tracking-wider font-bold text-slate-400">Dispatch Time</span>
                <p className="text-xs text-slate-800 font-bold font-mono">Under 24 Hours</p>
              </div>
              <div className="p-3.5 bg-white rounded-xl border border-slate-200/60 space-y-1 shadow-sm">
                <span className="text-[9px] uppercase tracking-wider font-bold text-slate-400">Estimators Nearby</span>
                <p className="text-xs text-slate-800 font-bold font-mono">Local Crew Active</p>
              </div>
            </div>
          </div>

          {/* Direct CTA */}
          <div className="relative z-10 pt-4 flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => onNavigate('residential-inspection')}
              className="w-full sm:w-auto px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              Request Service in {activeCityDetails.name}
            </button>
            <p className="text-[10px] text-slate-500 font-semibold text-center sm:text-left">
              Contact us at <span className="text-slate-900 font-bold">(469) 716-5426</span> to schedule.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
