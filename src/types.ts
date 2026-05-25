/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageId = 'home' | 'about' | 'music-videos' | 'podcasts' | 'event-services' | 'contact' | 'exporter';

export interface PageDefinition {
  id: PageId;
  label: string;
  icon: string;
}

export interface PodcastEpisode {
  id: string;
  title: string;
  series: string;
  duration: string;
  date: string;
  description: string;
  audioUrl: string;
  youtubeId?: string;
}

export interface VideoRelease {
  id: string;
  title: string;
  description: string;
  producer: string;
  duration: string;
  category: string;
  videoUrl: string;
  thumbnailUrl: string;
  youtubeId?: string;
}

export interface ServicePackage {
  id: string;
  title: string;
  subtitle: string;
  basePrice: string;
  priceValue: number;
  description: string;
  features: string[];
  recommended: boolean;
}

export interface ContactMessage {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  selectedPackage?: string;
}
