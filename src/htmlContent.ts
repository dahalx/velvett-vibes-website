/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// This helper exports strings mimicking all 6 requested standalone files for direct in-app copy/pasting.
export const HTML_EXPORT_FILES: Record<string, string> = {
  'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Velvett Vibes - Pure Audio, Timeless Stories</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
            sans: ['"Outfit"', 'system-ui', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace'],
          },
          colors: {
            brand: {
              bg: '#12100e',
              card: '#1c1815',
              gold: '#c4a47c',
              'gold-bright': '#e5c49f',
              wine: '#4c111e',
              cream: '#f4efea',
              'cream-dim': '#bbaea2',
            }
          }
        }
      }
    }
  </script>
  <style>
    body { background-color: #12100e; color: #f4efea; font-family: 'Outfit', sans-serif; }
    .custom-glow { box-shadow: 0 0 25px rgba(196, 164, 124, 0.15); }
    .text-glow { text-shadow: 0 0 10px rgba(229, 196, 159, 0.2); }
    @media (max-width: 240px) {
      .watch-hide { display: none !important; }
      body { font-size: 10px; padding: 4px; }
      h1 { font-size: 16px !important; }
    }
  </style>
</head>
<body class="selection:bg-brand-gold selection:text-brand-bg relative overflow-x-hidden min-h-screen flex flex-col justify-between">
  <header class="border-b border-brand-gold/10 bg-brand-bg/95 backdrop-blur-md sticky top-0 z-50">
    <div class="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
      <a href="index.html" class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full border border-brand-gold/40 flex items-center justify-center bg-brand-card custom-glow">
          <span class="font-serif text-xl font-bold text-brand-gold text-glow">VV</span>
        </div>
        <div>
          <span class="font-serif text-lg tracking-wider font-semibold text-brand-cream block leading-tight">VELVETT VIBES</span>
          <span class="font-mono text-[9px] tracking-widest text-brand-gold block uppercase leading-none">Studio Lounge</span>
        </div>
      </a>
      <nav class="flex flex-wrap justify-center gap-y-2 gap-x-5 md:gap-x-7 text-sm font-medium">
        <a href="index.html" class="text-brand-gold-bright border-b border-brand-gold/80 pb-0.5 font-serif tracking-wider">Home</a>
        <a href="about.html" class="text-brand-cream-dim hover:text-brand-gold font-serif tracking-wider">About</a>
        <a href="music-videos.html" class="text-brand-cream-dim hover:text-brand-gold font-serif tracking-wider">Music & Videos</a>
        <a href="podcasts.html" class="text-brand-cream-dim hover:text-brand-gold font-serif tracking-wider">Podcasts</a>
        <a href="services.html" class="text-brand-cream-dim hover:text-brand-gold font-serif tracking-wider">Services</a>
        <a href="contact.html" class="text-brand-cream-dim hover:text-brand-gold font-serif tracking-wider">Contact</a>
      </nav>
    </div>
  </header>
  <main class="flex-grow max-w-6xl w-full mx-auto px-4 py-6 md:py-12">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-12">
      <div class="lg:col-span-7 bg-brand-card/60 p-6 md:p-10 rounded-2xl border border-brand-gold/15 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-2 mb-4"><span class="h-px w-8 bg-brand-gold/60"></span><span class="font-mono text-xs text-brand-gold uppercase tracking-wider">Aesthetic Audio Hub</span></div>
          <h1 class="font-serif text-3xl md:text-5xl font-medium text-brand-cream leading-tight mb-4 tracking-tight">Timeless sounds for a <span class="italic text-brand-gold">curated, modern life</span>.</h1>
          <p class="text-brand-cream-dim text-base md:text-lg font-light leading-relaxed mb-6">Welcome to Velvett Vibes, where cozy ambiance, warm acoustic vinyl layers, and meaningful stories meet.</p>
        </div>
        <div class="flex flex-wrap gap-4 pt-4">
          <a href="podcasts.html" class="bg-brand-gold hover:bg-brand-gold-bright text-brand-bg text-sm px-6 py-3 rounded-full font-serif font-semibold transition">Listen to Podcasts</a>
          <a href="services.html" class="border border-brand-gold/40 hover:border-brand-gold hover:bg-brand-gold/5 text-brand-cream text-sm px-6 py-3 rounded-full font-serif transition">Explore Services</a>
        </div>
      </div>
      <div class="lg:col-span-5 bg-gradient-to-br from-brand-card to-[#231b17] border border-brand-gold/20 p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden custom-glow">
        <div>
          <div class="flex justify-between items-center mb-6"><span class="font-mono text-[10px] bg-brand-wine/50 text-brand-gold border border-brand-gold/30 px-2.5 py-1 rounded-full uppercase tracking-wider">Now Playing</span><span class="font-mono text-[10px] text-brand-cream-dim">HIFI STEREO</span></div>
          <div class="flex items-center gap-4 mb-6">
            <div class="relative w-16 h-16 rounded-full border border-brand-gold/30 flex items-center justify-center bg-brand-bg">
              <div class="w-12 h-12 rounded-full bg-brand-card border border-brand-gold/20 flex items-center justify-center"><div class="w-4 h-4 rounded-full bg-brand-gold"></div></div>
            </div>
            <div>
              <h3 class="font-serif text-lg font-semibold text-brand-cream">Inside Out Podcast</h3>
              <p class="text-xs text-brand-gold font-mono uppercase">With Usha Upreti</p>
            </div>
          </div>
          <audio controls class="w-full opacity-90 accent-brand-gold scale-[0.95]" style="color-scheme: dark;"><source src="https://actions.google.com/sounds/v1/ambient/dark_ambient_stretch_pad.ogg" type="audio/ogg"></audio>
        </div>
      </div>
    </div>
    <div class="bg-brand-card border border-brand-gold/25 rounded-2xl p-4 md:p-8 mb-12 relative overflow-hidden shadow-2xl">
      <div class="absolute inset-0 bg-brand-bg/40 backdrop-blur-xs flex flex-col justify-end p-6 md:p-10 pointer-events-none z-10">
        <p class="font-serif text-xl md:text-3xl text-brand-cream font-medium tracking-tight">Elegance in Every Dynamic Decibel</p>
      </div>
      <img src="velvett01.png" alt="Velvett Vibes Setup" class="w-full h-44 md:h-72 object-cover rounded-xl border border-brand-gold/15 brightness-[0.75]">
    </div>
  </main>
  <footer class="border-t border-brand-gold/10 bg-brand-bg/95 py-6 text-center text-xs font-mono text-brand-cream-dim">
    <div class="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p class="font-serif text-sm text-brand-cream font-semibold">&copy; 2026 VELVETT VIBES STUDIO. All rights reserved.</p>
    </div>
  </footer>
</body>
</html>`,

  'about.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Velvett Vibes - Our Acoustics Story</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
            sans: ['"Outfit"', 'system-ui', 'sans-serif'],
          },
          colors: {
            brand: {
              bg: '#12100e',
              card: '#1c1815',
              gold: '#c4a47c',
              cream: '#f4efea',
              'cream-dim': '#bbaea2',
            }
          }
        }
      }
    }
  </script>
</head>
<body class="bg-brand-bg text-brand-cream font-sans relative overflow-x-hidden min-h-screen flex flex-col justify-between">
  <header class="border-b border-brand-gold/10 bg-brand-bg/95 backdrop-blur-md sticky top-0 z-50">
    <div class="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
      <a href="index.html" class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full border border-brand-gold/40 flex items-center justify-center bg-brand-card text-brand-gold font-serif text-xl font-bold">VV</div>
        <span class="font-serif text-lg tracking-wider font-semibold">VELVETT VIBES</span>
      </a>
      <nav class="flex flex-wrap justify-center gap-y-2 gap-x-5 text-sm font-medium">
        <a href="index.html" class="text-brand-cream-dim hover:text-brand-gold font-serif">Home</a>
        <a href="about.html" class="text-brand-gold font-serif">About</a>
        <a href="music-videos.html" class="text-brand-cream-dim hover:text-brand-gold font-serif">Music & Videos</a>
        <a href="podcasts.html" class="text-brand-cream-dim hover:text-brand-gold font-serif">Podcasts</a>
        <a href="services.html" class="text-brand-cream-dim hover:text-brand-gold font-serif">Services</a>
        <a href="contact.html" class="text-brand-cream-dim hover:text-brand-gold font-serif">Contact</a>
      </nav>
    </div>
  </header>
  <main class="flex-grow max-w-6xl w-full mx-auto px-4 py-6 md:py-12">
    <div class="text-center max-w-2xl mx-auto mb-12">
      <h1 class="font-serif text-3xl md:text-5xl font-medium mb-4">Deep listening in a <span class="italic text-brand-gold">high-speed</span> world.</h1>
      <p class="text-brand-cream-dim font-light text-base md:text-lg">We believe that human legacy is recorded in sound.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
      <div class="space-y-6">
        <h2 class="font-serif text-2xl md:text-3xl text-brand-gold font-semibold">Our YouTube Community</h2>
        <p class="text-brand-cream-dim text-sm md:text-base font-light leading-relaxed">Through @VelvetVibesEnt, we support fine stories and local events photography & videography. Our mission is to preserve memorable traditional ceremonies like marriage, pasni, and bratabandha, as well as share high fidelity podcasts with beloved hosts.</p>
      </div>
      <div>
        <img src="velvett01.png" alt="Setup" class="rounded-xl border border-brand-gold/15 w-full h-64 object-cover">
      </div>
    </div>
  </main>
  <footer class="border-t border-brand-gold/10 bg-brand-bg/95 py-6 text-center text-xs text-brand-cream-dim">&copy; 2026 VELVETT VIBES</footer>
</body>
</html>`,

  'music-videos.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Velvett Vibes - Live Room & Music Videos</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: { serif: ['"Cormorant Garamond"'], sans: ['"Outfit"'] },
          colors: { brand: { bg: '#12100e', card: '#1c1815', gold: '#c4a47c', cream: '#f4efea', 'cream-dim': '#bbaea2' } }
        }
      }
    }
  </script>
</head>
<body class="bg-brand-bg text-brand-cream font-sans min-h-screen flex flex-col justify-between">
  <header class="border-b border-brand-gold/10 bg-brand-bg/95 sticky top-0 z-50">
    <div class="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between">
      <span class="font-serif text-lg tracking-wider font-semibold">VELVETT VIBES</span>
      <nav class="flex flex-wrap gap-x-5 text-sm">
        <a href="index.html" class="text-brand-cream-dim font-serif">Home</a>
        <a href="about.html" class="text-brand-cream-dim font-serif">About</a>
        <a href="music-videos.html" class="text-brand-gold font-serif">Music & Videos</a>
        <a href="podcasts.html" class="text-brand-cream-dim font-serif">Podcasts</a>
        <a href="services.html" class="text-brand-cream-dim font-serif">Services</a>
        <a href="contact.html" class="text-brand-cream-dim font-serif">Contact</a>
      </nav>
    </div>
  </header>
  <main class="flex-grow max-w-6xl w-full mx-auto px-4 py-8">
    <h1 class="font-serif text-3xl md:text-5xl font-medium text-brand-gold mb-6">Music Videos</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <div class="bg-brand-card border border-brand-gold/15 p-4 rounded-2xl">
        <iframe class="w-full aspect-video rounded-xl mb-4" src="https://www.youtube.com/embed/VgMmIxekQns" frameborder="0" allowfullscreen></iframe>
        <h2 class="font-serif text-xl font-bold">Sanubaba - Velvett Vibes Original</h2>
      </div>
      <div class="bg-brand-card border border-brand-gold/15 p-4 rounded-2xl">
        <iframe class="w-full aspect-video rounded-xl mb-4" src="https://www.youtube.com/embed/cSDJOsdP7yc" frameborder="0" allowfullscreen></iframe>
        <h2 class="font-serif text-xl font-bold">Pirat - Acoustic Visual Cover</h2>
      </div>
    </div>
    <div class="bg-brand-card border border-brand-gold/25 rounded-2xl p-4 md:p-8 relative overflow-hidden">
      <img src="velvett01.png" alt="Signature Setup" class="w-full h-44 md:h-64 object-cover rounded-xl border border-brand-gold/15 brightness-[0.75]">
    </div>
  </main>
</body>
</html>`,

  'podcasts.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Velvett Vibes - Pure Conversational Podcasts</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Outfit:wght@300;400;500&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: { serif: ['"Cormorant Garamond"'], sans: ['"Outfit"'] },
          colors: { brand: { bg: '#12100e', card: '#1c1815', gold: '#c4a47c', cream: '#f4efea', 'cream-dim': '#bbaea2' } }
        }
      }
    }
  </script>
</head>
<body class="bg-brand-bg text-brand-cream font-sans min-h-screen flex flex-col justify-between">
  <header class="border-b border-brand-gold/10 bg-brand-bg/95 sticky top-0 z-50">
    <div class="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
      <span class="font-serif text-lg font-bold">VELVETT VIBES</span>
      <nav class="flex gap-x-5 text-sm">
        <a href="index.html" class="text-brand-cream-dim">Home</a>
        <a href="about.html" class="text-brand-cream-dim">About</a>
        <a href="music-videos.html" class="text-brand-cream-dim">Music & Videos</a>
        <a href="podcasts.html" class="text-brand-gold">Podcasts</a>
        <a href="services.html" class="text-brand-cream-dim">Services</a>
        <a href="contact.html" class="text-brand-cream-dim">Contact</a>
      </nav>
    </div>
  </header>
  <main class="flex-grow max-w-6xl w-full mx-auto px-4 py-8">
    <h1 class="font-serif text-3xl md:text-5xl font-medium text-brand-gold mb-4">Podcasts VVE</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      
      <div class="bg-brand-card border border-brand-gold/15 p-6 rounded-2xl">
        <span class="text-brand-gold font-mono text-xs uppercase block mb-2">Series: Inside Out with Usha Upreti</span>
        <iframe class="w-full aspect-video rounded-xl mb-4" src="https://www.youtube.com/embed/SeoNqEzYP3w" frameborder="0" allowfullscreen></iframe>
        <h2 class="font-serif text-lg font-bold mb-1 text-brand-cream">One on One with Usha Upreti</h2>
      </div>

      <div class="bg-brand-card border border-brand-gold/15 p-6 rounded-2xl">
        <span class="text-brand-gold font-mono text-xs uppercase block mb-2">Series: Chit Chat</span>
        <iframe class="w-full aspect-video rounded-xl mb-4" src="https://www.youtube.com/embed/vTZWljmIA1o" frameborder="0" allowfullscreen></iframe>
        <h2 class="font-serif text-lg font-bold mb-1 text-brand-cream">Chit Chat Podcast Series</h2>
      </div>

      <div class="bg-brand-card border border-brand-gold/15 p-6 rounded-2xl">
        <span class="text-brand-gold font-mono text-xs uppercase block mb-2">Series: Numerology@VVE</span>
        <iframe class="w-full aspect-video rounded-xl mb-4" src="https://www.youtube.com/embed/XlxTu4tCwyU" frameborder="0" allowfullscreen></iframe>
        <h2 class="font-serif text-lg font-bold mb-3 text-brand-cream">Numerology Alignment Secrets</h2>
      </div>

    </div>
  </main>
</body>
</html>`,

  'services.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Velvett Vibes - Event videography & photography for Nepalese events</title>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Outfit:wght@300;400;600&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: { serif: ['"Cormorant Garamond"'], sans: ['"Outfit"'] },
          colors: { brand: { bg: '#12100e', card: '#1c1815', gold: '#c4a47c', cream: '#f4efea', 'cream-dim': '#bbaea2' } }
        }
      }
    }
  </script>
</head>
<body class="bg-brand-bg text-brand-cream font-sans min-h-screen flex flex-col justify-between">
  <header class="border-b border-brand-gold/10 bg-brand-bg/95 sticky top-0 z-50">
    <div class="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
      <span class="font-serif text-lg font-bold">VELVETT VIBES</span>
      <nav class="flex gap-x-5 text-sm">
        <a href="index.html" class="text-brand-cream-dim">Home</a>
        <a href="about.html" class="text-brand-cream-dim">About</a>
        <a href="music-videos.html" class="text-brand-cream-dim">Music & Videos</a>
        <a href="podcasts.html" class="text-brand-cream-dim">Podcasts</a>
        <a href="services.html" class="text-brand-gold">Services</a>
        <a href="contact.html" class="text-brand-cream-dim">Contact</a>
      </nav>
    </div>
  </header>
  <main class="flex-grow max-w-6xl w-full mx-auto px-4 py-8">
    <h1 class="font-serif text-3xl md:text-5xl font-medium text-brand-gold mb-6">Traditional Event Services</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <div class="bg-brand-card border border-brand-gold/15 p-6 rounded-2xl">
        <h2 class="font-serif text-2xl font-bold text-brand-cream mb-2">Cinematic Marriage Recaps</h2>
        <p class="text-sm font-light text-brand-cream-dim leading-relaxed">Full coverage of Swayamvar rituals, sacred fire ceremonies, Janti guests arriving, and warm portraits tailored for Nepalese couples.</p>
      </div>
      <div class="bg-brand-card border border-brand-gold/15 p-6 rounded-2xl">
        <h2 class="font-serif text-2xl font-bold text-brand-cream mb-2">Pasni & Bratabandha</h2>
        <p class="text-sm font-light text-brand-cream-dim leading-relaxed">High-definition capturing of rice feeding rituals, elder temple blessings, sacred thread passage, and fun baby photoshoots.</p>
      </div>
    </div>
    <div class="bg-brand-card border border-brand-gold/25 rounded-2xl p-4 md:p-8 relative overflow-hidden mb-12">
      <img src="velvett01.png" alt="Console View" class="w-full h-44 md:h-60 object-cover rounded-xl border border-brand-gold/15 brightness-[0.75]">
    </div>
  </main>
</body>
</html>`,

  'contact.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Velvett Vibes - Connect & Book</title>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Outfit:wght@300;400;600&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: { serif: ['"Cormorant Garamond"'], sans: ['"Outfit"'] },
          colors: { brand: { bg: '#12100e', card: '#1c1815', gold: '#c4a47c', cream: '#f4efea', 'cream-dim': '#bbaea2' } }
        }
      }
    }
  </script>
</head>
<body class="bg-brand-bg text-brand-cream font-sans min-h-screen flex flex-col justify-between">
  <header class="border-b border-brand-gold/10 bg-brand-bg/95 sticky top-0 z-50">
    <div class="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
      <span class="font-serif text-lg font-bold">VELVETT VIBES</span>
      <nav class="flex gap-x-5 text-sm">
        <a href="index.html" class="text-brand-cream-dim">Home</a>
        <a href="about.html" class="text-brand-cream-dim">About</a>
        <a href="music-videos.html" class="text-brand-cream-dim">Music & Videos</a>
        <a href="podcasts.html" class="text-brand-cream-dim">Podcasts</a>
        <a href="services.html" class="text-brand-cream-dim">Services</a>
        <a href="contact.html" class="text-brand-gold">Contact</a>
      </nav>
    </div>
  </header>
  <main class="flex-grow max-w-6xl w-full mx-auto px-4 py-8">
    <h1 class="font-serif text-3xl md:text-5xl font-medium tracking-tight text-brand-gold mb-6 text-center">Start Your traditional Lens Session</h1>
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
      <div class="lg:col-span-4 bg-brand-card p-6 rounded-2xl border border-brand-gold/15">
        <h2 class="font-serif text-lg font-bold text-brand-gold mb-3 uppercase">Lounge Hours</h2>
        <p class="text-xs text-brand-cream-dim leading-relaxed">Mon — Fri: 10:00 - 18:00<br>Sat-Sun: Session appointments only</p>
      </div>
      <div class="lg:col-span-8 bg-brand-card border border-brand-gold/20 p-6 rounded-2xl">
        <form class="space-y-4">
          <input type="text" placeholder="Your Name" required class="w-full bg-brand-bg border border-brand-gold/25 rounded-lg px-4 py-2 text-brand-cream">
          <input type="email" placeholder="Email Address" required class="w-full bg-brand-bg border border-brand-gold/25 rounded-lg px-4 py-2 text-brand-cream">
          <textarea placeholder="Tell us about your wedding, pasni or bratabandha coverage" required rows="4" class="w-full bg-brand-bg border border-brand-gold/25 rounded-lg px-4 py-2 text-brand-cream"></textarea>
          <button type="submit" class="w-full bg-brand-gold hover:bg-brand-gold-bright text-brand-bg py-3 rounded-full font-serif font-bold uppercase transition">Send Event Request</button>
        </form>
      </div>
    </div>
  </main>
</body>
</html>`
};
