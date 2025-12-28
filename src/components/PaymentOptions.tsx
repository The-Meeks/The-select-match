"use client";
import { CreditCard, Smartphone, Building, Mail } from 'lucide-react';

interface PaymentMethodProps {
  icon: React.ReactNode;
  title: string;
  methods: string[];
  note?: string;
}

function PaymentMethod({ icon, title, methods, note }: PaymentMethodProps) {
  return (
    <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-amber-500/30 transition-all">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400">
          {icon}
        </div>
        <h3 className="text-xl sm:text-2xl font-serif text-white">{title}</h3>
      </div>
      
      <div className="space-y-3">
        {methods.map((method, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
            <span className="text-sm text-gray-300 font-light">{method}</span>
          </div>
        ))}
      </div>
      
      {note && (
        <div className="mt-4 pt-4 border-t border-white/10">
          <p className="text-xs sm:text-sm text-gray-400 font-light">{note}</p>
        </div>
      )}
    </div>
  );
}

export default function PaymentOptions() {
  return (
    <section id="payment-options" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-4 sm:mb-6 bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent px-4">
            Payment Options
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-amber-400 to-rose-600 mx-auto mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto font-light px-4">
            We accept both local and international payments for your convenience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          <PaymentMethod
            icon={<Smartphone size={24} />}
            title="Kenya Clients"
            methods={[
              "Lipa na M-PESA Paybill: [ENTER PAYBILL NUMBER]",
              "Account Name: [YOUR NAME or INVOICE NUMBER]",
              "Amount: Choose your membership package",
              "You will receive confirmation via SMS and email"
            ]}
          />
          
          <PaymentMethod
            icon={<CreditCard size={24} />}
            title="International Clients"
            methods={[
              "Bank Transfer / SWIFT: [ENTER BANK DETAILS]",
              "Card Payment: Visa / Mastercard / PayPal accepted",
              "Link provided upon request",
              "Corporate invoicing available"
            ]}
            note="For corporate or invoiced payments, please contact us directly at theselectmatch1@gmail.com"
          />
        </div>

        <div className="bg-gradient-to-br from-amber-500/10 to-rose-500/10 rounded-2xl p-8 border border-amber-500/20 backdrop-blur-sm text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Mail size={24} className="text-amber-400" />
            <h3 className="text-2xl sm:text-3xl font-serif text-amber-400">Need Assistance?</h3>
          </div>
          <p className="text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-4">
            Our team is available to help you with any payment questions or special arrangements.
          </p>
          <a 
            href="mailto:theselectmatch1@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-600 hover:to-rose-700 text-white font-medium shadow-xl shadow-amber-500/20 transition-all transform hover:scale-105"
          >
            Contact Support
            <Mail size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
