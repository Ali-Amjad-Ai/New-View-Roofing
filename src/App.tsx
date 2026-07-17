import React, { useState, useEffect } from 'react';
import { PageId, PageContent } from './types';
import { PAGES_CONTENT } from './data/pagesContent';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainHero from './components/MainHero';
import InteractiveMap from './components/InteractiveMap';
import InspectionForm from './components/InspectionForm';
import {
  Shield,
  Award,
  Users,
  CheckCircle,
  Phone,
  MapPin,
  Clock,
  Briefcase,
  AlertTriangle,
  HelpCircle,
  FileText,
  Star,
  DollarSign,
  ArrowRight,
  BookOpen,
  ChevronRight,
  Home
} from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Automatically scroll to top on page transition
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (pageId: PageId) => {
    setCurrentPage(pageId);
  };

  const pageData = PAGES_CONTENT[currentPage];

  // Render subpage contents dynamically based on selected page ID
  const renderPageContent = () => {
    if (!pageData) {
      return (
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-24 text-center space-y-4">
          <AlertTriangle className="w-12 h-12 text-amber-600 mx-auto animate-bounce" />
          <h2 className="text-2xl font-extrabold text-slate-900">Page under construction</h2>
          <p className="text-slate-500 max-w-sm mx-auto text-xs leading-relaxed">
            We are currently updating our certification and coverage databases for this section. Please check back shortly or call our Dallas office.
          </p>
          <button
            onClick={() => handleNavigate('home')}
            className="px-5 py-2.5 bg-slate-900 text-white font-bold rounded-lg text-xs uppercase tracking-wider cursor-pointer shadow-md hover:bg-slate-800 transition-colors"
          >
            Return to Homepage
          </button>
        </div>
      );
    }

    // Standard high-fidelity layout for all sub-pages
    return (
      <div className="bg-slate-50/50 min-h-screen text-slate-700 animate-fadeIn" id="subpage-container">
        {/* Dynamic Header Section */}
        <div className="relative bg-[#0a0e1a] border-b border-slate-950 py-20 md:py-24 overflow-hidden">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-25 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 space-y-4">
            {/* Breadcrumb path */}
            <div className="flex items-center space-x-2 text-xs font-semibold text-slate-400">
              <button onClick={() => handleNavigate('home')} className="hover:text-amber-400 transition-colors cursor-pointer">
                Home
              </button>
              <ChevronRight className="w-3 h-3 text-slate-600" />
              <span className="text-amber-400 capitalize">{currentPage.split('-')[0]}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight max-w-4xl">
              {pageData.title}
            </h1>
            <p className="text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed">
              {pageData.subtitle}
            </p>
          </div>
        </div>

        {/* Core Layout Split */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Main Rich text body column (7 cols) */}
            <div className="lg:col-span-7 space-y-10" id="subpage-body-content">
              {pageData.sections.map((sec, i) => (
                <div key={i} className="space-y-6">
                  <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight border-b border-slate-200/80 pb-3">
                    {sec.title}
                  </h2>
                  
                  {Array.isArray(sec.content) ? (
                    <div className="space-y-4">
                      {sec.content.map((para, pi) => (
                        <p key={pi} className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
                          {para}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
                      {sec.content}
                    </p>
                  )}

                  {/* Elegant Bullets */}
                  {sec.bullets && sec.bullets.length > 0 && (
                    <div className="grid grid-cols-1 gap-3.5 bg-white p-6 rounded-xl border border-slate-200/60 mt-4 shadow-sm">
                      {sec.bullets.map((bullet, bi) => (
                        <div key={bi} className="flex items-start space-x-3 text-xs text-slate-600 font-medium">
                          <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Action helper banner */}
              <div className="p-6 bg-amber-50/50 rounded-xl border border-amber-200/60 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-900">Have questions about GAF manufacturer coverage?</h4>
                  <p className="text-xs text-slate-500 font-medium">Speak directly to a veteran-certified specialist in Dallas.</p>
                </div>
                <button
                  onClick={() => handleNavigate('contact')}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all cursor-pointer font-sans"
                >
                  Contact Specialist
                </button>
              </div>
            </div>

            {/* Sidebar high-conversion column (5 cols) */}
            <div className="lg:col-span-5 space-y-8" id="subpage-sidebar">
              <div className="sticky top-28 space-y-8">
                {/* Embedded quick form */}
                <InspectionForm compact />

                {/* Local Credibility Badge Card */}
                <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-4 shadow-md">
                  <div className="flex items-center space-x-2 text-amber-600">
                    <Award className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">GAF Certified Standard</span>
                  </div>
                  <h4 className="text-sm font-extrabold text-slate-900">Why Dallas Trusts New View Roofing:</h4>
                  <ul className="space-y-3.5 text-xs text-slate-500 font-medium">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>Certified GAF Master Elite® Installer</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>Proudly Veteran-Owned & Locally Managed</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>Fully Insured & Multi-Million Dollar Covered</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>A+ Better Business Bureau rating</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 flex flex-col justify-between selection:bg-amber-500 selection:text-slate-900" id="main-app-container">
      {/* Universal Sticky Navigation */}
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />

      {/* Main Content Area */}
      <main className="grow">
        {currentPage === 'home' ? (
          <>
            {/* Elite visual Hero */}
            <MainHero onNavigate={handleNavigate} />

            {/* Section 1: Welcome / Why Choose Us */}
            <section className="py-24 bg-white border-b border-slate-100" id="home-welcome">
              <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                  <div className="lg:col-span-7 space-y-6">
                    <div className="inline-flex items-center space-x-1.5 text-amber-600">
                      <Shield className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider">Durable Texas Craftsmanship</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                      A Veteran-Owned, Family-Operated Dallas Roofing Contractor
                    </h2>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
                      New View Roofing is a locally-owned and -operated business that offers a customer-focused team with over 25 years of roofing and home remodeling experience. We provide full-scale residential, commercial and industrial roofing services throughout the North Dallas-Fort Worth Metroplex.
                    </p>
                    <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
                      We strive to operate far beyond the normal expectations of what a roofing contractor provides. New View Roofing stands out with hassle-free services, a strong knowledge base, elevated business standards and exceptional customer care. What does that mean for you? It means we offer great customer service, we stand behind our work, we do what we say we are going to do, and we show up to appointments on time!
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                      {[
                        'Over 25+ Years Experience',
                        'Top 3% GAF Master Elite® Certified',
                        'A+ Better Business Bureau Rating',
                        'Fully Bonded and Insured'
                      ].map((item, i) => (
                        <div key={i} className="flex items-center space-x-2 text-xs text-slate-700 font-semibold">
                          <CheckCircle className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-5">
                    {/* Visual Highlights Bento Box */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 md:p-8 space-y-6 shadow-md relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none"></div>
                      <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">Proud Values, Absolute Quality</h3>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        We maintain proud American military values of fairness, accountability, quality, and community service on every project.
                      </p>
                      <div className="space-y-4 border-t border-slate-200/60 pt-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-amber-600 flex items-center justify-center font-extrabold text-xs shrink-0 shadow-sm">
                            F
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-slate-900">Fairness First</h4>
                            <p className="text-[11px] text-slate-500 mt-0.5">We design win-win solutions matching direct insurance scopes honestly.</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-amber-600 flex items-center justify-center font-extrabold text-xs shrink-0 shadow-sm">
                            A
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-slate-900">Accountability</h4>
                            <p className="text-[11px] text-slate-500 mt-0.5">We stand behind all workmanship, backplates, and warranty registries.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Residential & Commercial Services Grid */}
            <section className="py-24 bg-slate-50" id="home-services">
              <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12">
                <div className="text-center max-w-3xl mx-auto space-y-4">
                  <span className="text-[10px] text-amber-600 font-bold uppercase tracking-widest block">Elite service options</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Our Professional Exterior Services</h2>
                  <p className="text-xs md:text-sm text-slate-500 font-semibold">
                    From premium residential architectural shingles to durable commercial TPO coatings, we provide lifetime protection.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Service Card 1 */}
                  <div className="p-6 bg-white border border-slate-200/80 hover:border-amber-500/50 rounded-2xl space-y-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="w-10 h-10 bg-amber-50 border border-amber-200/60 text-amber-600 rounded-lg flex items-center justify-center">
                        <Home className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-amber-700 transition-colors">Residential Roofing</h3>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        Complete roof replacement, regular shingle repairs, attic ventilation improvements, and high-performance custom architectural systems.
                      </p>
                    </div>
                    <button
                      onClick={() => handleNavigate('residential-replacement')}
                      className="text-xs font-bold text-slate-950 group-hover:text-amber-700 flex items-center space-x-1.5 pt-4 transition-colors cursor-pointer text-left"
                    >
                      <span>Explore Options</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Service Card 2 */}
                  <div className="p-6 bg-white border border-slate-200/80 hover:border-amber-500/50 rounded-2xl space-y-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="w-10 h-10 bg-amber-50 border border-amber-200/60 text-amber-600 rounded-lg flex items-center justify-center">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-amber-700 transition-colors">Commercial Roofing</h3>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        Durable low-slope TPO, high-reflectivity PVC vinyl membranes, long-lasting EPDM rubber, and fluid-applied silicone coating restorations.
                      </p>
                    </div>
                    <button
                      onClick={() => handleNavigate('commercial-tpo')}
                      className="text-xs font-bold text-slate-950 group-hover:text-amber-700 flex items-center space-x-1.5 pt-4 transition-colors cursor-pointer text-left"
                    >
                      <span>Explore Options</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Service Card 3 */}
                  <div className="p-6 bg-white border border-slate-200/80 hover:border-amber-500/50 rounded-2xl space-y-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="w-10 h-10 bg-amber-50 border border-amber-200/60 text-amber-600 rounded-lg flex items-center justify-center">
                        <AlertTriangle className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-amber-700 transition-colors">Storm Damage Claims</h3>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        Comprehensive physical inspection, chalk-maps of hail bruising, and expert adjuster collaboration to maximize your home insurance scope.
                      </p>
                    </div>
                    <button
                      onClick={() => handleNavigate('resource-insurance')}
                      className="text-xs font-bold text-slate-950 group-hover:text-amber-700 flex items-center space-x-1.5 pt-4 transition-colors cursor-pointer text-left"
                    >
                      <span>Explore Options</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Interactive Location Search */}
            <section className="py-24 bg-white border-b border-slate-100" id="home-locations">
              <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12">
                <div className="text-center max-w-2xl mx-auto space-y-4">
                  <span className="text-[10px] text-amber-600 font-bold uppercase tracking-widest block">Texas served cities</span>
                  <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Serving the Entire Metroplex</h2>
                  <p className="text-xs text-slate-500 font-semibold">
                    Find your local division to see nearby certified crews and check instant dispatch.
                  </p>
                </div>
                <InteractiveMap onNavigate={handleNavigate} />
              </div>
            </section>

            {/* Section 4: Premium Testimonial Bento Grid */}
            <section className="py-24 bg-slate-50/50" id="home-testimonials">
              <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12">
                <div className="text-center max-w-2xl mx-auto space-y-4">
                  <span className="text-[10px] text-amber-600 font-bold uppercase tracking-widest block">Real Client Feedback</span>
                  <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">DFW Property Owners Say</h2>
                  <p className="text-xs text-slate-500 font-semibold">
                    Over 650+ verified local reviews with an average 4.9 rating.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Review 1 */}
                  <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex text-amber-500 space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-semibold italic">
                      "I would highly recommend New View Roofing, especially Scott Berlin and his team, for any roofing needs. From start to finish, they were professional, efficient, and extremely knowledgeable. Excellent work!"
                    </p>
                    <div className="border-t border-slate-100 pt-3 flex justify-between items-center text-xs">
                      <span className="font-bold text-slate-900">Mir A.</span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase">Google Review</span>
                    </div>
                  </div>

                  {/* Review 2 */}
                  <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex text-amber-500 space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-semibold italic">
                      "The entire crew was on time, considerate of children living in the house, and polite. They covered the pool while working and cleaned up so well that no nails were left. Highly recommend!"
                    </p>
                    <div className="border-t border-slate-100 pt-3 flex justify-between items-center text-xs">
                      <span className="font-bold text-slate-900">Nicole B.</span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase">Google Review</span>
                    </div>
                  </div>

                  {/* Review 3 */}
                  <div className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex text-amber-500 space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-semibold italic">
                      "Veteran-owned business that holds true to their promise. Showed up on time, gave a transparent estimate, and worked directly with my insurance adjuster. Flawless roof replacement!"
                    </p>
                    <div className="border-t border-slate-100 pt-3 flex justify-between items-center text-xs">
                      <span className="font-bold text-slate-900">David K.</span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase">Google Review</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          renderPageContent()
        )}
      </main>

      {/* Universal Sticky Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
