"use client";
import { ShieldCheck, Heart, Star, Users, Award, Clock } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-gradient-to-br from-zinc-900 to-black rounded-xl p-6 border border-white/10 hover:border-amber-500/30 transition-all">
      <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 mb-4">
        {icon}
      </div>
      <h4 className="text-lg font-medium mb-3 text-white">{title}</h4>
      <p className="text-sm text-gray-400 font-light leading-relaxed">{description}</p>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-4 sm:mb-6 bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent px-4">
            Why Choose The Select Match
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-amber-400 to-rose-600 mx-auto mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto font-light px-4">
            Discover what sets us apart in the world of elite matchmaking
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <FeatureCard
            icon={<ShieldCheck size={24} />}
            title="Substance Over Swiping"
            description="Unlike dating apps that promise convenience but deliver fatigue, ghosting, scams, and burnout, we believe love deserves substance over swiping"
          />
          
          <FeatureCard
            icon={<Heart size={24} />}
            title="Vetted Introductions"
            description="We vet every client and introduction to ensure you meet people who share your values, goals, and lifestyle"
          />
          
          <FeatureCard
            icon={<Star size={24} />}
            title="Meaningful Relationships"
            description="Our goal is simple: to create meaningful, lasting relationships and marriages for discerning singles"
          />
          
          <FeatureCard
            icon={<Users size={24} />}
            title="Verified Members"
            description="Every member is carefully verified and profiled before any introduction is made"
          />
          
          <FeatureCard
            icon={<Award size={24} />}
            title="Private & Curated"
            description="Our approach remains private, curated, and highly confidential with no apps or random matches"
          />
          
          <FeatureCard
            icon={<Clock size={24} />}
            title="Elite Circle"
            description="Your assigned matchmaker personally guides every step to maintain privacy and security of our elite circle"
          />
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-br from-amber-500/10 to-rose-500/10 rounded-2xl p-8 border border-amber-500/20 backdrop-blur-sm">
            <h3 className="text-2xl sm:text-3xl font-serif mb-4 text-amber-400">Our Promise</h3>
            <p className="text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              We are committed to helping you find a meaningful connection with someone who truly complements your lifestyle, values, and aspirations. Your journey to lasting love begins here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
