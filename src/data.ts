/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PodcastEpisode, VideoRelease, ServicePackage } from './types';

export const PAGES = [
  { id: 'home', label: 'Home', icon: 'Home' },
  { id: 'podcasts', label: 'Podcasts', icon: 'Mic' },
  { id: 'music-videos', label: 'Music Videos', icon: 'Film' },
  { id: 'event-services', label: 'Event Services', icon: 'Wrench' },
  { id: 'about', label: 'About Us', icon: 'User' },
  { id: 'contact', label: 'Contact Us', icon: 'Mail' },
  { id: 'exporter', label: '💾 Export Code', icon: 'Download' }
];

export const PODCAST_EPISODES: PodcastEpisode[] = [
  {
    id: 'pod-inside-out-1',
    title: 'Inside Out: One on One with Usha Upreti (Episode 1)',
    series: 'Inside Out',
    duration: '45:12',
    date: 'June 12, 2024',
    description: 'A deep, personal, and candid one-on-one dialogue hosted by Usha Upreti. Exploring behind-the-scenes stories, personal challenges, and triumphant moments of Nepalese artists and influencers in an atmospheric lounge setting.',
    audioUrl: 'https://actions.google.com/sounds/v1/ambient/dark_ambient_stretch_pad.ogg',
    youtubeId: 'SeoNqEzYP3w'
  },
  {
    id: 'pod-inside-out-5',
    title: 'Inside Out: One on One with Usha Upreti (Episode 5)',
    series: 'Inside Out',
    duration: '38:40',
    date: 'July 05, 2024',
    description: 'Episode 5 of the series. Uncovering raw truths and personal philosophies. Usha Upetri leads an intimate storytelling session exploring the dreams, failures, and creative sparks of celebrated creators.',
    audioUrl: 'https://actions.google.com/sounds/v1/ambient/music_lounge_jazz.ogg',
    youtubeId: 'DeE14Ewu0mk'
  },
  {
    id: 'pod-chit-chat',
    title: 'Chit Chat with Velvett Vibes Entertainment',
    series: 'Chit Chat',
    duration: '52:18',
    date: 'August 18, 2024',
    description: 'Casual, vibrant, and fun-filled conversations detailing cultural activities, trends, and artistic lifestyles. Broad smiles, great lighting, and engaging table-talk from Velvett Vibes sessions.',
    audioUrl: 'https://actions.google.com/sounds/v1/ambient/quiet_woodland_breeze.ogg',
    youtubeId: 'vTZWljmIA1o'
  },
  {
    id: 'pod-numerology',
    title: 'Numerology & Predictions @ VVE',
    series: 'Numerology',
    duration: '30:25',
    date: 'September 01, 2024',
    description: 'Unlocking hidden cosmic frequencies and alphabetical configurations. Discover how dates of birth, numbers, and celestial layouts shape paths and guide media productions in Velvett Vibes Entertainment style.',
    audioUrl: 'https://actions.google.com/sounds/v1/ambient/soft_warm_synth_glowing.ogg',
    youtubeId: 'XlxTu4tCwyU'
  }
];

export const VIDEO_RELEASES: VideoRelease[] = [
  {
    id: 'mvid-1',
    title: 'Sanubaba - Velvett Vibes Original Music Release',
    description: 'A beautifully choreographed and high-fidelity melodic experience celebrating modern beats fused with absolute analog warmth. Crafted under signature Velvett Vibes creative direction.',
    producer: 'Velvett Vibes Productions',
    duration: '4:32',
    category: 'Music Video',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800',
    youtubeId: 'VgMmIxekQns'
  },
  {
    id: 'mvid-2',
    title: 'Pirat: Deep Melodic Echoes',
    description: 'Cinematic storytelling elements and intricate acoustic framing. A journey of high-definition visuals paired with retro voiceover and atmospheric Nepalese sound arrays.',
    producer: 'Velvett Vibes Productions',
    duration: '3:58',
    category: 'Music Video',
    videoUrl: 'https://www.w3schools.com/html/movie.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800',
    youtubeId: 'cSDJOsdP7yc'
  }
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'pkg-marriage',
    title: 'Traditional Wedding Filming',
    subtitle: 'Marriage Cinematic Videography & Portraits',
    basePrice: '$1,800',
    priceValue: 1800,
    description: 'Ultimate multi-day documentation covering standard Nepalese marriage traditions ( Swayamvar, Mehendi, Janti, and Reception rituals). Features slow-motion lens work, rich analog tones, and dual-camera operators.',
    features: [
      'Full Day Coverage (Swayamvar, Janti Reception to Send-off)',
      '1 Cinematic Highlight Trailer (4-5 minutes, 4K resolution)',
      'Full-Length Event Reel (60-90 minutes of clear audio & video)',
      'Professional Portrait & Ceremonial Photography (450+ raw digital negatives)',
      'Custom gold-plated physical USB souvenir keepsake container'
    ],
    recommended: true
  },
  {
    id: 'pkg-pasni-bratabandha',
    title: 'Pasni & Bratabandha Essentials',
    subtitle: 'Charming Child & Family Ritual Milestones',
    basePrice: '$750',
    priceValue: 750,
    description: 'Tailored coverage of child milestone rituals like Pasni (the first Rice Feeding Ceremony) or Bratabandha (holy thread passage). Captured with absolute gentleness, preserving pure expressions and family elder blessings.',
    features: [
      '3 hours of professional on-location filming & photography',
      'Candid baby portrait shoots & group family poses',
      '1 Polished cinematic highlight video cut (2-3 minutes)',
      '150+ color-graded high resolution digital portraits',
      'Warm custom backing soundscape compilation'
    ],
    recommended: false
  },
  {
    id: 'pkg-maternity-baby',
    title: 'Maternity & Baby Portraitures',
    subtitle: 'Nurturing & Gentle Lens Craft',
    basePrice: '$450',
    priceValue: 450,
    description: 'Elegant, eye-safe, and heartwarming photoshoots celebrating pregnant beauty or sweet newborn layouts. Done either in our climate-conditioned premium studio lounge or in the comfort of your own warm home.',
    features: [
      '90 Minutes focused portrait session',
      'Artistic layout and accessory suggestions',
      '30 fully-retouched premium high-fidelity digital prints',
      'Full access to all raw source files (with light adjustments)',
      'Private online preview gallery for family shares'
    ],
    recommended: false
  },
  {
    id: 'pkg-sweet16',
    title: 'Sweet 16 & Birthday Festivities',
    subtitle: 'Vibrant Cinematic & Sound Coverage',
    basePrice: '$650',
    priceValue: 650,
    description: 'Dynamic, high-energy coverage for teenage anniversaries and Sweet 16 milestones. Features punchy cinematic cuts, guest testimonials on camera, and atmospheric strobe/glowing filter highlights.',
    features: [
      '4 hours on-site coverage with stabilized gimbals',
      'Acoustic guest audio messages recording console',
      '1 Modern upbeat recap video (Instagram and Tik-Tok optimized)',
      '80+ edited digital action photos',
      'Pristine sound level matching for speech delivery'
    ],
    recommended: false
  }
];
