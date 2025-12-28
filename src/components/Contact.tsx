"use client";
import { Phone, Mail, ArrowRight, Sparkles } from 'lucide-react';

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function ContactItem({ icon, label, value }: ContactItemProps) {
  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-xs sm:text-sm text-gray-400 font-light">{label}</div>
        <div className="text-sm sm:text-base text-white font-medium break-all">{value}</div>
      </div>
    </div>
  );
}

interface WhyChooseItemProps {
  text: string;
}

function WhyChooseItem({ text }: WhyChooseItemProps) {
  return (
    <div className="flex items-start gap-2 sm:gap-3">
      <Sparkles size={14} className="sm:w-4 sm:h-4 text-amber-400 shrink-0 mt-1" />
      <span className="text-gray-300 font-light text-xs sm:text-sm">{text}</span>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-4 sm:mb-6 bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent px-4">
            Contact Us
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-amber-400 to-rose-600 mx-auto mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 font-light px-4">
            Schedule your confidential consultation today
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10">
            <h3 className="text-xl sm:text-2xl font-serif mb-6 sm:mb-8 text-amber-400">Get In Touch</h3>
            
            <div className="space-y-4 sm:space-y-6">
              <ContactItem 
                icon={<Phone size={18} className="sm:w-5 sm:h-5" />}
                label="Phone / WhatsApp"
                value="[PHONE / WHATSAPP NUMBER]"
              />
              <ContactItem 
                icon={<Mail size={18} className="sm:w-5 sm:h-5" />}
                label="Email"
                value="theselectmatch1@gmail.com"
              />
            </div>

            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/10">
              <h4 className="text-base sm:text-lg font-medium mb-3 sm:mb-4 text-amber-400">Payment Options</h4>
              <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-400">
                <div>
                  <p className="font-medium text-gray-300 mb-2">Kenya</p>
                  <p>M-PESA Paybill: [ENTER PAYBILL NUMBER]</p>
                  <p>Account: [YOUR NAME or INVOICE NUMBER]</p>
                </div>
                <div>
                  <p className="font-medium text-gray-300 mb-2">International</p>
                  <p>Bank Transfer / SWIFT: [ENTER BANK DETAILS]</p>
                  <p>Card Payment: Visa / Mastercard / PayPal</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-500/10 to-rose-500/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-amber-500/20 backdrop-blur-sm">
            <h3 className="text-xl sm:text-2xl font-serif mb-4 sm:mb-6 text-amber-400">Why Choose Us?</h3>
            <div className="space-y-3 sm:space-y-4">
              <WhyChooseItem text="Substance over swiping - no dating app fatigue" />
              <WhyChooseItem text="Every client and introduction is carefully vetted" />
              <WhyChooseItem text="Meaningful, lasting relationships and marriages" />
              <WhyChooseItem text="Private, curated, highly confidential approach" />
              <WhyChooseItem text="Premium first dates, fully arranged and paid" />
              <WhyChooseItem text="Personal matchmaker guidance every step" />
            </div>

            <a 
              href="/profile"
              className="mt-6 sm:mt-8 w-full inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-600 hover:to-rose-700 text-white font-medium shadow-xl shadow-amber-500/20 transition-all transform hover:scale-105 text-sm sm:text-base"
            >
              Complete Client Profile
              <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}