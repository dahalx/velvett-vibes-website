import React, { useState } from 'react';
import { Play, Youtube, Award, ExternalLink } from 'lucide-react';
import { VideoRelease } from '../types';

interface MusicVideosViewProps {
  videoReleases: VideoRelease[];
  isWatchViewport: boolean;
}

export const MusicVideosView: React.FC<MusicVideosViewProps> = ({
  videoReleases,
  isWatchViewport,
}) => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    <div id="reactjs-view-music-videos" className="space-y-8">
      
      {/* World-Class Music Production Promo */}
      {!isWatchViewport && (
        <div className="bg-gradient-to-r from-brand-card to-[#120f0e] border border-brand-gold/15 rounded-2xl p-6 md:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 bottom-0 w-1/3 bg-radial-gradient(circle_at_right,_var(--tw-gradient-stops)) from-brand-gold/5 via-transparent to-transparent pointer-events-none"></div>
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-1.5 font-mono text-[9px] text-brand-gold tracking-widest uppercase font-black">
              <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
              <span>Visual Masterpieces</span>
            </div>
            <h1 className="font-serif text-2xl md:text-4xl text-brand-cream font-medium">
              World-class acoustics, <span className="italic text-brand-gold">pristine visuals</span>
            </h1>
            <p className="text-sm font-light leading-relaxed text-brand-cream-dim">
              If you are an aspiring musician or established artist looking to bring your musical score to the screen, <strong className="text-brand-gold font-normal">Velvett Vibes</strong> delivers a world-class production ecosystem. We bring together high-end cinematic cameras, meticulous studio lighting setups, premium gimbal stabilizers, and professional color indexing workflows. Every music video we direct becomes a signature masterpiece with exceptional sound matching and artistic visual narrative depth tailored to engage and captivate.
            </p>
          </div>
        </div>
      )}

      {/* Title block */}
      <div>
        <span className="font-mono text-xs text-brand-gold tracking-widest uppercase block mb-1">Analog Screenings</span>
        <h2 className={`font-serif text-3xl md:text-5xl font-medium text-brand-cream ${isWatchViewport ? '!text-sm font-bold' : ''}`}>
          Music Videos
        </h2>
        <p className="text-sm font-light text-brand-cream-dim mt-1 max-w-2xl">
          Visual symphonies produced by Velvett Vibes. Celebrating traditional Nepalese musical arrangements blended seamlessly with contemporary high-fidelity video formats.
        </p>
      </div>

      {/* Featured Video Spotlight Player */}
      {videoReleases.length > 0 && !isWatchViewport && (
        <div className="bg-brand-card/95 border border-brand-gold/25 p-5 rounded-2xl shadow-xl space-y-4">
          <div className="flex items-center gap-2 mb-1">
            <Award size={14} className="text-brand-gold" />
            <span className="font-mono text-[10px] text-brand-gold-bright tracking-widest uppercase font-bold">LATEST RELEASE SPOTLIGHT</span>
          </div>
          
          <div className="relative aspect-video rounded-xl overflow-hidden border border-brand-gold/15 bg-black">
            {activeVideoId ? (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0`}
                title="VVE Featured Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            ) : (
              <div className="absolute inset-0 group cursor-pointer" onClick={() => setActiveVideoId(videoReleases[0].youtubeId || '')}>
                <img
                  src={`https://img.youtube.com/vi/${videoReleases[0].youtubeId}/maxresdefault.jpg`}
                  alt={videoReleases[0].title}
                  className="w-full h-full object-cover brightness-[0.6] group-hover:scale-101 transition duration-700"
                  onError={(e) => {
                    e.currentTarget.src = videoReleases[0].thumbnailUrl;
                  }}
                />
                <div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-t from-black via-black/10 to-transparent">
                  <span className="bg-brand-gold text-brand-bg font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase self-start">
                    {videoReleases[0].category}
                  </span>
                  
                  <div className="flex flex-col items-center justify-center absolute inset-0">
                    <div className="w-16 h-16 rounded-full bg-brand-wine/90 border-2 border-brand-gold flex items-center justify-center text-brand-gold shadow-2xl group-hover:scale-110 transition duration-300">
                      <Play size={24} className="fill-brand-gold relative left-0.5 text-brand-gold" />
                    </div>
                    <span className="font-mono text-xs text-brand-cream/95 tracking-widest uppercase mt-4 block p-1 bg-black/40 rounded">Click to Play Live Embed</span>
                  </div>

                  <div className="self-start text-white max-w-lg">
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-brand-cream-dim block mb-1">
                      {videoReleases[0].title}
                    </h3>
                    <p className="text-xs font-light text-brand-cream-dim/80 line-clamp-2">
                      {videoReleases[0].description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Grid of All Releases */}
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${isWatchViewport ? 'watch-grid !gap-2' : ''}`}>
        {videoReleases.map(video => {
          const isCurrentlyPlaying = activeVideoId === video.youtubeId;
          return (
            <div 
              key={video.id} 
              id={`video-card-${video.id}`}
              className={`bg-brand-card/90 border p-4 md:p-5 rounded-2xl flex flex-col justify-between hover:border-brand-gold/35 transition-all duration-300 ${
                isCurrentlyPlaying 
                  ? 'border-brand-gold shadow-md shadow-brand-gold/10' 
                  : 'border-brand-gold/15'
              } ${isWatchViewport ? '!p-1 !rounded-md' : ''}`}
            >
              <div>
                <div className="relative aspect-video rounded-xl overflow-hidden border border-brand-gold/10 mb-4 bg-brand-bg group">
                  {isCurrentlyPlaying && !isWatchViewport ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full animate-fadeIn"
                    ></iframe>
                  ) : (
                    <div 
                      onClick={() => !isWatchViewport && setActiveVideoId(video.youtubeId || '')}
                      className="w-full h-full cursor-pointer relative"
                    >
                      <img 
                        src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover transition duration-500 brightness-[0.7] group-hover:brightness-[0.8]"
                        onError={(e) => {
                          e.currentTarget.src = video.thumbnailUrl;
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition duration-300">
                        <div className="w-12 h-12 rounded-full bg-brand-wine/80 border border-brand-gold flex items-center justify-center text-brand-gold">
                          <Play size={16} className="fill-brand-gold relative left-0.5 text-brand-gold" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-center text-[10px] font-mono mb-2 text-brand-gold uppercase tracking-wider">
                  <span>{video.category}</span>
                  <span className="text-brand-cream-dim font-light">{video.duration}</span>
                </div>
                
                <h3 className={`font-serif text-lg font-bold text-brand-cream mb-2 leading-snug ${isWatchViewport ? 'text-[8px] leading-tight mb-1 font-semibold' : ''}`}>
                  {video.title}
                </h3>
                <p className={`text-xs text-brand-cream-dim leading-relaxed font-light mb-4 ${isWatchViewport ? 'hidden' : ''}`}>
                  {video.description}
                </p>
              </div>

              <div className="border-t border-brand-gold/10 pt-3 flex justify-between items-center mt-auto">
                <span className="font-mono text-[9px] text-[#8c7459]">{video.producer}</span>
                {!isWatchViewport && (
                  <a
                    href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[10px] text-brand-gold hover:text-brand-gold-bright transition font-mono uppercase font-semibold cursor-pointer"
                  >
                    <span>View on YT</span>
                    <ExternalLink size={10} />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Aesthetic fallback bar representation */}
      <div className={`border border-brand-gold/20 rounded-2xl p-3 bg-brand-card/50 overflow-hidden ${isWatchViewport ? 'hidden' : ''}`}>
        <img 
          src="velvett01.png" 
          alt="Console Rack Room" 
          className="w-full h-32 object-cover object-center rounded-lg grayscale brightness-[0.6] hover:grayscale-0 transition duration-700 select-none" 
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1484876065684-b683cf17d276?auto=format&fit=crop&q=80&w=1200";
          }}
        />
      </div>

    </div>
  );
};
