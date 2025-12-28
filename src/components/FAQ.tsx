"use client";
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
      >
        <span className="text-white font-medium">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-amber-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-amber-400" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-400 font-light leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const faqs = [
    {
      question: "Can I meet my matchmaker in person?",
      answer: "Silver and Gold members can connect with their matchmaker via phone or video call. Platinum and Lifetime members may meet in person or speak directly with their matchmaker."
    },
    {
      question: "Are there guarantees?",
      answer: "While love cannot be predicted, our members enjoy exceptionally high chances of meeting compatible partners thanks to rigorous vetting, personalized matchmaking, and curated introductions tailored to each membership tier."
    },
    {
      question: "What if I am not satisfied with my matches?",
      answer: "Feedback is essential. Silver members can request adjustments to future matches within their package. Gold, Platinum, and Lifetime members benefit from additional curated introductions and enhanced support at no extra cost."
    },
    {
      question: "Is my information confidential?",
      answer: "Absolutely. All client information is strictly private and secured. We operate under comprehensive confidentiality protocols — your details are never shared outside our team without your consent."
    }
  ];

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-4 sm:mb-6 bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent px-4">
            Frequently Asked Questions
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-amber-400 to-rose-600 mx-auto mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto font-light px-4">
            Common questions about our exclusive matchmaking service
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 font-light mb-6">
            Still have questions?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-600 hover:to-rose-700 text-white font-medium shadow-xl shadow-amber-500/20 transition-all transform hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
