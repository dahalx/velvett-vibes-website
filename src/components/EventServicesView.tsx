import React, { useState, useEffect } from 'react';
import { Camera, Film, Sparkles, BookOpen, Clock, Hammer, DollarSign, CalendarCheck } from 'lucide-react';
import { SERVICE_PACKAGES } from '../data';

interface EventServicesViewProps {
  isWatchViewport: boolean;
  onNavigateToContact: (selectedPackageTitle: string, estimatedQuote: number) => void;
}

export const EventServicesView: React.FC<EventServicesViewProps> = ({
  isWatchViewport,
  onNavigateToContact,
}) => {
  const [activeTab, setActiveTab] = useState<'photography' | 'videography'>('photography');
  
  // Dynamic Pricing Estimator States
  const [selectedEventId, setSelectedEventId] = useState<string>('marriage');
  const [captureMode, setCaptureMode] = useState<'both' | 'photo' | 'video'>('both');
  const [durationHours, setDurationHours] = useState<number>(4);
  const [addonAlbum, setAddonAlbum] = useState<boolean>(true);
  const [addonDrone, setAddonDrone] = useState<boolean>(false);
  const [addonKeepsake, setAddonKeepsake] = useState<boolean>(true);
  const [totalQuote, setTotalQuote] = useState<number>(1800);

  // Event Base Cost Map (Specific traditional Nepalese event configurations)
  const eventBaseCosts: Record<string, { title: string; basePrice: number; description: string }> = {
    marriage: { 
      title: 'Traditional Wedding Festivities (Marriage)', 
      basePrice: 1500, 
      description: 'Comprehensive multicamera coverage of Janti, Swayamvar, Mehendi, and Grand Recessional Reception rituals.'
    },
    pasni: { 
      title: 'Pasni Ceremony (Weaning / Rice Feeding)', 
      basePrice: 600, 
      description: 'Capturing elder blessings and first solid foods in a warm, family, and child-safe continuous style.' 
    },
    bratabandha: { 
      title: 'Bratabandha Ceremony (Holy Thread Passage)', 
      basePrice: 650, 
      description: 'Highlighting sacred hair shaving, saffron robes, traditional holy gear, and the formal ritual passage.' 
    },
    sweet16: { 
      title: 'Sweet 16 & Vibrant Birthdays', 
      basePrice: 500, 
      description: 'Upbeat visual aesthetics, teen birthday decorations, dance stage coverage, and fun guest group photos.' 
    },
    maternity: { 
      title: 'Maternity Lens Sessions', 
      basePrice: 400, 
      description: 'Capturing glowing mothers in premium lounge lighting sets or natural local parks.' 
    },
    baby: { 
      title: 'Baby & Newborn Portraitures', 
      basePrice: 350, 
      description: 'Eye-safe lighting, gentle poses, sweet accessories, and cozy warmth for infants.' 
    }
  };

  // Perform quotation update based on input configurations
  useEffect(() => {
    const selectedEvent = eventBaseCosts[selectedEventId] || eventBaseCosts.marriage;
    let price = selectedEvent.basePrice;

    // Apply multiplier based on Capture Mode
    if (captureMode === 'both') {
      price = price * 1.6; // 1.6x for both Photo and Video (saves 40% vs separate)
    } else if (captureMode === 'video') {
      price = price * 1.05; // Videography only is slightly premium due to editor render power
    } else {
      price = price * 0.95; // Photography only is slightly cheaper
    }

    // Add hours above 2 (adds $100 per hour of coverage)
    if (durationHours > 2) {
      price += (durationHours - 2) * 100;
    }

    // Addons
    if (addonAlbum) price += 250;
    if (addonDrone) price += 150;
    if (addonKeepsake) price += 100;

    setTotalQuote(Math.round(price));
  }, [selectedEventId, captureMode, durationHours, addonAlbum, addonDrone, addonKeepsake]);

  const handleApplyPreset = (eventId: string, mode: 'both' | 'photo' | 'video') => {
    setSelectedEventId(eventId);
    setCaptureMode(mode);
    setDurationHours(eventId === 'marriage' ? 8 : 4);
    // Scroll down to estimate container
    document.getElementById('estimator-pricingbox-container')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="reactjs-view-services" className="space-y-12">
      
      {/* Title Header */}
      <div>
        <span className="font-mono text-xs text-brand-gold tracking-widest uppercase block mb-1">Traditional Lens Care</span>
        <h2 className={`font-serif text-3xl md:text-5xl font-medium text-brand-cream ${isWatchViewport ? '!text-sm font-bold' : ''}`}>
          Event Services
        </h2>
        <p className="text-sm font-light text-brand-cream-dim mt-1 max-w-2xl">
          Highly specialized videography and photography services for traditional Nepalese milestone events. Preserving familial blessings with state-of-the-art camera systems and deep acoustic styling.
        </p>
      </div>

      {/* Services Tabs Selector */}
      {!isWatchViewport && (
        <div className="flex gap-4 border-b border-brand-gold/15 pb-4">
          <button
            onClick={() => setActiveTab('photography')}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-serif tracking-wide transition cursor-pointer ${
              activeTab === 'photography'
                ? 'bg-brand-gold text-brand-bg font-bold shadow-md shadow-brand-gold/25'
                : 'border border-brand-gold/15 text-brand-cream-dim hover:text-brand-gold'
            }`}
          >
            <Camera size={16} />
            <span>Photography Services</span>
          </button>
          <button
            onClick={() => setActiveTab('videography')}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-serif tracking-wide transition cursor-pointer ${
              activeTab === 'videography'
                ? 'bg-brand-gold text-brand-bg font-bold shadow-md shadow-brand-gold/25'
                : 'border border-brand-gold/15 text-brand-cream-dim hover:text-brand-gold'
            }`}
          >
            <Film size={16} />
            <span>Videography Services</span>
          </button>
        </div>
      )}

      {/* Narrative grid based on selected active tab */}
      {activeTab === 'photography' && !isWatchViewport && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
          {/* Marriage */}
          <div className="bg-brand-card/75 border border-brand-gold/15 p-6 rounded-2xl flex flex-col justify-between hover:border-brand-gold/30 transition">
            <div>
              <div className="flex items-center gap-2 text-brand-gold mb-3">
                <Camera size={16} />
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider">MARRIAGE PORTRAITS</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-cream mb-2">Traditional Wedlocks</h3>
              <p className="text-xs text-brand-cream-dim leading-relaxed font-light mb-4">
                High-definition portrait sessions focusing on intense ceremonial details standard in traditional Janti and Swayamvar settings. Complete with custom color grading for Nepalese traditional red and gold attire.
              </p>
            </div>
            <button 
              onClick={() => handleApplyPreset('marriage', 'photo')}
              className="mt-4 border border-brand-gold/30 hover:border-brand-gold text-brand-gold text-center text-xs font-mono py-2 rounded-lg transition uppercase tracking-widest cursor-pointer"
            >
              Configure Photo Quote
            </button>
          </div>

          {/* Pasni & Bratabandha */}
          <div className="bg-brand-card/75 border border-brand-gold/15 p-6 rounded-2xl flex flex-col justify-between hover:border-brand-gold/30 transition">
            <div>
              <div className="flex items-center gap-2 text-brand-gold mb-3">
                <Sparkles size={16} />
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider">PASNI & BRATABANDHA</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-cream mb-2">Milestone Ceremonies</h3>
              <p className="text-xs text-brand-cream-dim leading-relaxed font-light mb-4">
                Specialized close-up lenses capturing the pure expressions of babies during Pasni (Rice Feeding rituals) or the serious pride of boys undergoing Bratabandha thread ceremonies.
              </p>
            </div>
            <button 
              onClick={() => handleApplyPreset('pasni', 'photo')}
              className="mt-4 border border-brand-gold/30 hover:border-brand-gold text-brand-gold text-center text-xs font-mono py-2 rounded-lg transition uppercase tracking-widest cursor-pointer"
            >
              Configure Photo Quote
            </button>
          </div>

          {/* Maternity & Baby Photoshoot */}
          <div className="bg-brand-card/75 border border-brand-gold/15 p-6 rounded-2xl flex flex-col justify-between hover:border-brand-gold/30 transition">
            <div>
              <div className="flex items-center gap-2 text-brand-gold mb-3">
                <BookOpen size={16} />
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider">MATERNITY & NEWBORN</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-cream mb-2">Motherhood & Baby Shoots</h3>
              <p className="text-xs text-brand-cream-dim leading-relaxed font-light mb-4">
                Capturing the radiant grace of expectancy and the deep warmth of a baby's first weeks. Gentle pacing, luxury accessories, and soft background music are guaranteed during these intimate shoots.
              </p>
            </div>
            <button 
              onClick={() => handleApplyPreset('maternity', 'photo')}
              className="mt-4 border border-brand-gold/30 hover:border-brand-gold text-brand-gold text-center text-xs font-mono py-2 rounded-lg transition uppercase tracking-widest cursor-pointer"
            >
              Configure Photo Quote
            </button>
          </div>
        </div>
      )}

      {activeTab === 'videography' && !isWatchViewport && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
          {/* Wedding Cinematic Film */}
          <div className="bg-brand-card/75 border border-brand-gold/15 p-6 rounded-2xl flex flex-col justify-between hover:border-brand-gold/30 transition">
            <div>
              <div className="flex items-center gap-2 text-brand-gold mb-3">
                <Film size={16} />
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider">CINEMATIC MARRIAGE</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-cream mb-2">Cinematic Wedding Full Lengths</h3>
              <p className="text-xs text-brand-cream-dim leading-relaxed font-light mb-4">
                Multiple active angles catching Janti arrivals, prayer fires, and tears at sending off the bride. We include pristine digital microphones to capture traditional songs with high fidelity.
              </p>
            </div>
            <button 
              onClick={() => handleApplyPreset('marriage', 'video')}
              className="mt-4 border border-brand-gold/30 hover:border-brand-gold text-brand-gold text-center text-xs font-mono py-2 rounded-lg transition uppercase tracking-widest cursor-pointer"
            >
              Configure Video Quote
            </button>
          </div>

          {/* Pasni, Bratabandha & Maternity film */}
          <div className="bg-brand-card/75 border border-brand-gold/15 p-6 rounded-2xl flex flex-col justify-between hover:border-brand-gold/30 transition">
            <div>
              <div className="flex items-center gap-2 text-brand-gold mb-3">
                <Clock size={16} />
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider">PASNI & BRATABANDHA VIDEO</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-cream mb-2">Ceremonial Highlight Recommends</h3>
              <p className="text-xs text-brand-cream-dim leading-relaxed font-light mb-4">
                Compact, beautiful event recaps displaying children tasting primary foods or accepting sacred keys. Mastered with smooth voiceovers and gentle ambient soundscapes in our McIntosh style.
              </p>
            </div>
            <button 
              onClick={() => handleApplyPreset('pasni', 'video')}
              className="mt-4 border border-brand-gold/30 hover:border-brand-gold text-brand-gold text-center text-xs font-mono py-2 rounded-lg transition uppercase tracking-widest cursor-pointer"
            >
              Configure Video Quote
            </button>
          </div>

          {/* Sweet 16 videography & highlights */}
          <div className="bg-brand-card/75 border border-brand-gold/15 p-6 rounded-2xl flex flex-col justify-between hover:border-brand-gold/30 transition">
            <div>
              <div className="flex items-center gap-2 text-brand-gold mb-3">
                <Sparkles size={16} />
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider">SWEET 16 VIDEO</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-cream mb-2">Sweet 16 & Birthdays</h3>
              <p className="text-xs text-brand-cream-dim leading-relaxed font-light mb-4">
                Cinematic, upbeat recording of energetic youth milestones. Gimbals, stabilized lens tracking, strobe light effects, birthday speech capturing and quick TikTok or Instagram highlight edits.
              </p>
            </div>
            <button 
              onClick={() => handleApplyPreset('sweet16', 'video')}
              className="mt-4 border border-brand-gold/30 hover:border-brand-gold text-brand-gold text-center text-xs font-mono py-2 rounded-lg transition uppercase tracking-widest cursor-pointer"
            >
              Configure Video Quote
            </button>
          </div>
        </div>
      )}

      {/* Watch Viewport Fallback Minimalist List */}
      {isWatchViewport && (
        <div className="space-y-2 text-center">
          <p className="font-serif text-xs text-brand-gold font-bold">Nepalese Events Coverage</p>
          <div className="bg-brand-card border border-brand-gold/20 p-2 rounded text-[10px] text-brand-cream-dim space-y-1">
            <p>● Wedding Cinema & Portals</p>
            <p>● Rice Feeding Ceremony (Pasni)</p>
            <p>● Sacred Thread (Bratabandha)</p>
            <p>● Sweet 16 & Birthdays</p>
            <p>● Maternity & Baby Shoots</p>
          </div>
        </div>
      )}

      {/* Interactive Pricing Estimator Engine */}
      {!isWatchViewport && (
        <div id="estimator-pricingbox-container" className="bg-gradient-to-br from-brand-card to-[#0d0d0d] border border-brand-gold/25 rounded-2xl p-6 md:p-10 max-w-3xl mx-auto custom-glow">
          <div className="text-center mb-8">
            <span className="font-mono text-xs text-brand-gold tracking-widest uppercase block mb-1">Acoustic Tooling</span>
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-brand-cream">Traditional Event Quote Estimator</h3>
            <p className="text-brand-cream-dim text-xs font-light mt-1">Select the event type, capture mode, and duration parameters to compile a customized investment outline.</p>
          </div>

          <div className="space-y-6">
            
            {/* Step 1: Select Event */}
            <div>
              <label className="block font-serif text-sm text-brand-cream mb-2 font-medium">1. Choose Traditional Ceremony Category</label>
              <select 
                id="pricing-event-select"
                value={selectedEventId}
                onChange={(e) => setSelectedEventId(e.target.value)}
                className="w-full bg-brand-bg border border-brand-gold/20 rounded-xl px-4 py-2.5 font-serif text-brand-cream focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none cursor-pointer"
              >
                <option value="marriage">Traditional Wedding / Marriage Festivities (Base: $1500)</option>
                <option value="pasni">Pasni Rice Feeding Ceremony Weaning (Base: $600)</option>
                <option value="bratabandha">Bratabandha Sacred Thread Passage (Base: $650)</option>
                <option value="sweet16">Sweet 16 / Milestone birthdays (Base: $500)</option>
                <option value="maternity">Maternity Story Portrait Hour (Base: $400)</option>
                <option value="baby">Baby & Newborn Coziness session (Base: $350)</option>
              </select>
              <p className="text-[11px] text-brand-cream-dim font-light mt-1.5 italic">
                * {eventBaseCosts[selectedEventId]?.description}
              </p>
            </div>

            {/* Step 2: Choose Mode */}
            <div>
              <label className="block font-serif text-sm text-brand-cream mb-2.5 font-medium">2. Select Capture Mode Medium</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'photo', label: 'Photography Only', desc: 'Raw negatives & retouched prints' },
                  { id: 'video', label: 'Videography Only', desc: 'Cinematic trailer & digital reel' },
                  { id: 'both', label: 'Premium Combo', desc: 'Covers whole day (Best Value - Save 40%!)' },
                ].map(mode => {
                  const isActive = captureMode === mode.id;
                  return (
                    <button
                      key={mode.id}
                      type="button"
                      id={`mode-selector-${mode.id}`}
                      onClick={() => setCaptureMode(mode.id as any)}
                      className={`text-center p-3 rounded-xl border transition cursor-pointer flex flex-col justify-between items-center ${
                        isActive
                          ? 'bg-brand-gold text-brand-bg border-brand-gold font-bold shadow-md shadow-brand-gold/15'
                          : 'border-brand-gold/15 bg-brand-bg text-brand-cream-dim hover:border-brand-gold/45'
                      }`}
                    >
                      <span className="font-serif text-xs md:text-sm uppercase tracking-wider block font-semibold">{mode.label}</span>
                      <span className={`text-[9px] block font-light leading-snug mt-1 ${isActive ? 'text-brand-bg-dim opacity-90' : 'text-zinc-500'}`}>
                        {mode.desc}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Coverage Duration slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block font-serif text-sm text-brand-cream font-medium">3. Hour Duration of Continuous Coverage</label>
                <span className="font-mono text-xs text-brand-gold bg-brand-bg/80 border border-brand-gold/20 px-3 py-1 rounded-full font-black">
                  {durationHours} Hours
                </span>
              </div>
              <input 
                id="pricing-duration-slider"
                type="range" 
                min="1" 
                max="12" 
                value={durationHours} 
                onChange={(e) => setDurationHours(Number(e.target.value))}
                className="w-full accent-brand-gold cursor-pointer" 
              />
              <p className="text-[10px] text-zinc-500 mt-1">
                * Each hour after 2 adds $100 for ongoing crew labor & post-production edits. Standard Marriage is typically 8-12 hours; Pasni/Bratabandha is 3-5 hours; Maternity is 1.5-3 hours.
              </p>
            </div>

            {/* Step 4: Special Addon selections */}
            <div>
              <label className="block font-serif text-sm text-brand-cream mb-3 font-medium">4. Premium Deliverables Hardware Add-Ons</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                
                {/* Leather Album */}
                <label 
                  className={`border p-3.5 rounded-xl flex items-start gap-3 cursor-pointer select-none transition ${
                    addonAlbum ? 'border-brand-gold bg-brand-gold/5' : 'border-brand-gold/15 bg-brand-bg/40'
                  }`}
                >
                  <input 
                    type="checkbox"
                    checked={addonAlbum}
                    onChange={(e) => setAddonAlbum(e.target.checked)}
                    className="mt-0.5 rounded accent-brand-gold"
                  />
                  <div>
                    <span className="text-xs text-brand-cream font-bold block">Handcrafted Album</span>
                    <span className="text-[10px] text-brand-gold block font-mono">+$250</span>
                    <span className="text-[9px] text-zinc-500 font-light block mt-0.5">Heavy gold foil paper binding</span>
                  </div>
                </label>

                {/* Drone Flight */}
                <label 
                  className={`border p-3.5 rounded-xl flex items-start gap-3 cursor-pointer select-none transition ${
                    addonDrone ? 'border-brand-gold bg-brand-gold/5' : 'border-brand-gold/15 bg-brand-bg/40'
                  }`}
                >
                  <input 
                    type="checkbox"
                    checked={addonDrone}
                    onChange={(e) => setAddonDrone(e.target.checked)}
                    className="mt-0.5 rounded accent-brand-gold"
                  />
                  <div>
                    <span className="text-xs text-brand-cream font-bold block">Championship Drone</span>
                    <span className="text-[10px] text-brand-gold block font-mono">+$150</span>
                    <span className="text-[9px] text-zinc-500 font-light block mt-0.5">Sweeping 4K aerial landscape tracking</span>
                  </div>
                </label>

                {/* Keepsake Gold USB Box */}
                <label 
                  className={`border p-3.5 rounded-xl flex items-start gap-3 cursor-pointer select-none transition ${
                    addonKeepsake ? 'border-brand-gold bg-brand-gold/5' : 'border-brand-gold/15 bg-brand-bg/40'
                  }`}
                >
                  <input 
                    type="checkbox"
                    checked={addonKeepsake}
                    onChange={(e) => setAddonKeepsake(e.target.checked)}
                    className="mt-0.5 rounded accent-brand-gold"
                  />
                  <div>
                    <span className="text-xs text-brand-cream font-bold block">Oak Gold USB Case</span>
                    <span className="text-[10px] text-brand-gold block font-mono">+$100</span>
                    <span className="text-[9px] text-zinc-500 font-light block mt-0.5">Physical wooden box keeper</span>
                  </div>
                </label>

              </div>
            </div>

            {/* Step 5: Final Quotation Cost Display */}
            <div className="border border-brand-gold/20 bg-brand-bg/95 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <div>
                <span className="font-mono text-xs text-brand-cream-dim uppercase tracking-widest block font-bold">Estimated Investment Summary</span>
                <span className="text-[10px] text-brand-gold block mt-0.5 font-light">Custom VVE High Fidelity calibration</span>
              </div>
              
              <div className="flex flex-col sm:items-end gap-1 text-center sm:text-right">
                <span id="interactive-quote-text" className="font-mono text-3xl md:text-4xl text-brand-gold-bright font-black text-glow">
                  ${totalQuote.toLocaleString()}
                </span>
                <span className="text-[9px] text-zinc-500">Includes professional light grading & cinematic sound level edits</span>
              </div>
            </div>

            {/* Action button triggers navigating back to contact with pre-filled event state */}
            <button
              onClick={() => {
                const title = `${eventBaseCosts[selectedEventId].title} (${captureMode === 'both' ? 'Photo + Video' : captureMode === 'video' ? 'Video Only' : 'Photo Only'}) - ${durationHours} Hours`;
                onNavigateToContact(title, totalQuote);
              }}
              className="w-full bg-brand-gold hover:bg-brand-gold-bright text-brand-bg font-serif font-black py-4.5 rounded-xl uppercase tracking-widest text-sm transition-all duration-300 transform active:scale-[0.98] shadow-lg shadow-brand-gold/10 cursor-pointer flex items-center justify-center gap-2"
            >
              <CalendarCheck size={16} />
              <span>Proceed to Booking Inquiry</span>
            </button>

          </div>
        </div>
      )}

    </div>
  );
};
