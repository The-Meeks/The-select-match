"use client";
import { CheckCircle } from 'lucide-react';

interface PackageCardProps {
  tier: string;
  price: string;
  localPrice: string;
  duration: string;
  features: string[];
  popular: boolean;
}

function PackageCard({ tier, price, localPrice, duration, features, popular }: PackageCardProps) {
  return (
    <div className={`rounded-2xl sm:rounded-3xl p-6 sm:p-8 ${popular ? 'bg-linear-to-br from-amber-500/20 to-rose-500/20 border-2 border-amber-500/50 shadow-2xl shadow-amber-500/20 lg:scale-105' : 'bg-linear-to-br from-zinc-900 to-black border border-white/10'} transition-all hover:scale-105`}>
      {popular && (
        <div className="inline-block px-3 sm:px-4 py-1 rounded-full bg-linear-to-r from-amber-500 to-rose-600 text-white text-xs font-medium mb-3 sm:mb-4">
          MOST POPULAR
        </div>
      )}
      
      <h3 className="text-xl sm:text-2xl font-serif mb-2 text-amber-400">{tier}</h3>
      <div className="text-2xl sm:text-3xl font-bold mb-1">{price}</div>
      <div className="text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">{localPrice}</div>
      <div className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">{duration}</div>

      <div className="h-px bg-linear-to-r from-transparent via-white/20 to-transparent mb-4 sm:mb-6" />

      <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300 font-light">
            <CheckCircle size={14} className="sm:w-4 sm:h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className={`w-full inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium transition-all text-sm sm:text-base ${
          popular
            ? 'bg-linear-to-r from-amber-500 to-rose-600 hover:from-amber-600 hover:to-rose-700 text-white shadow-lg shadow-amber-500/30'
            : 'border-2 border-white/20 text-white hover:bg-white hover:text-black'
        }`}
      >
        Select {tier}
      </a>
    </div>
  );
}

export default function Packages() {
  const packages = [
    {
      tier: "Silver",
      price: "$800",
      localPrice: "KES 100,000",
      duration: "3 Months",
      features: [
        "Two fully vetted introductions (both first dates arranged and fully paid at high-end restaurants)",
        "Private consultation and confidential intake form",
        "Access to curated member network",
        "Basic profile setup and presentation guidance",
        "Personalized 30-minute call with matchmaker",
        "Direct communication with matchmaker throughout membership",
        "Option to upgrade anytime"
      ],
      popular: false
    },
    {
      tier: "Gold",
      price: "$1,500",
      localPrice: "KES 200,000",
      duration: "6 Months",
      features: [
        "Everything in Silver, plus:",
        "Two additional carefully vetted introductions (first dates fully paid)",
        "Dedicated matchmaker consultation and ongoing guidance",
        "Post-date feedback and light coaching to refine compatibility",
        "Enhanced profile writing, professional image advice, and presentation guidance",
        "Regional match search tailored to your preferences",
        "Priority scheduling for consultation and introductions"
      ],
      popular: true
    },
    {
      tier: "Platinum",
      price: "$3,000",
      localPrice: "KES 400,000",
      duration: "6-12 Months",
      features: [
        "Everything in Gold, plus:",
        "Six or more hand-selected introductions (first dates fully paid at premium venues)",
        "Senior matchmaker assigned for full-service oversight",
        "Professional image consulting and lifestyle presentation",
        "Personalized date coaching and strategic guidance",
        "National and international match search",
        "Concierge-level service including private check-ins and travel coordination"
      ],
      popular: false
    },
    {
      tier: "Lifetime",
      price: "$10,000",
      localPrice: "KES 1.3M",
      duration: "Lifetime Access",
      features: [
        "Everything in Platinum, plus:",
        "Unlimited introductions for life (all first dates fully paid)",
        "Invitations to exclusive networking dinners, retreats, and elite events",
        "Global match search and introductions",
        "Continuous relationship coaching and mentoring",
        "VIP concierge service with a dedicated senior matchmaker",
        "Priority access to new members and elite circles",
        "Exclusive insights, updates, and luxury matchmaking strategy sessions"
      ],
      popular: false
    }
  ];

  return (
    <section id="packages" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-zinc-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-4 sm:mb-6 bg-linear-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent px-4">
            Membership Packages
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-linear-to-r from-amber-400 to-rose-600 mx-auto mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto font-light px-4">
            Select the level of service that aligns with your journey
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {packages.map((pkg, index) => (
            <PackageCard
              key={index}
              tier={pkg.tier}
              price={pkg.price}
              localPrice={pkg.localPrice}
              duration={pkg.duration}
              features={pkg.features}
              popular={pkg.popular}
            />
          ))}
        </div>

        <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center backdrop-blur-sm">
          <p className="text-sm sm:text-base text-gray-300 font-light">
            <span className="text-amber-400 font-medium">Investment Required:</span> All memberships begin with a mandatory confidential consultation at <span className="font-medium">$50 / KES 6,500</span> to ensure mutual compatibility and maintain the exclusivity of our network.
          </p>
        </div>
      </div>
    </section>
  );
}