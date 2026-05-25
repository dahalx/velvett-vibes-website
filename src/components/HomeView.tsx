import React, { useState } from 'react';
import { Play, Pause, ExternalLink, Video } from 'lucide-react';
import { PodcastEpisode } from '../types';

interface HomeViewProps {
  currentEpisode: PodcastEpisode | null;
  isPlaying: boolean;
  handlePlayEpisode: (episode: PodcastEpisode) => void;
  setIsPlaying: (playing: boolean) => void;
  podcastEpisodes: PodcastEpisode[];
  isWatchViewport: boolean;
  setActivePage: (page: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  currentEpisode,
  isPlaying,
  handlePlayEpisode,
  setIsPlaying,
  podcastEpisodes,
  isWatchViewport,
  setActivePage,
}) => {
  const featuredEpisode = podcastEpisodes[0];
  const [activeVideoEmbedId, setActiveVideoEmbedId] = useState<string | null>(null);

  const FEATURED_VIDEOS = [
    {
      id: 'LgkxgpYQ110',
      title: 'Velvett Vibes Acoustic Rhythms',
      description: 'Atmospheric living acoustic sessions highlighting original arrangements and traditional instruments.',
      youtubeUrl: 'https://www.youtube.com/watch?v=LgkxgpYQ110',
      embedSearch: 'VgMmIxekQns' // fallback or correct embed
    },
    {
      id: 'R4Jp7BK0QCI',
      title: 'Traditional Wedding Soundscapes',
      description: 'Elegant documentary highlights from Nepalese marriages, weaving sacred flutes and emotional milestones.',
      youtubeUrl: 'https://www.youtube.com/watch?v=R4Jp7BK0QCI',
      embedSearch: 'SeoNqEzYP3w'
    },
    {
      id: 'VgMmIxekQns',
      title: 'Sanubaba - Velvett Vibes Original',
      description: 'Our flagship musical project combining deep traditional beats with state-of-the-art visual choreography.',
      youtubeUrl: 'https://www.youtube.com/watch?v=VgMmIxekQns',
      embedSearch: 'VgMmIxekQns'
    }
  ];

  return (
    <div id="reactjs-view-home" className="space-y-12">
      
      {/* Narrative Intro Box & Receiver Row */}
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch ${isWatchViewport ? 'watch-grid !gap-2' : ''}`}>
        
        {/* Narrative Intro Box */}
        <div className={`lg:col-span-12 bg-brand-card/75 p-6 md:p-10 rounded-2xl border border-brand-gold/15 flex flex-col justify-between ${isWatchViewport ? '!p-2 !rounded-lg' : ''}`}>
          <div>
            <h2 className={`font-serif text-3xl md:text-5xl font-medium leading-tight mb-4 text-brand-cream tracking-tight ${isWatchViewport ? '!text-sm mb-1 font-bold' : ''}`}>
              Where creations meet<br className="hidden md:block" />
              <span className="italic text-brand-gold"> with reality</span>.
            </h2>
            
            {/* Summary of Velvett Vibes */}
            <div className="space-y-3 mb-6">
              <p className={`text-brand-cream-dim text-sm md:text-base font-light leading-relaxed ${isWatchViewport ? 'text-[9px] leading-tight mb-2' : ''}`}>
                <strong className="text-brand-gold font-normal">Velvett Vibes</strong> is a premium media production suite dedicated to documenting cultural stories, acoustic sounds, and traditional rites with unparalleled aesthetic precision. We operate a flagship YouTube podcast and acoustic hub, craft world-class music videos for aspiring musicians, and supply elegant photography and videography capturing standard Nepalese wedding, Bratabandha, or Pasni rituals.
              </p>
              <p className={`text-[#c8bdb3] text-xs font-serif italic ${isWatchViewport ? 'hidden' : ''}`}>
                Our belief is simple: cultural inheritance is recorded through beautiful audio depth and cinematic compositions. 
              </p>
            </div>
          </div>
          
          <div className={`flex flex-wrap gap-3 ${isWatchViewport ? 'hidden' : ''}`}>
            <button 
              id="home-action-podcast"
              onClick={() => setActivePage('podcasts')} 
              className="bg-brand-gold hover:bg-brand-gold-bright text-brand-bg px-6 py-3 rounded-full font-serif font-bold text-sm tracking-wider transition-all duration-300 transform hover:scale-[1.02] cursor-pointer"
            >
              Explore Podcasts
            </button>
            <button 
              id="home-action-services"
              onClick={() => setActivePage('event-services')} 
              className="border border-brand-gold/40 hover:border-brand-gold hover:bg-brand-gold/5 text-brand-cream px-6 py-3 rounded-full font-serif text-sm transition cursor-pointer"
            >
              Our Event Packages
            </button>
          </div>
        </div>

      </div>

      {/* CORE SERVICES SECTION (3 Channels of Craft) */}
      <div id="home-services-showcase" className={`bg-gradient-to-b from-brand-card/90 to-brand-card/30 border border-brand-gold/20 rounded-2xl p-6 md:p-8 space-y-8 ${isWatchViewport ? '!p-2 !rounded-lg' : ''}`}>
        <div className="max-w-xl space-y-2">
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-brand-gold uppercase tracking-widest font-extrabold">
            <span className="inline-block w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
            <span>VELVETT VIBES PRODUCTION SUITE</span>
          </div>
          <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-brand-cream">
            Our Traditional & Digital Media Services
          </h3>
          <p className="text-[12px] text-brand-cream-dim font-light leading-relaxed">
            From the recording console to standard celebration arenas, we maintain pristine audio-visual clarity and gorgeous layout aesthetics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Service Option 1: Podcasts */}
          <div className="bg-brand-card border border-brand-gold/20 hover:border-brand-gold/40 rounded-xl p-5 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md transition duration-300">
            <div className="space-y-2">
              <span className="font-mono text-[9px] bg-brand-wine text-white px-2.5 py-1 rounded inline-block uppercase tracking-wider font-semibold">Mics & Dialogue</span>
              <h4 className="font-serif text-lg font-bold text-brand-cream">Immersive Podcasts</h4>
              <p className="text-[12px] text-brand-cream-dim leading-relaxed font-light">
                High-fidelity live conversational episodes including deep lifestyle insights with guest hosts, numerology prediction secrets, and intimate celebrity storytelling modules.
              </p>
            </div>
            <button 
              id="service-btn-podcasts"
              onClick={() => setActivePage('podcasts')}
              className="text-brand-gold hover:text-brand-gold-bright font-serif text-xs font-semibold tracking-wider flex items-center gap-1 mt-4 transition group cursor-pointer"
            >
              Listen to Podcasts <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          {/* Service Option 2: Music Videos */}
          <div className="bg-brand-card border border-brand-gold/20 hover:border-brand-gold/40 rounded-xl p-5 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md transition duration-300">
            <div className="space-y-2">
              <span className="font-mono text-[9px] bg-brand-wine text-white px-2.5 py-1 rounded inline-block uppercase tracking-wider font-semibold">Cinema Format</span>
              <h4 className="font-serif text-lg font-bold text-brand-cream">Music Videos</h4>
              <p className="text-[12px] text-brand-cream-dim leading-relaxed font-light">
                Cinematic visual tracks that blend contemporary lighting, balanced focus depth, and stunning resolution. Perfect for musicians demanding high-speed world-class quality files.
              </p>
            </div>
            <button 
              id="service-btn-music-videos"
              onClick={() => setActivePage('music-videos')}
              className="text-brand-gold hover:text-brand-gold-bright font-serif text-xs font-semibold tracking-wider flex items-center gap-1 mt-4 transition group cursor-pointer"
            >
              Watch Videos <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          {/* Service Option 3: Event Services */}
          <div className="bg-brand-card border border-brand-gold/20 hover:border-brand-gold/40 rounded-xl p-5 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md transition duration-300">
            <div className="space-y-2">
              <span className="font-mono text-[9px] bg-brand-wine text-white px-2.5 py-1 rounded inline-block uppercase tracking-wider font-semibold">Living Inheritance</span>
              <h4 className="font-serif text-lg font-bold text-brand-cream">Event Videography</h4>
              <p className="text-[12px] text-brand-cream-dim leading-relaxed font-light">
                Pristine physical and digital documentation for important milestones such as weddings, sacred Bratabandha threads, and Pasni infant rice-feeding rituals.
              </p>
            </div>
            <button 
              id="service-btn-events"
              onClick={() => setActivePage('event-services')}
              className="text-brand-gold hover:text-brand-gold-bright font-serif text-xs font-semibold tracking-wider flex items-center gap-1 mt-4 transition group cursor-pointer"
            >
              View Packages <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>

        {/* Contact Us Footer Invitation bar */}
        <div className={`pt-6 border-t border-brand-gold/15 flex flex-col sm:flex-row items-center justify-between gap-4 ${isWatchViewport ? '!p-0 !border-0' : ''}`}>
          <div className="space-y-1 text-center sm:text-left">
            <p className="font-serif text-base font-semibold text-brand-cream">Interested in launching a podcast episode or booking event filmography?</p>
            <p className="text-brand-cream-dim text-xs font-light">Let us draft optimized packages matching dates, traditions, and target estimates.</p>
          </div>
          <button
            id="book-via-contact-link"
            onClick={() => setActivePage('contact')}
            className="bg-brand-gold hover:bg-brand-gold-bright text-brand-bg px-7 py-3 rounded-full font-serif font-bold text-sm uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap active:scale-95 shadow-md shadow-brand-gold/10"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* REQUESTED VIDEO THUMBNAILS GRID (Interactive Embed Toggles) */}
      <div id="home-requested-clips" className="space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-2">
          <div>
            <span className="font-mono text-[10px] text-brand-gold uppercase tracking-widest font-extrabold block mb-1">Interactive Screening Gallery</span>
            <h3 className="font-serif text-xl md:text-3xl font-medium text-brand-cream">Featured Video Broadcasts</h3>
          </div>
          <p className="text-xs text-brand-cream-dim max-w-md font-light">
            Touch any clip below to activate instant, beautiful playback. Spellbound melodies curated by Velvett Vibes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED_VIDEOS.map((video) => {
            const isEmbedActive = activeVideoEmbedId === video.id;
            return (
              <div 
                key={video.id} 
                id={`thumbnail-card-${video.id}`}
                className="bg-brand-card border border-brand-gold/15 hover:border-brand-gold/30 rounded-2xl overflow-hidden transition duration-300 flex flex-col group"
              >
                {/* Embed or Thumbnail Frame */}
                <div className="aspect-video bg-black relative flex items-center justify-center overflow-hidden border-b border-brand-gold/10">
                  {isEmbedActive ? (
                    <iframe 
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      referrerPolicy="no-referrer"
                    ></iframe>
                  ) : (
                    <>
                      <img 
                        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} 
                        alt={video.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-500 brightness-90 group-hover:brightness-100"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800";
                        }}
                      />
                      {/* Play overlay ring */}
                      <button 
                        id={`btn-play-clip-${video.id}`}
                        onClick={() => setActiveVideoEmbedId(video.id)}
                        className="absolute w-12 h-12 rounded-full bg-brand-bg/85 border border-brand-gold text-brand-gold flex items-center justify-center cursor-pointer hover:bg-brand-gold hover:text-brand-bg hover:scale-110 active:scale-95 transition-all duration-300 z-10 shadow-lg shadow-black/80"
                        aria-label="Play video"
                      >
                        <Play size={16} className="fill-current ml-0.5" />
                      </button>
                    </>
                  )}
                </div>

                {/* Metadata content */}
                <div className="p-4 flex-grow flex flex-col justify-between gap-3">
                  <div>
                    <h5 className="font-serif text-base font-bold text-brand-cream">{video.title}</h5>
                    <p className="text-[11px] text-brand-cream-dim leading-relaxed font-light mt-1">{video.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between border-t border-brand-gold/10 pt-2.5 mt-2">
                    <span className="font-mono text-[9px] text-brand-gold tracking-widest font-semibold">VELVETT VIBES VIDEOS</span>
                    <a 
                      href={video.youtubeUrl}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-cream-dim hover:text-brand-gold flex items-center gap-1 text-[10px] uppercase font-mono tracking-wider transition cursor-pointer"
                      referrerPolicy="no-referrer"
                    >
                      <span>YouTube</span>
                      <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>



      {/* Editorial Testimonial Review */}
      <div className={`max-w-3xl mx-auto text-center border-y border-brand-gold/10 py-8 ${isWatchViewport ? 'hidden' : ''}`}>
        <span className="text-4xl font-serif text-brand-gold/30 block leading-none select-none">&ldquo;</span>
        <p className="font-serif text-lg md:text-xl italic text-brand-cream-dim leading-relaxed mb-4 font-light">
          "At Velvett Vibes, they capture the real heartbeat of Nepalese culture. Their audio sounds incredibly rich, and their video footage is exceptionally cinematic. They handle weddings, thread ceremonies, and rice feeding rituals with a rare artistic respect."
        </p>
        <span className="font-mono text-[10px] text-brand-gold tracking-widest uppercase block font-bold">&mdash; Ramesh K. Adhikari, VVE Media Advisor</span>
      </div>

    </div>
  );
};
