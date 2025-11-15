// app/components/HeroSection.tsx
import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 md:py-32 overflow-hidden">
      {/* Background Shapes (optional, for visual flair) */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg
          className="absolute bottom-0 left-0 w-full h-auto"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#fff"
            fillOpacity="0.1"
            d="M0,192L48,170.7C96,149,192,107,288,112C384,117,480,171,576,192C672,213,768,203,864,170.7C960,139,1056,85,1152,80C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Effortless Productivity, <br className="hidden md:inline" /> Simplified Life.
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
          Your all-in-one smart task manager that learns, adapts, and keeps you on track.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/10 px-7 py-2.5 text-base font-semibold text-white shadow-sm backdrop-blur-sm transition-all hover:bg-white hover:text-slate-900 hover:shadow-lg"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-8 py-3 text-base font-semibold text-slate-900 shadow-lg transition-all hover:bg-emerald-300 hover:shadow-xl"
          >
            Get started now
          </Link>
        </div>
      </div>
    </section>
  );
}