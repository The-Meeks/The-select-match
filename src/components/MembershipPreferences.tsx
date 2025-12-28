"use client";
import { Heart, MapPin, Briefcase, GraduationCap, Users, Star } from 'lucide-react';

interface PreferenceCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

function PreferenceCard({ icon, title, items }: PreferenceCardProps) {
  return (
    <div className="bg-gradient-to-br from-zinc-900 to-black rounded-xl p-6 border border-white/10 hover:border-amber-500/30 transition-all">
      <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 mb-4">
        {icon}
      </div>
      <h4 className="text-lg font-medium mb-4 text-white">{title}</h4>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-sm text-gray-400 font-light flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function MembershipPreferences() {
  return (
    <section id="membership-preferences" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-4 sm:mb-6 bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent px-4">
            Membership Preferences
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-amber-400 to-rose-600 mx-auto mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto font-light px-4">
            During onboarding, members define their preferences to ensure every match is intentional and compatible
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <PreferenceCard
            icon={<Heart size={24} />}
            title="Personal Preferences"
            items={[
              "Age range and location",
              "Gender and orientation", 
              "Height, appearance, and lifestyle",
              "Religion, culture, and personal values"
            ]}
          />
          
          <PreferenceCard
            icon={<Briefcase size={24} />}
            title="Professional Background"
            items={[
              "Occupation and industry",
              "Education level",
              "Income bracket",
              "Career goals and ambitions"
            ]}
          />
          
          <PreferenceCard
            icon={<Star size={24} />}
            title="Partner Traits"
            items={[
              "Personality characteristics",
              "Life goals and interests",
              "Relationship expectations",
              "Communication style"
            ]}
          />
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-br from-amber-500/10 to-rose-500/10 rounded-2xl p-8 border border-amber-500/20 backdrop-blur-sm">
            <h3 className="text-2xl sm:text-3xl font-serif mb-4 text-amber-400">Complete Confidentiality</h3>
            <p className="text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              All information is handled with the utmost confidentiality. Your details are never shared outside our team, ensuring complete privacy and discretion throughout your matchmaking journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
