"use client";
import { Crown, ArrowRight, ShieldCheck, Award, Star } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-black z-10" />
        <Image 
          src="/match.jpeg" 
          alt="Elegant couple" 
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 sm:mb-8">
          <Crown className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
          <span className="text-xs sm:text-sm text-amber-200 font-light">Elite Matchmaking Since 2019</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif leading-tight mb-4 sm:mb-6 bg-linear-to-r from-amber-200 via-white to-rose-200 bg-clip-text text-transparent px-4">
          Where Exceptional
          <br />
          People Meet
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-3 sm:mb-4 font-light leading-relaxed px-4">
          Discreet, curated introductions for successful professionals seeking meaningful connections
        </p>

        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-12 font-light px-4">
          No apps. No random matches. Only verified, compatible partners introduced through white-glove service.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
          <a
            href="#about"
            className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-linear-to-r from-amber-500 to-rose-600 hover:from-amber-600 hover:to-rose-700 text-white font-medium shadow-2xl shadow-amber-500/30 transition-all transform hover:scale-105 text-sm sm:text-base"
          >
            Discover Our Service
            <ArrowRight size={18} className="sm:w-5 sm:h-5" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-white/30 text-white hover:bg-white hover:text-black transition-all backdrop-blur-sm text-sm sm:text-base"
          >
            Schedule Consultation
          </a>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm text-gray-400 px-4">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="sm:w-5 sm:h-5 text-amber-400 shrink-0" />
            <span>Verified Members Only</span>
          </div>
          <div className="flex items-center gap-2">
            <Award size={16} className="sm:w-5 sm:h-5 text-amber-400 shrink-0" />
            <span>6 Years of Excellence</span>
          </div>
          <div className="flex items-center gap-2">
            <Star size={16} className="sm:w-5 sm:h-5 text-amber-400 shrink-0" />
            <span>Premium Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}