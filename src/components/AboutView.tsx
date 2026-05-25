import React from 'react';

interface AboutViewProps {
  isWatchViewport: boolean;
}

export const AboutView: React.FC<AboutViewProps> = ({ isWatchViewport }) => {
  return (
    <div id="reactjs-view-about" className="space-y-8 max-w-4xl mx-auto">
      
      <div className="text-center">
        <span className="font-mono text-xs text-brand-gold tracking-widest uppercase block mb-1">Our Narrative & Studio Philosophy</span>
        <h2 className={`font-serif text-3xl md:text-5xl font-medium tracking-tight text-brand-cream ${isWatchViewport ? '!text-sm font-bold' : ''}`}>
          Pure Acoustics. Native Art.
        </h2>
      </div>

      <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${isWatchViewport ? 'watch-grid !gap-2' : ''}`}>
        <div className="space-y-4">
          <p className={`text-brand-cream-dim text-sm md:text-base font-light leading-relaxed ${isWatchViewport ? 'text-[9px] leading-tight' : ''}`}>
            Velvett Vibes Entertainment is a highly refined production house created to celebrate rich soundscapes and cultural expressions. Known for our popular YouTube channel <span className="text-brand-gold font-medium">@VelvetVibesEnt</span>, we deliver exceptional audio clarity and deep visual storytelling.
          </p>
          <p className={`text-brand-cream-dim text-sm md:text-base font-light leading-relaxed ${isWatchViewport ? 'text-[9px] leading-tight' : ''}`}>
            Whether broadcasting insightful dialogues with beloved hosts like Usha Upreti, releasing original music videos with high musical resonance, or setting up premium micro-consoles to record traditional events, we replace default digital approximations with absolute handcrafted warmth.
          </p>
          <p className={`text-brand-cream-dim text-sm md:text-base font-light leading-relaxed ${isWatchViewport ? 'text-[9px] leading-tight' : ''}`}>
            Our studio features carefully chosen old-fashioned oak lining, state-of-the-art acoustic treatment, glowing vacuum tubes, and high-fidelity vintage equipment from McIntosh, Studer, and Neumann. We pride ourselves on preserving physical depth for modern digital listeners.
          </p>
        </div>

        {/* Beautifully framed client photo reference */}
        <div className="relative rounded-xl overflow-hidden border border-brand-gold/25 shadow-lg group">
          <img 
            src="velvett01.png" 
            alt="Acoustics Story Banner"
            referrerPolicy="no-referrer"
            className="w-full h-80 object-cover brightness-[0.8] group-hover:scale-105 transition-all duration-700"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800";
            }}
          />
          <div className={`absolute bottom-3 left-3 bg-brand-bg/90 border border-brand-gold/30 px-3 py-1.5 rounded text-[10px] font-mono tracking-widest text-brand-gold uppercase ${isWatchViewport ? 'hidden' : ''}`}>
            VELVETT VIBES LIVE ROOM
          </div>
        </div>
      </div>

      <div className="bg-brand-card/50 border border-brand-gold/15 p-6 rounded-xl space-y-4">
        <h3 className="font-serif text-xl font-bold text-brand-gold">Our YouTube Community</h3>
        <p className="text-sm font-light text-brand-cream-dim leading-relaxed">
          Through the Velvett Vibes Entertainment YouTube channel, we cultivate an active, artistic collective. We discuss numerology, dive into casual chit-chat on lifestyle issues, share modern acoustic sessions, and live-document significant life-passage rituals.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <div className="bg-brand-bg/85 border border-brand-gold/20 px-4 py-2 rounded">
            <span className="block font-mono text-xs text-brand-gold">CHANNEL LINK</span>
            <a href="https://www.youtube.com/@VelvetVibesEnt" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:text-brand-gold-bright underline transition">
              youtube.com/@VelvetVibesEnt
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};
