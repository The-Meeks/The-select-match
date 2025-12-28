"use client";
import { Shield, Lock, Eye, MapPin, CheckCircle } from 'lucide-react';

interface SafetyFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function SafetyFeature({ icon, title, description }: SafetyFeatureProps) {
  return (
    <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-zinc-900 to-black rounded-xl border border-white/10 hover:border-amber-500/30 transition-all">
      <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-medium mb-2 text-white">{title}</h4>
        <p className="text-sm text-gray-400 font-light leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function PrivacySafety() {
  return (
    <section id="privacy-safety" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-4 sm:mb-6 bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent px-4">
            Privacy & Safety
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-amber-400 to-rose-600 mx-auto mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto font-light px-4">
            We take your privacy and security seriously at every step
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          <SafetyFeature
            icon={<Shield size={24} />}
            title="Identity Verification"
            description="Every client undergoes comprehensive identity verification and background checks (with consent) to ensure authenticity and safety."
          />
          
          <SafetyFeature
            icon={<Lock size={24} />}
            title="Data Protection"
            description="All personal information is securely stored and accessed only by authorized matchmakers under strict confidentiality protocols."
          />
          
          <SafetyFeature
            icon={<Eye size={24} />}
            title="No Contact Sharing"
            description="We never share contact details between parties until both individuals mutually agree to connect after their first meeting."
          />
          
          <SafetyFeature
            icon={<MapPin size={24} />}
            title="Premium Venues"
            description="First dates are always held at premium, vetted venues to ensure safety, comfort, and the highest quality experience."
          />
        </div>

        <div className="bg-gradient-to-br from-amber-500/10 to-rose-500/10 rounded-2xl p-8 border border-amber-500/20 backdrop-blur-sm text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <CheckCircle size={24} className="text-amber-400" />
            <h3 className="text-2xl sm:text-3xl font-serif text-amber-400">Our Commitment</h3>
          </div>
          <p className="text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Your privacy and safety are our top priorities. We maintain the highest standards of confidentiality and security throughout your entire matchmaking journey, from initial consultation to ongoing support.
          </p>
        </div>
      </div>
    </section>
  );
}
