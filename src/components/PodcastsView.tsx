import React, { useState } from 'react';
import { Play, Pause, Youtube, Video, Music } from 'lucide-react';
import { PodcastEpisode } from '../types';

interface PodcastsViewProps {
  podcastEpisodes: PodcastEpisode[];
  currentEpisode: PodcastEpisode | null;
  isPlaying: boolean;
  handlePlayEpisode: (episode: PodcastEpisode) => void;
  setIsPlaying: (playing: boolean) => void;
  isWatchViewport: boolean;
}

export const PodcastsView: React.FC<PodcastsViewProps> = ({
  podcastEpisodes,
  currentEpisode,
  isPlaying,
  handlePlayEpisode,
  setIsPlaying,
  isWatchViewport,
}) => {
  const [selectedSeries, setSelectedSeries] = useState<string>('all');
  const [activeEmbedId, setActiveEmbedId] = useState<string | null>(null);

  // Filter episodes based on selected tab
  const filteredEpisodes = selectedSeries === 'all'
    ? podcastEpisodes
    : podcastEpisodes.filter(ep => ep.series.toLowerCase() === selectedSeries.toLowerCase());

  const getSeriesColorTheme = (series: string) => {
    switch (series.toLowerCase()) {
      case 'inside out':
        return 'text-amber-400 border-amber-400/20 bg-amber-400/5';
      case 'chit chat':
        return 'text-rose-400 border-rose-400/20 bg-rose-400/5';
      case 'numerology':
        return 'text-purple-400 border-purple-400/20 bg-purple-400/5';
      default:
        return 'text-brand-gold border-brand-gold/10 bg-brand-gold/5';
    }
  };

  return (
    <div id="reactjs-view-podcasts" className="space-y-8">
      
      {/* Podcast Concept / Showcase Intro */}
      {!isWatchViewport && (
        <div className="bg-brand-card/50 border border-brand-gold/15 rounded-2xl p-6 md:p-8 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial-gradient(ellipse_at_center,_var(--tw-gradient-stops)) from-brand-gold/5 via-transparent to-transparent pointer-events-none"></div>
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-1.5 font-mono text-[9px] text-brand-gold tracking-widest uppercase font-black">
              <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
              <span>The Voice Chamber</span>
            </div>
            <h1 className="font-serif text-2xl md:text-4xl text-brand-cream font-medium">
              Stories that resonate with <span className="italic text-brand-gold">cozy authenticity</span>
            </h1>
            <p className="text-sm font-light leading-relaxed text-brand-cream-dim">
              Podcasts at <strong className="text-brand-gold font-normal">Velvett Vibes</strong> represent a cozy, safe haven of artistic conversations and traditional insight. In our custom-insulated acoustic studio room, we host deep one-on-one profiles with beloved culture figures (Inside Out with Usha Upreti), share high-spirited community table talks (Chit Chat), and decode the universe's numbers (Numerology@VVE). Every single track is recorded with vacuum valve tube amplifiers to preserve organic resonance, high frequencies, and true vocal gravity.
            </p>
          </div>
        </div>
      )}

      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pt-4">
        <div>
          <span className="font-mono text-xs text-brand-gold tracking-widest uppercase block mb-1">Acoustic Narratives</span>
          <h2 className={`font-serif text-3xl md:text-5xl font-medium text-brand-cream ${isWatchViewport ? '!text-sm font-bold' : ''}`}>
            Our Podcast Library
          </h2>
          <p className="text-sm font-light text-brand-cream-dim mt-1 max-w-2xl">
            Explore authentic audio-visual series from the Velvett Vibes studio room. Touch "Play Ambiance" to stream our retro vacuum tape mix, or hit "Watch Video" to screen episodes directly.
          </p>
        </div>
      </div>

      {/* Podcast Navigation Tabs / Shows */}
      {!isWatchViewport && (
        <div className="flex flex-wrap gap-2 border-b border-brand-gold/15 pb-4">
          {[
            { id: 'all', label: 'All VVE Shows' },
            { id: 'inside out', label: 'Inside Out with Usha Upreti' },
            { id: 'chit chat', label: 'Chit Chat' },
            { id: 'numerology', label: 'Numerology@VVE' },
          ].map(tab => {
            const isActive = selectedSeries === tab.id;
            return (
              <button
                key={tab.id}
                id={`pod-tab-${tab.id.replace(/\s+/g, '-')}`}
                onClick={() => {
                  setSelectedSeries(tab.id);
                  setActiveEmbedId(null);
                }}
                className={`px-4 py-2.5 rounded-lg text-sm transition-all duration-300 font-serif tracking-wider cursor-pointer ${
                  isActive
                    ? 'bg-brand-gold text-brand-bg font-bold shadow-md shadow-brand-gold/20'
                    : 'border border-brand-gold/15 text-brand-cream-dim hover:text-brand-gold hover:border-brand-gold/40 bg-brand-bg/50'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Episode Grid Container */}
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${isWatchViewport ? 'watch-grid !gap-2' : ''}`}>
        {filteredEpisodes.map(episode => {
          const isPlayerTarget = currentEpisode?.id === episode.id;
          const isAudioActive = isPlayerTarget && isPlaying;
          const showVideoEmbed = activeEmbedId === episode.id;
          const badgeTheme = getSeriesColorTheme(episode.series);

          return (
            <div 
              key={episode.id}
              id={`podcast-card-${episode.id}`}
              className={`bg-brand-card/85 border rounded-2xl p-5 md:p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group ${
                isAudioActive 
                  ? 'border-brand-gold-bright shadow-lg shadow-brand-gold/10' 
                  : 'border-brand-gold/15 hover:border-brand-gold/30'
              } ${isWatchViewport ? '!p-2 !rounded-lg' : ''}`}
            >
              <div>
                {/* Meta details */}
                <div className="flex justify-between items-center text-[10px] font-mono tracking-widest mb-3 leading-none">
                  <span className={`px-2 py-0.5 rounded border ${badgeTheme} font-semibold uppercase`}>
                    {episode.series}
                  </span>
                  <span className="text-brand-cream-dim">{episode.date}</span>
                </div>

                {/* Cover Image or Iframe Video Player */}
                {episode.youtubeId && !isWatchViewport && (
                  <div className="relative aspect-video rounded-xl overflow-hidden border border-brand-gold/10 mb-4 bg-brand-bg">
                    {showVideoEmbed ? (
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${episode.youtubeId}?autoplay=1&rel=0`}
                        title={episode.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    ) : (
                      <>
                        <img
                          src={`https://img.youtube.com/vi/${episode.youtubeId}/hqdefault.jpg`}
                          alt={episode.title}
                          className="w-full h-full object-cover brightness-[0.7] group-hover:brightness-[0.8] transition"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-brand-bg/40 opacity-80 group-hover:opacity-100 transition-all pointer-events-none">
                          <div className="w-12 h-12 rounded-full bg-brand-wine/80 border border-brand-gold flex items-center justify-center text-brand-gold shadow-lg shadow-black/50">
                            <Play size={18} className="fill-brand-gold relative left-0.5" />
                          </div>
                        </div>
                        {/* YouTube label */}
                        <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-[10px] font-mono font-medium text-white flex items-center gap-1">
                          <Youtube size={11} className="text-red-500 fill-red-500" />
                          <span>YouTube Link Available</span>
                        </div>
                      </>
                    )}
                  </div>
                )}

                <h3 className={`font-serif text-lg md:text-xl font-bold text-brand-cream group-hover:text-brand-gold-bright transition mb-2 leading-snug ${isWatchViewport ? 'text-[8px] leading-tight mb-1 font-semibold' : ''}`}>
                  {episode.title}
                </h3>
                <p className={`text-xs text-brand-cream-dim leading-relaxed font-light mb-5 ${isWatchViewport ? 'hidden' : ''}`}>
                  {episode.description}
                </p>
              </div>

              {/* Bottom control hub */}
              <div className="border-t border-brand-gold/10 pt-4 flex items-center justify-between mt-auto">
                <span className="font-mono text-xs text-brand-gold tracking-widest">{episode.duration}</span>
                
                <div className="flex gap-2">
                  {/* YouTube Embed Video Player Toggle */}
                  {episode.youtubeId && !isWatchViewport && (
                    <button
                      id={`watch-video-action-${episode.id}`}
                      onClick={() => setActiveEmbedId(showVideoEmbed ? null : episode.id)}
                      className="bg-brand-wine/40 hover:bg-brand-wine border border-brand-wine hover:border-brand-gold/50 text-brand-cream-dim hover:text-brand-cream font-mono text-[10px] uppercase px-3 py-1.5 rounded-lg flex items-center gap-1 transition cursor-pointer"
                    >
                      <Video size={12} className="text-brand-gold" />
                      <span>{showVideoEmbed ? "Close Video" : "Watch Video"}</span>
                    </button>
                  )}

                  {/* Audio trigger */}
                  {isAudioActive ? (
                    <button
                      id={`pause-pod-action-${episode.id}`}
                      onClick={() => setIsPlaying(false)}
                      className="bg-brand-gold text-brand-bg font-mono font-bold text-[10px] uppercase px-3.5 py-1.5 rounded-lg flex items-center gap-1 transition cursor-pointer border border-brand-gold"
                    >
                      <Pause size={12} className="fill-brand-bg" />
                      <span>Streaming</span>
                    </button>
                  ) : (
                    <button
                      id={`play-pod-action-${episode.id}`}
                      onClick={() => {
                        handlePlayEpisode(episode);
                        setActiveEmbedId(null); // stop video to avoid double audios
                      }}
                      className="bg-brand-gold hover:bg-brand-gold-bright text-brand-bg font-mono font-bold text-[10px] uppercase px-3.5 py-1.5 rounded-lg flex items-center gap-1 transition-all cursor-pointer"
                    >
                      <Music size={12} />
                      <span>Listen</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Decorative community banner */}
      {!isWatchViewport && (
        <div className="bg-gradient-to-r from-brand-card to-[#0e0c0a] border border-brand-gold/15 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-brand-gold/30 bg-brand-bg flex items-center justify-center text-brand-gold shrink-0">
              <Youtube size={20} className="fill-current text-brand-gold" />
            </div>
            <div>
              <h4 className="font-serif text-base font-bold text-brand-cream">Subscribe to Velvett Vibes on YouTube</h4>
              <p className="text-xs text-brand-cream-dim leading-snug">Don't miss a single upload. Live streaming, community notes, and new segments dropping weekly.</p>
            </div>
          </div>
          <a
            href="https://www.youtube.com/@VelvetVibesEnt"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-wine px-5 py-2.5 rounded-full text-xs font-mono tracking-widest uppercase text-brand-gold hover:text-brand-gold-bright border border-brand-gold/30 transition shadow-inner shrink-0 cursor-pointer"
          >
            Go to YouTube Channel
          </a>
        </div>
      )}

    </div>
  );
};
