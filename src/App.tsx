/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  Watch,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Download,
  Check,
  Copy
} from 'lucide-react';

import { PageId, PodcastEpisode, ContactMessage } from './types';
import { PAGES, PODCAST_EPISODES, VIDEO_RELEASES } from './data';
import { HTML_EXPORT_FILES } from './htmlContent';

// Modular Page Views
import { HomeView } from './components/HomeView';
import { AboutView } from './components/AboutView';
import { PodcastsView } from './components/PodcastsView';
import { MusicVideosView } from './components/MusicVideosView';
import { EventServicesView } from './components/EventServicesView';
import { ContactView } from './components/ContactView';

export default function App() {
  // Navigation State
  const [activePage, setActivePage] = useState<PageId>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Watch Viewport Sim
  const [isWatchViewport, setIsWatchViewport] = useState(false);

  // Player controls
  const [currentEpisode, setCurrentEpisode] = useState<PodcastEpisode | null>(PODCAST_EPISODES[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);

  // Form Submission & Preset mapping
  const [formData, setFormData] = useState<ContactMessage>({
    name: '',
    email: '',
    phone: '',
    subject: 'General Enquiry',
    message: '',
    selectedPackage: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSelectedSlot, setFormSelectedSlot] = useState<string>('');

  // Code Exporter
  const [copiedFile, setCopiedFile] = useState<string | null>(null);

  // Handle native audio player trigger
  useEffect(() => {
    if (audioPlayerRef.current) {
      if (isPlaying) {
        audioPlayerRef.current.play().catch(() => {
          setIsPlaying(false);
        });
      } else {
        audioPlayerRef.current.pause();
      }
    }
  }, [isPlaying, currentEpisode]);

  const handlePlayEpisode = (episode: PodcastEpisode) => {
    setCurrentEpisode(episode);
    setIsPlaying(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleCopyCode = (fileName: string, content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedFile(fileName);
    setTimeout(() => setCopiedFile(null), 2500);
  };

  // Callback to prefill quote inside the Contact state
  const handlePrefillQuote = (packageName: string, quoteValue: number) => {
    setFormData(prev => ({
      ...prev,
      selectedPackage: `${packageName} (Estimated Investment: $${quoteValue})`,
      message: `Hi Velvett Vibes Entertainment, I'm reaching out to book videography/photography service for ${packageName}. My estimated quote summary is $${quoteValue}. Looking forward to discussing this!`
    }));
    setActivePage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-cream font-sans flex flex-col justify-between selection:bg-brand-gold selection:text-brand-bg relative pb-12">
      
      {/* TRADITIONAL NEPALESE CELEBRATION BACKDROP SYSTEM */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
        {/* Subtle overlay ambient dust effect */}
        <div className="absolute inset-0 opacity-4 bg-[radial-gradient(#a17024_1px,transparent_1px)] bg-[size:32px_32px] z-10"></div>
        
        {/* 3D Golden Wedding Particle/Spark Loop (Watermarked Background) */}
        <video 
          key="nepalese-wedding-bg-loop"
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-[0.035] mix-blend-multiply filter blur-[1px]"
          referrerPolicy="no-referrer"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-golden-particles-in-the-air-41555-large.mp4" 
            type="video/mp4" 
          />
        </video>

        {/* Traditional Nepalese Watermark elements floating at the margins (for 40s/50s family nostalgia) */}
        <div className="absolute inset-y-0 w-full max-w-7xl mx-auto left-1/2 -translate-x-1/2 relative">
          
          {/* Watermark 1: Shubh Vivah (Marriage Mandap & Marigolds) */}
          <div className="absolute left-4 top-[20%] w-48 opacity-[0.028] lg:flex hidden flex-col items-center gap-2 mix-blend-multiply">
            <img 
              src="https://images.unsplash.com/photo-1595878715977-2e8f8df18ea8?q=80&w=300" 
              alt="Vivah" 
              className="w-28 h-28 object-cover rounded-full filter grayscale sepia"
              referrerPolicy="no-referrer"
            />
            <span className="font-serif text-xl font-bold tracking-widest text-brand-gold">शुभ विवाह</span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#7c4f10]">MARRIAGE FILM</span>
          </div>

          {/* Watermark 2: Nepalese Pasni (Infant Rice Feeding Traditional Bowls) */}
          <div className="absolute right-4 top-[35%] w-48 opacity-[0.028] lg:flex hidden flex-col items-center gap-2 mix-blend-multiply">
            <img 
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=300" 
              alt="Pasni" 
              className="w-28 h-28 object-cover rounded-full filter grayscale sepia"
              referrerPolicy="no-referrer"
            />
            <span className="font-serif text-xl font-bold tracking-widest text-brand-gold">पासनी</span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#7c4f10]">PASNI CELEBRATION</span>
          </div>

          {/* Watermark 3: Nwaran (Baby Cradle & Spiritual Lamps) */}
          <div className="absolute left-6 top-[60%] w-48 opacity-[0.028] lg:flex hidden flex-col items-center gap-2 mix-blend-multiply">
            <img 
              src="https://images.unsplash.com/photo-1522850959516-58f958dba613?q=80&w=300" 
              alt="Nwaran" 
              className="w-28 h-28 object-cover rounded-full filter grayscale sepia"
              referrerPolicy="no-referrer"
            />
            <span className="font-serif text-xl font-bold tracking-widest text-brand-gold">नवारान</span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#7c4f10]">NWARAN BLESSING</span>
          </div>

        </div>
      </div>

      {/* Primary header */}
      <header id="velvett-vibes-header" className="border-b border-brand-gold/15 bg-brand-bg/95 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          
          {/* Logo brand */}
          <button 
            id="brand-logo-trigger"
            onClick={() => setActivePage('home')} 
            className="flex items-center gap-3 text-left group hover:opacity-90 outline-none cursor-pointer"
          >
            <div className="w-11 h-11 rounded-full border border-brand-gold/40 flex items-center justify-center bg-brand-card shadow-[0_0_15px_rgba(197,160,89,0.15)] group-hover:border-brand-gold-bright transition-all">
              <span className="font-serif text-2xl font-bold text-brand-gold group-hover:text-brand-gold-bright">VV</span>
            </div>
            <div>
              <span className="font-serif text-xl tracking-wider font-semibold text-brand-cream block leading-tight">VELVETT VIBES</span>
              <span className="font-mono text-[10px] tracking-wider text-brand-gold block uppercase leading-none mt-0.5 font-bold">where creations meet with reality</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            {PAGES.map((page) => {
              if (page.id === 'exporter' && activePage !== 'exporter') return null; // keep exporter simple or accessible from footer if needed
              return (
                <button
                  key={page.id}
                  id={`nav-${page.id}`}
                  onClick={() => {
                    setActivePage(page.id);
                    if (isWatchViewport) setIsWatchViewport(false);
                  }}
                  className={`transition-all duration-300 font-serif text-base tracking-wider pb-1 relative cursor-pointer outline-none ${
                    activePage === page.id 
                      ? 'text-brand-gold-bright border-b border-brand-gold/80' 
                      : 'text-brand-cream-dim hover:text-brand-gold'
                  }`}
                >
                  {page.label}
                </button>
              );
            })}
          </nav>

          {/* Special Control indicators */}
          <div className="flex items-center gap-3">
            {/* Watch Simulator mode */}
            <button
              id="watch-preview-toggle-btn"
              onClick={() => setIsWatchViewport(!isWatchViewport)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono transition-all uppercase tracking-wider cursor-pointer ${
                isWatchViewport 
                  ? 'bg-brand-gold text-brand-bg border-brand-gold font-bold shadow-lg shadow-brand-gold/25' 
                  : 'border-brand-gold/20 hover:border-brand-gold/50 text-brand-gold'
              }`}
            >
              <Watch size={13} />
              <span className="hidden sm:inline">{isWatchViewport ? "Exit Watch View" : "Watch View"}</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              id="mobile-nav-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden border border-brand-gold/20 p-2 rounded bg-brand-card text-brand-gold select-none cursor-pointer"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-dropdown"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-brand-card/95 border-b border-brand-gold/20 relative z-30"
          >
            <div className="px-4 py-4 flex flex-col gap-3 font-serif">
              {PAGES.map((page) => (
                <button
                  key={page.id}
                  id={`m-nav-${page.id}`}
                  onClick={() => {
                    setActivePage(page.id);
                    setMobileMenuOpen(false);
                    if (isWatchViewport) setIsWatchViewport(false);
                  }}
                  className={`text-left p-2.5 rounded text-lg tracking-wide border-l-2 transition-all cursor-pointer ${
                    activePage === page.id
                      ? 'border-brand-gold text-brand-gold bg-[#1c1c1c]'
                      : 'border-transparent text-brand-cream-dim'
                  }`}
                >
                  {page.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroller Area */}
      <main id="main-content-scroller" className="flex-grow flex justify-center items-center py-6 md:py-12 z-10 px-4">
        <div className="w-full max-w-7xl">
          <div className="flex flex-col items-center">
            
            {isWatchViewport && (
              <div className="mb-4 text-center select-none">
                <p className="text-[11px] font-mono text-brand-gold uppercase tracking-widest">Watch Simulator Mode Active</p>
                <p className="text-[10px] text-brand-cream-dim font-light mt-0.5">Optimized for compact 180px round wearable profiles.</p>
              </div>
            )}

            <div className={`transition-all duration-500 relative ${
              isWatchViewport 
                ? 'w-[200px] h-[200px] rounded-[38px] border-[10px] border-[#3a3430] bg-[#0c0a09] shadow-inner flex flex-col items-center p-3 overflow-y-auto scrollbar-none custom-glow' 
                : 'w-full'
            }`}>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activePage}-${isWatchViewport}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="w-full flex flex-col"
                >
                  
                  {/* Page Top Wide Graphic Banner (Unless in Watch Simulator Mode) */}
                  {!isWatchViewport && activePage !== 'exporter' && (
                    <div className="w-full mb-8 rounded-2xl border border-brand-gold/20 overflow-hidden shadow-md bg-brand-card">
                      <img 
                        src={activePage === 'contact' ? '/velvett0001.png' : '/velvett01.jpg'} 
                        alt="Velvett Vibes Accent Banner" 
                        referrerPolicy="no-referrer"
                        className="w-full h-32 sm:h-48 md:h-64 object-cover object-center"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (target.src.includes('.png')) {
                            target.src = target.src.replace('.png', '.jpg');
                          } else if (target.src.includes('.jpg') && !target.src.includes('unsplash')) {
                            target.src = target.src.replace('.jpg', '.png');
                          } else {
                            target.src = activePage === 'contact'
                              ? "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1500"
                              : "https://images.unsplash.com/photo-1516280440614-37939bbacd6a?auto=format&fit=crop&q=80&w=1500";
                          }
                        }}
                      />
                    </div>
                  )}

                  {/* Mount Page Case 1: HOME */}
                  {activePage === 'home' && (
                    <HomeView
                      currentEpisode={currentEpisode}
                      isPlaying={isPlaying}
                      handlePlayEpisode={handlePlayEpisode}
                      setIsPlaying={setIsPlaying}
                      podcastEpisodes={PODCAST_EPISODES}
                      isWatchViewport={isWatchViewport}
                      setActivePage={setActivePage}
                    />
                  )}

                  {/* Mount Page Case 2: PODCASTS */}
                  {activePage === 'podcasts' && (
                    <PodcastsView
                      podcastEpisodes={PODCAST_EPISODES}
                      currentEpisode={currentEpisode}
                      isPlaying={isPlaying}
                      handlePlayEpisode={handlePlayEpisode}
                      setIsPlaying={setIsPlaying}
                      isWatchViewport={isWatchViewport}
                    />
                  )}

                  {/* Mount Page Case 3: MUSIC VIDEOS */}
                  {activePage === 'music-videos' && (
                    <MusicVideosView
                      videoReleases={VIDEO_RELEASES}
                      isWatchViewport={isWatchViewport}
                    />
                  )}

                  {/* Mount Page Case 4: EVENT SERVICES */}
                  {activePage === 'event-services' && (
                    <EventServicesView
                      isWatchViewport={isWatchViewport}
                      onNavigateToContact={handlePrefillQuote}
                    />
                  )}

                  {/* Mount Page Case 5: ABOUT */}
                  {activePage === 'about' && (
                    <AboutView
                      isWatchViewport={isWatchViewport}
                    />
                  )}

                  {/* Mount Page Case 6: CONTACT */}
                  {activePage === 'contact' && (
                    <ContactView
                      formData={formData}
                      setFormData={setFormData}
                      formSubmitted={formSubmitted}
                      setFormSubmitted={setFormSubmitted}
                      formSelectedSlot={formSelectedSlot}
                      setFormSelectedSlot={setFormSelectedSlot}
                      isWatchViewport={isWatchViewport}
                      handleFormSubmit={handleFormSubmit}
                    />
                  )}

                  {/* Backup Case 7: EXPORTER CODE DUMP */}
                  {activePage === 'exporter' && (
                    <div id="reactjs-view-code-exporter" className="space-y-8 animate-fadeIn">
                      <div>
                        <span className="font-mono text-xs text-brand-gold tracking-widest uppercase block mb-1">GitHub Deployment Kit</span>
                        <h2 className={`font-serif text-3xl md:text-4xl font-semibold text-brand-cream ${isWatchViewport ? 'text-sm font-bold' : ''}`}>Individual Page Source Code</h2>
                        <p className="text-brand-cream-dim text-sm font-light mt-1">Copy the exact code for each static page, add them to your files (`index.html`, `about.html`, etc.) in GitHub, and run them instantly!</p>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        <div className="lg:col-span-3 flex flex-wrap lg:flex-col gap-2.5">
                          {Object.keys(HTML_EXPORT_FILES).map(fileName => {
                            const isCurrent = copiedFile === fileName;
                            return (
                              <button
                                key={fileName}
                                id={`export-selector-${fileName.replace('.', '-')}`}
                                onClick={() => handleCopyCode(fileName, HTML_EXPORT_FILES[fileName])}
                                className={`w-full text-left p-3.5 rounded-xl border font-mono text-xs flex justify-between items-center transition cursor-pointer ${
                                  isCurrent
                                    ? 'border-brand-gold bg-brand-wine/40 text-brand-gold-bright font-bold'
                                    : 'border-brand-gold/15 hover:border-brand-gold/30 text-brand-cream-dim hover:text-brand-cream'
                                }`}
                              >
                                <span className="font-semibold block">{fileName}</span>
                                <div className="flex items-center gap-1.5 text-[9px] text-brand-gold block uppercase tracking-wider">
                                  {isCurrent ? <Check size={11} className="text-green-400" /> : <Copy size={11} />}
                                  <span>{isCurrent ? "Copied!" : "Copy"}</span>
                                </div>
                              </button>
                            );
                          })}
                        </div>

                        <div className="lg:col-span-9 bg-brand-card rounded-xl border border-brand-gold/25 p-4 flex flex-col justify-between">
                          <div className="flex items-center justify-between border-b border-brand-gold/15 pb-2 mb-3">
                            <span className="font-mono text-xs text-brand-gold font-bold">Exhaustive HTML Code Reviews</span>
                            <span className="font-mono text-[9px] text-brand-cream-dim">DEPLOYMENT READY</span>
                          </div>

                          <div className="bg-[#0c0c0c] p-4 rounded-lg font-mono text-xs text-[#a2a09f]/80 overflow-x-auto overflow-y-auto max-h-96 whitespace-pre border border-brand-gold/10 scrollbar-thin">
                            {HTML_EXPORT_FILES[copiedFile || 'index.html']}
                          </div>

                          <div className="mt-4 flex items-center justify-between gap-4 font-mono text-[10px] text-brand-cream-dim leading-relaxed pt-2 border-t border-brand-gold/10">
                            <span>*CDN Tailwind is embedded inside head tags. Loads perfectly at 100% resolution anywhere on earth.</span>
                            <button
                              id="btn-copy-bulk"
                              onClick={() => handleCopyCode('index.html', HTML_EXPORT_FILES['index.html'])}
                              className="bg-brand-gold hover:bg-brand-gold-bright text-brand-bg px-4 py-1.5 rounded font-bold font-serif uppercase tracking-widest text-[9px] transition cursor-pointer"
                            >
                              Copy index.html
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                </motion.div>
              </AnimatePresence>

            </div>
          </div>
        </div>
      </main>

      {/* Hidden audio element holding actual track URLs */}
      <audio 
        ref={audioPlayerRef}
        src={currentEpisode?.audioUrl}
        preload="auto"
        onEnded={() => {
          setIsPlaying(false);
        }}
      />

      {/* Embedded footer links including exporter */}
      {!isWatchViewport && (
        <div className="mt-8 mb-4 text-center text-[10px] font-mono text-brand-cream-dim/50 flex justify-center gap-4">
          <span>© 2026 Velvett Vibes Entertainment. All Rights Reserved.</span>
          <button onClick={() => setActivePage('exporter')} className="hover:text-brand-gold underline cursor-pointer">
            VVE GitHub Source Copier
          </button>
        </div>
      )}

    </div>
  );
}
