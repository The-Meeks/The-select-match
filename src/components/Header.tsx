"use client"
import React from 'react'
import { useState } from 'react'
import { Heart,ArrowRight,Menu,X } from 'lucide-react'
const Header = () => {

    const[mobileMenuOpen,setMobileMenuOpen]=useState(false);
  return (
    <div>
        <header className='fixed top-0 w-full z-50 bg-black/80  backdrop-blur-md border-b border-white/10'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-amber-400 to-rose-600 rounded-full flex items-center justify-center shrink-0">
            <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="white" />
          </div>
          <span className="text-base sm:text-xl font-serif tracking-wide text-amber-400">The Select Match</span>
        </div>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm text-gray-300 font-light">
          <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
          <a href="#process" className="hover:text-amber-400 transition-colors">Our Process</a>
          <a href="#packages" className="hover:text-amber-400 transition-colors">Membership</a>
          <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
        </nav>

        <a href="#contact" className="hidden lg:inline-flex items-center gap-2 px-4 xl:px-6 py-2 xl:py-2.5 rounded-full bg-linear-to-r from-amber-500 to-rose-600 hover:from-amber-600 hover:to-rose-700 text-white font-medium text-sm transition-all shadow-lg shadow-amber-500/20">
          Begin Your Journey
          <ArrowRight size={16} />
        </a>

        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">
          <nav className="flex flex-col p-4 sm:p-6 gap-3 sm:gap-4">
            <a href="#about" className="text-gray-300 hover:text-amber-400 transition-colors py-2">About</a>
            <a href="#process" className="text-gray-300 hover:text-amber-400 transition-colors py-2">Our Process</a>
            <a href="#packages" className="text-gray-300 hover:text-amber-400 transition-colors py-2">Membership</a>
            <a href="#contact" className="text-gray-300 hover:text-amber-400 transition-colors py-2">Contact</a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-amber-500 to-rose-600 text-white font-medium mt-2">
              Begin Your Journey
            </a>
          </nav>
        </div>
      )}

        </header>
    </div>
  )
}

export default Header