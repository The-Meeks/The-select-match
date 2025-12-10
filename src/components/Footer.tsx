"use client";
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-linear-to-br from-amber-400 to-rose-600 rounded-full flex items-center justify-center shrink-0">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="white" />
            </div>
            <span className="text-base sm:text-lg font-serif text-amber-400">The Select Match</span>
          </div>

          <p className="text-gray-500 text-xs sm:text-sm font-light italic text-center">
            "The quality of your relationships defines the quality of your life"
          </p>

          <p className="text-gray-600 text-xs sm:text-sm text-center md:text-right">
            © {new Date().getFullYear()} The Select Match. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}