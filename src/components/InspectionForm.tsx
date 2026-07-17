import React, { useState } from 'react';
import { CheckCircle, AlertTriangle, Send, Calendar, Clock, Sparkles } from 'lucide-react';

interface InspectionFormProps {
  compact?: boolean;
}

export default function InspectionForm({ compact = false }: InspectionFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    serviceType: 'residential',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zip: '',
        serviceType: 'residential',
        message: ''
      });
    }, 1200);
  };

  if (status === 'success') {
    return (
      <div className="bg-white border border-slate-100 rounded-2xl p-8 text-center space-y-6 shadow-2xl animate-fadeIn" id="inspection-success-widget">
        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600 border border-emerald-100">
          <CheckCircle className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-slate-900 tracking-tight">Inspection Request Confirmed!</h3>
          <p className="text-xs text-slate-500 leading-relaxed max-w-sm mx-auto">
            Thank you. A certified GAF project manager from New View Roofing will contact you at your phone number within 24 hours to schedule your physical diagnostic checkup.
          </p>
        </div>
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs font-semibold space-y-2 text-slate-700 max-w-sm mx-auto">
          <div className="flex justify-between">
            <span>Guaranteed Callback:</span>
            <span className="text-amber-600 font-bold font-mono">Under 24 Hours</span>
          </div>
          <div className="flex justify-between">
            <span>Est. Inspection Duration:</span>
            <span className="text-slate-500">30-45 Minutes</span>
          </div>
        </div>
        <button
          onClick={() => setStatus('idle')}
          className="text-xs font-bold text-amber-600 hover:text-amber-700 transition-colors uppercase tracking-wider cursor-pointer"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div
      className={`bg-white border border-slate-200/80 shadow-2xl rounded-2xl overflow-hidden font-sans ${
        compact ? 'max-w-md mx-auto' : 'w-full'
      }`}
      id="inspection-request-form"
    >
      {/* Top Banner Accent */}
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-4.5 flex justify-between items-center">
        <div>
          <h3 className="text-slate-950 font-black text-sm uppercase tracking-wider">Free Roof Inspection</h3>
          <p className="text-slate-950 font-bold text-[10px] uppercase tracking-wide opacity-90 flex items-center mt-0.5">
            <Clock className="w-3.5 h-3.5 mr-1" /> Guaranteed contact within 24 hours
          </p>
        </div>
        <Sparkles className="w-5 h-5 text-slate-950 shrink-0 animate-pulse" />
      </div>

      <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-4">
        {status === 'error' && (
          <div className="p-3.5 bg-red-50 border border-red-100 text-red-600 rounded-lg text-xs font-semibold flex items-center space-x-2">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>Please complete all required fields (*): Name, Email, and Phone number.</span>
          </div>
        )}

        {/* Inputs Group 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Full Name *</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              placeholder="John Doe"
              className="w-full bg-slate-50/50 border border-slate-200 focus:bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-lg px-4 py-2.5 text-xs font-medium text-slate-900 transition-all outline-none"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Email Address *</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="john@example.com"
              className="w-full bg-slate-50/50 border border-slate-200 focus:bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-lg px-4 py-2.5 text-xs font-medium text-slate-900 transition-all outline-none"
            />
          </div>
        </div>

        {/* Inputs Group 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="(469) 555-0199"
              className="w-full bg-slate-50/50 border border-slate-200 focus:bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-lg px-4 py-2.5 text-xs font-medium text-slate-900 transition-all outline-none"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Property Type</label>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleInputChange}
              className="w-full bg-slate-50/50 border border-slate-200 focus:bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-lg px-4 py-2.5 text-xs font-semibold text-slate-700 transition-all outline-none"
            >
              <option value="residential">Residential Home Roofing</option>
              <option value="commercial">Commercial / Industrial Property</option>
              <option value="storm-damage">Storm Damage Hail / Wind Audit</option>
              <option value="other">Gutters, Siding or Fencing</option>
            </select>
          </div>
        </div>

        {/* Inputs Group 3 */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Property Street Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="123 Texas Trail"
            className="w-full bg-slate-50/50 border border-slate-200 focus:bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-lg px-4 py-2.5 text-xs font-medium text-slate-900 transition-all outline-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="Dallas"
              className="w-full bg-slate-50/50 border border-slate-200 focus:bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-lg px-4 py-2.5 text-xs font-medium text-slate-900 transition-all outline-none"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Zip Code</label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleInputChange}
              placeholder="75201"
              className="w-full bg-slate-50/50 border border-slate-200 focus:bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-lg px-4 py-2.5 text-xs font-medium text-slate-900 transition-all outline-none"
            />
          </div>
        </div>

        {/* Message Area */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">How Can We Help?</label>
          <textarea
            name="message"
            rows={2}
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Describe your current issue (e.g. active roof leak, storm damage estimate needed...)"
            className="w-full bg-slate-50/50 border border-slate-200 focus:bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-lg px-4 py-2.5 text-xs font-medium text-slate-900 transition-all outline-none resize-none"
          ></textarea>
        </div>

        {/* Submit Action Button */}
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-slate-900 hover:bg-slate-800 disabled:bg-slate-200 text-white font-extrabold text-xs uppercase tracking-wider py-3.5 px-6 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 active:scale-98 cursor-pointer"
        >
          {status === 'submitting' ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Securing Dispatch...</span>
            </>
          ) : (
            <>
              <Send className="w-3.5 h-3.5" />
              <span>Request My Free Inspection!</span>
            </>
          )}
        </button>

        <p className="text-[10px] text-slate-400 font-medium text-center">
          By clicking above, you agree to our terms of service. Your information is protected & never distributed.
        </p>
      </form>
    </div>
  );
}
