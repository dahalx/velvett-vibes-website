import React from 'react';
import { Mail, Clock, MapPin, Phone, MessageSquare, Send } from 'lucide-react';
import { ContactMessage } from '../types';

interface ContactViewProps {
  formData: ContactMessage;
  setFormData: (data: ContactMessage) => void;
  formSubmitted: boolean;
  setFormSubmitted: (sub: boolean) => void;
  formSelectedSlot: string;
  setFormSelectedSlot: (slot: string) => void;
  isWatchViewport: boolean;
  handleFormSubmit: (e: React.FormEvent) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({
  formData,
  setFormData,
  formSubmitted,
  setFormSubmitted,
  formSelectedSlot,
  setFormSelectedSlot,
  isWatchViewport,
  handleFormSubmit,
}) => {
  return (
    <div id="reactjs-view-contact" className="space-y-8 max-w-4xl mx-auto">
      
      <div className="text-center">
        <span className="font-mono text-xs text-brand-gold tracking-widest uppercase block mb-1">Secure Consulting</span>
        <h2 className={`font-serif text-3xl md:text-5xl font-semibold text-brand-cream ${isWatchViewport ? '!text-sm font-bold' : ''}`}>Connect with Velvett Vibes</h2>
      </div>

      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start ${isWatchViewport ? 'watch-grid !gap-2' : ''}`}>
        
        {/* Maps & Operating Hour Box */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-brand-card border border-brand-gold/15 p-5 rounded-xl">
            <h3 className="font-serif text-base font-bold text-brand-gold mb-3 uppercase tracking-wider">Studio Lounges</h3>
            <div className="text-xs space-y-3 text-brand-cream-dim font-light leading-snug">
              <p className="flex items-start gap-2">
                <MapPin size={14} className="text-brand-gold shrink-0 mt-0.5" />
                <span>Kathmandu Head Studio & Production Suite, Nepal</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-brand-gold shrink-0" />
                <span>+977 1-4XXXXXX (VVE Line)</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-brand-gold shrink-0" />
                <span className="truncate">info@velvettvibes.com</span>
              </p>
            </div>
          </div>

          <div className="bg-brand-card border border-brand-gold/15 p-5 rounded-xl">
            <h3 className="font-serif text-base font-bold text-brand-gold mb-3 uppercase tracking-wider">Lounge Hours</h3>
            <div className="text-xs space-y-2 text-brand-cream-dim font-light">
              <p className="flex justify-between">
                <span>Monday — Friday:</span> 
                <span className="text-brand-cream font-mono">10h00 - 18h00</span>
              </p>
              <p className="flex justify-between">
                <span>Saturday:</span> 
                <span className="text-brand-cream font-mono">11h00 - 16h00</span>
              </p>
              <p className="flex justify-between">
                <span>Sunday & Holidays:</span> 
                <span className="text-brand-wine font-semibold uppercase">CLOSED</span>
              </p>
            </div>
          </div>

          <div className="bg-brand-card border border-brand-gold/15 p-5 rounded-xl relative overflow-hidden">
            <h3 className="font-serif text-base font-bold text-brand-cream mb-2">Retro Sound Map</h3>
            <div className="relative w-full h-28 bg-brand-bg border border-brand-gold/20 rounded flex items-center justify-center">
              <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(#c4a47c 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>
              <div className="absolute w-full h-0.5 bg-brand-gold/10 top-1/2"></div>
              <div className="absolute h-full w-0.5 bg-brand-gold/10 left-1/2"></div>
              <span className="relative z-10 bg-brand-card px-2.5 py-1 rounded border border-brand-gold/40 text-[9px] font-mono uppercase tracking-wider text-brand-gold font-bold">VVE SUITE</span>
            </div>
          </div>
        </div>

        {/* Submission Form panel */}
        <div className="lg:col-span-8 bg-brand-card border border-brand-gold/20 p-6 md:p-8 rounded-2xl shadow-xl">
          
          {formSubmitted ? (
            <div 
              id="success-form-alert"
              className="text-center p-6 space-y-4 animate-fadeIn"
            >
              <div className="w-12 h-12 bg-green-950 border border-brand-gold/60 rounded-full flex items-center justify-center mx-auto text-brand-gold text-xl font-bold">✓</div>
              <h3 className="font-serif text-xl font-bold text-brand-cream">Acoustic Signal Connected</h3>
              <p className="text-xs text-brand-cream-dim leading-relaxed font-light">
                Thank you, <span className="text-brand-gold font-bold">{formData.name}</span>. We have queued your request.
                {formData.selectedPackage ? (
                  <span className="block mt-2 font-mono text-brand-gold">
                    Package Choice: {formData.selectedPackage}
                  </span>
                ) : null}
                <span className="block mt-2">
                  Preferred Consultation Slot: <strong className="text-brand-gold-bright">{formSelectedSlot || "ASAP Callback"}</strong>.
                </span>
                Our production coordinator based in Kathmandu will review files/reels and contact you in 24 hours.
              </p>
              <button 
                onClick={() => {
                  setFormSubmitted(false);
                  setFormData({ name: '', email: '', phone: '', subject: 'General Enquiry', message: '', selectedPackage: '' });
                  setFormSelectedSlot('');
                }}
                className="border border-brand-gold/40 hover:border-brand-gold text-brand-cream hover:text-brand-bg hover:bg-brand-gold font-serif text-xs px-5 py-2 rounded-full uppercase tracking-widest mt-6 transition cursor-pointer"
              >
                Send Another Signal
              </button>
            </div>
          ) : (
            <form id="react-consultation-form" onSubmit={handleFormSubmit} className="space-y-4">
              
              {formData.selectedPackage && (
                <div className="bg-brand-wine/15 border border-brand-gold/30 p-4 rounded-xl">
                  <span className="font-mono text-[9px] text-brand-gold-bright tracking-widest uppercase block font-bold">SELECTED VALUE PACKAGE</span>
                  <span className="font-serif text-base text-brand-cream font-semibold mt-0.5 block">{formData.selectedPackage}</span>
                  <p className="text-[10px] text-zinc-500 font-mono tracking-wide mt-1">* Note: Quote estimate has been cached with VVE lounge.</p>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-serif text-brand-cream mb-1 font-medium">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Subash Thapa"
                    className="w-full bg-brand-bg text-sm border border-brand-gold/25 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-lg px-3.5 py-2.5 outline-none text-brand-cream font-serif transition" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-serif text-brand-cream mb-1 font-medium">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="subash@nepalmail.com"
                    className="w-full bg-brand-bg text-sm border border-brand-gold/25 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-lg px-3.5 py-2.5 outline-none text-brand-cream font-sans transition" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-serif text-brand-cream mb-1 font-medium">Phone / WhatsApp</label>
                  <input 
                    type="text" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+977 98XXXXXXXX"
                    className="w-full bg-brand-bg text-sm border border-brand-gold/25 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-lg px-3.5 py-2.5 outline-none text-brand-cream font-mono transition" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-serif text-brand-cream mb-1 font-medium">Inquiry Type</label>
                  <select 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full bg-brand-bg text-sm border border-brand-gold/25 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-lg px-3.5 py-2.5 outline-none text-brand-cream font-serif transition cursor-pointer"
                  >
                    <option value="General Enquiry">General Video/Audio Inquiry</option>
                    <option value="Marriage Photography">Marriage Photoshoot Booking</option>
                    <option value="Pasni Service">Pasni Rice Feeding Video</option>
                    <option value="Bratabandha Service">Bratabandha Thread Ceremony</option>
                    <option value="Maternity Session">Maternity / Baby shoot</option>
                    <option value="Podcast Show Sponsorship">VVE Podcast sponsorship</option>
                  </select>
                </div>
              </div>

              {/* Consultation hour slots */}
              <div>
                <label className="block text-xs font-serif text-brand-cream mb-2 font-medium">Preferred Live Consultation Time Slot</label>
                <div className="grid grid-cols-3 gap-2">
                  {['Mon 11:00 AM', 'Wed 02:00 PM', 'Fri 04:00 PM'].map(slot => {
                    const isSelected = formSelectedSlot === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        id={`date-slot-${slot.replace(/\s+/g, '-')}`}
                        onClick={() => setFormSelectedSlot(slot)}
                        className={`border py-2 rounded-lg text-xs font-mono transition-all uppercase tracking-wider cursor-pointer ${
                          isSelected
                            ? 'bg-brand-gold text-brand-bg border-brand-gold font-bold shadow-md shadow-brand-gold/15'
                            : 'border-brand-gold/20 bg-brand-bg/60 text-brand-cream-dim hover:border-brand-gold hover:text-brand-cream'
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-serif text-brand-cream mb-1 font-medium">Detail your Creative Vision & Timelines</label>
                <textarea 
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about the location, traditions, target dates, or podcast ideas you want Velvett Vibes Entertainment to capture..."
                  className="w-full bg-brand-bg text-sm border border-brand-gold/25 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-xl px-3.5 py-2.5 outline-none text-brand-cream font-serif resize-none transition" 
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-brand-gold hover:bg-brand-gold-bright text-brand-bg py-4 px-6 rounded-xl font-serif font-black text-sm uppercase tracking-widest transition-all duration-300 transform active:scale-[0.98] shadow-lg shadow-brand-gold/10 cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Send size={14} className="fill-brand-bg" />
                <span>Contact Us</span>
              </button>
            </form>
          )}

        </div>

      </div>

    </div>
  );
};
