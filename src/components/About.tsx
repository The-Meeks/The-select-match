"use client";
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

interface FeatureProps {
  text: string;
}

function Feature({ text }: FeatureProps) {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <CheckCircle size={18} className="sm:w-5 sm:h-5 text-amber-400 shrink-0" />
      <span className="text-sm sm:text-base text-gray-300 font-light">{text}</span>
    </div>
  );
}

interface WhoWeServeCardProps {
  title: string;
  description: string;
}

function WhoWeServeCard({ title, description }: WhoWeServeCardProps) {
  return (
    <div className="text-center">
      <h4 className="text-lg sm:text-xl font-medium mb-2 sm:mb-3 text-white">{title}</h4>
      <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">{description}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-black to-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-4 sm:mb-6 bg-gradient-to-r from-amber-400 via-amber-400 to-rose-400 bg-clip-text text-transparent px-4">
            About The Select Match
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-amber-400 via-amber-400 to-rose-600 mx-auto mb-6 sm:mb-8" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center mb-12 sm:mb-16">
          <div className="order-2 md:order-1 relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden">
            <Image 
              src="/dining.jpg" 
              alt="Luxury dining" 
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="space-y-4 sm:space-y-6 order-1 md:order-2">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-light">
              For the past six years, <span className="text-amber-400 font-medium">The Select Match</span> has operated discreetly, introducing successful, like-minded professionals through private networks and referrals.
            </p>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-light">
              We are now bringing this exclusive experience online to meet the growing demand for intentional dating among successful individuals who value privacy, class, and genuine connection.
            </p>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-light">
              Our approach remains private, curated, and highly confidential. No apps. No random matches. No contact exchange until both parties consent.
            </p>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-light">
              Every introduction is fully arranged for you. Your dates will be held at a high-end restaurant, reserved under your name, and handled with the utmost discretion (fully paid by us).
            </p>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-light">
              After your first meeting, the next steps are personally guided by your assigned matchmaker to maintain the privacy and security of our elite circle.
            </p>

            <div className="space-y-3 sm:space-y-4 pt-4">
              <Feature text="Fully vetted and verified members" />
              <Feature text="Private, curated introductions" />
              <Feature text="First dates at premium venues — arranged and paid for" />
              <Feature text="No contact exchange until mutual consent" />
              <Feature text="Complete discretion and confidentiality" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-500/10 to-rose-500/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-amber-500/20 backdrop-blur-sm">
          <h3 className="text-2xl sm:text-3xl font-serif mb-6 sm:mb-8 text-center text-amber-400">Who We Serve</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <WhoWeServeCard 
              title="Busy Professionals & Executives"
              description="Successful professionals seeking meaningful connections without compromising their valuable time"
            />
            <WhoWeServeCard 
              title="Entrepreneurs & HNWIs"
              description="High-net-worth individuals valuing privacy, quality, and intentional relationships"
            />
            <WhoWeServeCard 
              title="Divorcees & Private Individuals"
              description="Those seeking a new chapter or tired of online dating frustration and ready for real connection"
            />
          </div>
        </div>
      </div>
    </section>
  );
}