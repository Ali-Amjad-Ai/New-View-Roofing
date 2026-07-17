import React, { useState, useEffect } from 'react';
import {
  X,
  Type,
  AlignLeft,
  RotateCcw,
  Eye,
  Sliders,
  Image as ImageIcon,
  Activity,
  Link as LinkIcon,
  MousePointer,
  HelpCircle,
  Check,
  FileText,
  AlertCircle
} from 'lucide-react';

interface AccessibilityState {
  textSize: 'normal' | 'large' | 'extra-large';
  lineHeight: 'normal' | 'loose' | 'extra-loose';
  textAlign: 'normal' | 'left' | 'justify';
  readableFont: boolean;
  contrast: 'normal' | 'high' | 'inverted';
  grayscale: boolean;
  hideImages: boolean;
  pauseAnimations: boolean;
  highlightLinks: boolean;
  readingMask: boolean;
  outlineFocus: boolean;
}

const DEFAULT_STATE: AccessibilityState = {
  textSize: 'normal',
  lineHeight: 'normal',
  textAlign: 'normal',
  readableFont: false,
  contrast: 'normal',
  grayscale: false,
  hideImages: false,
  pauseAnimations: false,
  highlightLinks: false,
  readingMask: false,
  outlineFocus: false,
};

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState<AccessibilityState>(() => {
    try {
      const saved = localStorage.getItem('nv_accessibility_config');
      return saved ? JSON.parse(saved) : DEFAULT_STATE;
    } catch {
      return DEFAULT_STATE;
    }
  });

  const [mouseY, setMouseY] = useState(0);

  // Track mouse position for the reading mask
  useEffect(() => {
    if (!state.readingMask) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMouseY(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [state.readingMask]);

  // Save config to local storage and update document classes
  useEffect(() => {
    try {
      localStorage.setItem('nv_accessibility_config', JSON.stringify(state));
    } catch (e) {
      console.error('Failed to save accessibility state', e);
    }

    const html = document.documentElement;

    // Reset classes
    html.classList.remove(
      'acc-text-large',
      'acc-text-xl',
      'acc-line-loose',
      'acc-line-extra-loose',
      'acc-align-left',
      'acc-align-justify',
      'acc-readable-font',
      'acc-contrast-high',
      'acc-contrast-inverted',
      'acc-grayscale',
      'acc-hide-images',
      'acc-pause-animations',
      'acc-highlight-links',
      'acc-outline-focus'
    );

    // Apply active configurations
    if (state.textSize === 'large') html.classList.add('acc-text-large');
    if (state.textSize === 'extra-large') html.classList.add('acc-text-xl');

    if (state.lineHeight === 'loose') html.classList.add('acc-line-loose');
    if (state.lineHeight === 'extra-loose') html.classList.add('acc-line-extra-loose');

    if (state.textAlign === 'left') html.classList.add('acc-align-left');
    if (state.textAlign === 'justify') html.classList.add('acc-align-justify');

    if (state.readableFont) html.classList.add('acc-readable-font');

    if (state.contrast === 'high') html.classList.add('acc-contrast-high');
    if (state.contrast === 'inverted') html.classList.add('acc-contrast-inverted');

    if (state.grayscale) html.classList.add('acc-grayscale');
    if (state.hideImages) html.classList.add('acc-hide-images');
    if (state.pauseAnimations) html.classList.add('acc-pause-animations');
    if (state.highlightLinks) html.classList.add('acc-highlight-links');
    if (state.outlineFocus) html.classList.add('acc-outline-focus');

  }, [state]);

  const toggleFeature = <K extends keyof AccessibilityState>(key: K) => {
    setState((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSelect = <K extends keyof AccessibilityState>(key: K, value: AccessibilityState[K]) => {
    setState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const resetAll = () => {
    setState(DEFAULT_STATE);
  };

  return (
    <>
      {/* Floating Accessibility Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-tr from-blue-700 to-indigo-700 text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center border-2 border-white/40 cursor-pointer"
        aria-label="Toggle Accessibility Menu"
        id="accessibility-floating-trigger"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 animate-pulse"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
          <path d="M6 10h12" />
          <path d="m12 10-2 6" />
          <path d="m12 10 2 6" />
          <path d="M12 10v4" />
        </svg>
      </button>

      {/* Accessibility Panel Overlay */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-32px)] bg-white/95 backdrop-blur-xl border border-slate-200/80 rounded-2xl shadow-2xl overflow-hidden font-sans animate-fadeIn"
          id="accessibility-control-panel"
        >
          {/* Header Banner */}
          <div className="bg-slate-900 text-white p-4.5 flex justify-between items-center border-b border-slate-800">
            <div className="flex items-center space-x-2.5">
              <div className="p-1.5 bg-blue-600 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="w-4 h-4 text-white"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                  <path d="M6 10h12" />
                  <path d="m12 10-2 6" />
                  <path d="m12 10 2 6" />
                  <path d="M12 10v4" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-black tracking-tight">Accessibility Controls</h4>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Dynamic Inclusivity Toolbar</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={resetAll}
                className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer"
                title="Reset Accessibility Controls"
                id="acc-reset-btn"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
                id="acc-close-btn"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Notice */}
          <div className="bg-blue-50/50 border-b border-blue-100 p-3 text-[10px] text-slate-600 font-medium flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Adjust settings below to personalize your visual & reading experience.</span>
          </div>

          {/* Options Body Scroll area */}
          <div className="p-5 max-h-[460px] overflow-y-auto custom-scroll space-y-6">
            
            {/* Category: Text adjustments */}
            <div className="space-y-3.5">
              <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-1 flex items-center space-x-1.5">
                <Type className="w-3.5 h-3.5 text-blue-600" />
                <span>Text Settings</span>
              </h5>
              
              <div className="grid grid-cols-2 gap-3">
                {/* Bigger Text */}
                <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-3 space-y-2.5">
                  <span className="text-[10px] font-bold text-slate-500 block uppercase tracking-wider">Bigger Text</span>
                  <div className="flex bg-white border border-slate-200/80 rounded-lg p-0.5">
                    {(['normal', 'large', 'extra-large'] as const).map((sz) => (
                      <button
                        key={sz}
                        onClick={() => handleSelect('textSize', sz)}
                        className={`flex-1 py-1 text-[9px] font-bold rounded-md uppercase transition-all cursor-pointer ${
                          state.textSize === sz
                            ? 'bg-slate-900 text-white shadow-sm'
                            : 'text-slate-500 hover:text-slate-900'
                        }`}
                      >
                        {sz === 'normal' ? '1x' : sz === 'large' ? '1.2x' : '1.4x'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Line Height */}
                <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-3 space-y-2.5">
                  <span className="text-[10px] font-bold text-slate-500 block uppercase tracking-wider">Line Height</span>
                  <div className="flex bg-white border border-slate-200/80 rounded-lg p-0.5">
                    {(['normal', 'loose', 'extra-loose'] as const).map((lh) => (
                      <button
                        key={lh}
                        onClick={() => handleSelect('lineHeight', lh)}
                        className={`flex-1 py-1 text-[9px] font-bold rounded-md uppercase transition-all cursor-pointer ${
                          state.lineHeight === lh
                            ? 'bg-slate-900 text-white shadow-sm'
                            : 'text-slate-500 hover:text-slate-900'
                        }`}
                      >
                        {lh === 'normal' ? 'Std' : lh === 'loose' ? '1.5x' : '2x'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Text Alignment */}
                <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-3 space-y-2.5">
                  <span className="text-[10px] font-bold text-slate-500 block uppercase tracking-wider">Text Align</span>
                  <div className="flex bg-white border border-slate-200/80 rounded-lg p-0.5">
                    {(['normal', 'left', 'justify'] as const).map((al) => (
                      <button
                        key={al}
                        onClick={() => handleSelect('textAlign', al)}
                        className={`flex-1 py-1 text-[9px] font-bold rounded-md uppercase transition-all cursor-pointer ${
                          state.textAlign === al
                            ? 'bg-slate-900 text-white shadow-sm'
                            : 'text-slate-500 hover:text-slate-900'
                        }`}
                      >
                        {al === 'normal' ? 'Auto' : al === 'left' ? 'Left' : 'Just'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Readable Font Toggle */}
                <button
                  onClick={() => toggleFeature('readableFont')}
                  className={`flex flex-col justify-between items-start text-left p-3 border rounded-xl transition-all cursor-pointer ${
                    state.readableFont
                      ? 'bg-blue-50/70 border-blue-500 text-blue-950'
                      : 'bg-slate-50 border-slate-200/60 text-slate-700 hover:bg-slate-100/50'
                  }`}
                  id="acc-font-toggle"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Dyslexia-Legible</span>
                  <div className="flex items-center justify-between w-full mt-2">
                    <span className="text-xs font-bold font-sans">Readable Font</span>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      state.readableFont ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300'
                    }`}>
                      {state.readableFont && <Check className="w-2.5 h-2.5" />}
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Category: Visual adjustments */}
            <div className="space-y-3.5">
              <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-1 flex items-center space-x-1.5">
                <Eye className="w-3.5 h-3.5 text-blue-600" />
                <span>Visual Preferences</span>
              </h5>

              <div className="grid grid-cols-2 gap-3">
                {/* Contrast Toggle */}
                <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-3 space-y-2.5 col-span-2">
                  <span className="text-[10px] font-bold text-slate-500 block uppercase tracking-wider">Color Contrast Theme</span>
                  <div className="grid grid-cols-3 gap-1.5 bg-white border border-slate-200/80 rounded-lg p-0.5">
                    {(['normal', 'high', 'inverted'] as const).map((con) => (
                      <button
                        key={con}
                        onClick={() => handleSelect('contrast', con)}
                        className={`py-1.5 text-[9px] font-bold rounded-md uppercase transition-all cursor-pointer ${
                          state.contrast === con
                            ? 'bg-slate-900 text-white shadow-sm'
                            : 'text-slate-500 hover:text-slate-900'
                        }`}
                      >
                        {con === 'normal' ? 'Standard' : con === 'high' ? 'High Contrast' : 'Inverted'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Grayscale Toggle */}
                <button
                  onClick={() => toggleFeature('grayscale')}
                  className={`flex flex-col justify-between items-start text-left p-3 border rounded-xl transition-all cursor-pointer ${
                    state.grayscale
                      ? 'bg-blue-50/70 border-blue-500 text-blue-950'
                      : 'bg-slate-50 border-slate-200/60 text-slate-700 hover:bg-slate-100/50'
                  }`}
                  id="acc-grayscale-toggle"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Monochrome</span>
                  <div className="flex items-center justify-between w-full mt-2">
                    <span className="text-xs font-bold font-sans">Grayscale</span>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      state.grayscale ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300'
                    }`}>
                      {state.grayscale && <Check className="w-2.5 h-2.5" />}
                    </div>
                  </div>
                </button>

                {/* Hide Images */}
                <button
                  onClick={() => toggleFeature('hideImages')}
                  className={`flex flex-col justify-between items-start text-left p-3 border rounded-xl transition-all cursor-pointer ${
                    state.hideImages
                      ? 'bg-blue-50/70 border-blue-500 text-blue-950'
                      : 'bg-slate-50 border-slate-200/60 text-slate-700 hover:bg-slate-100/50'
                  }`}
                  id="acc-hide-images-toggle"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Conceal Noise</span>
                  <div className="flex items-center justify-between w-full mt-2">
                    <span className="text-xs font-bold font-sans">Hide Images</span>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      state.hideImages ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300'
                    }`}>
                      {state.hideImages && <Check className="w-2.5 h-2.5" />}
                    </div>
                  </div>
                </button>

                {/* Pause Animations */}
                <button
                  onClick={() => toggleFeature('pauseAnimations')}
                  className={`flex flex-col justify-between items-start text-left p-3 border rounded-xl transition-all cursor-pointer ${
                    state.pauseAnimations
                      ? 'bg-blue-50/70 border-blue-500 text-blue-950'
                      : 'bg-slate-50 border-slate-200/60 text-slate-700 hover:bg-slate-100/50'
                  }`}
                  id="acc-pause-anim-toggle"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Stop Motion</span>
                  <div className="flex items-center justify-between w-full mt-2">
                    <span className="text-xs font-bold font-sans">Pause Motion</span>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      state.pauseAnimations ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300'
                    }`}>
                      {state.pauseAnimations && <Check className="w-2.5 h-2.5" />}
                    </div>
                  </div>
                </button>

                {/* Highlight Links */}
                <button
                  onClick={() => toggleFeature('highlightLinks')}
                  className={`flex flex-col justify-between items-start text-left p-3 border rounded-xl transition-all cursor-pointer ${
                    state.highlightLinks
                      ? 'bg-blue-50/70 border-blue-500 text-blue-950'
                      : 'bg-slate-50 border-slate-200/60 text-slate-700 hover:bg-slate-100/50'
                  }`}
                  id="acc-links-toggle"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Anchor Outline</span>
                  <div className="flex items-center justify-between w-full mt-2">
                    <span className="text-xs font-bold font-sans">Highlight Links</span>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      state.highlightLinks ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300'
                    }`}>
                      {state.highlightLinks && <Check className="w-2.5 h-2.5" />}
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Category: Navigation & Orientation Helpers */}
            <div className="space-y-3.5">
              <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-1 flex items-center space-x-1.5">
                <Sliders className="w-3.5 h-3.5 text-blue-600" />
                <span>Reading & Focus Assist</span>
              </h5>

              <div className="grid grid-cols-2 gap-3">
                {/* Reading Mask */}
                <button
                  onClick={() => toggleFeature('readingMask')}
                  className={`flex flex-col justify-between items-start text-left p-3 border rounded-xl transition-all cursor-pointer ${
                    state.readingMask
                      ? 'bg-blue-50/70 border-blue-500 text-blue-950'
                      : 'bg-slate-50 border-slate-200/60 text-slate-700 hover:bg-slate-100/50'
                  }`}
                  id="acc-mask-toggle"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Horizontal Focus</span>
                  <div className="flex items-center justify-between w-full mt-2">
                    <span className="text-xs font-bold font-sans">Reading Mask</span>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      state.readingMask ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300'
                    }`}>
                      {state.readingMask && <Check className="w-2.5 h-2.5" />}
                    </div>
                  </div>
                </button>

                {/* Outline Focus */}
                <button
                  onClick={() => toggleFeature('outlineFocus')}
                  className={`flex flex-col justify-between items-start text-left p-3 border rounded-xl transition-all cursor-pointer ${
                    state.outlineFocus
                      ? 'bg-blue-50/70 border-blue-500 text-blue-950'
                      : 'bg-slate-50 border-slate-200/60 text-slate-700 hover:bg-slate-100/50'
                  }`}
                  id="acc-focus-toggle"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Visual Tabs Outline</span>
                  <div className="flex items-center justify-between w-full mt-2">
                    <span className="text-xs font-bold font-sans">Outline Focus</span>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      state.outlineFocus ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300'
                    }`}>
                      {state.outlineFocus && <Check className="w-2.5 h-2.5" />}
                    </div>
                  </div>
                </button>
              </div>
            </div>

          </div>

          {/* Footer Branding of the Widget */}
          <div className="p-3.5 bg-slate-50 border-t border-slate-200/80 flex justify-between items-center text-[10px] text-slate-400 font-bold">
            <span className="uppercase tracking-widest flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 text-blue-600 mr-1 shrink-0">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                <path d="M6 10h12" />
                <path d="m12 10-2 6" />
                <path d="m12 10 2 6" />
                <path d="M12 10v4" />
              </svg>
              Ally Inclusion Suite
            </span>
            <span className="font-sans font-normal text-slate-500">Powered by New View Roofing</span>
          </div>
        </div>
      )}

      {/* Reading Mask Overlay Line Element */}
      {state.readingMask && (
        <div
          className="fixed left-0 right-0 h-10 bg-slate-900/15 border-y-2 border-dashed border-blue-500 pointer-events-none z-[9999] transition-transform duration-75 mix-blend-multiply"
          style={{
            top: 0,
            transform: `translateY(${mouseY - 20}px)`,
          }}
          id="accessibility-reading-mask-band"
        />
      )}
    </>
  );
}
